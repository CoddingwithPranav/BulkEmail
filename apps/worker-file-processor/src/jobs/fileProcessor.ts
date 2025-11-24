import logger from "@repo/config/logger";
import { dbClient } from "@repo/db";
import { uploadFileSchema } from "@repo/types";
import { Job } from "bullmq";
import csv from "csv-parser";
import fs from "fs";
import path from "path";
import XLSX from "xlsx";

// Helper: Get shared uploads directory at monorepo root
const getUploadsDir = (): string => {
  if (process.env.TURBO_ROOT) {
    return path.join(process.env.TURBO_ROOT, "uploads");
  }
  return path.resolve(__dirname, "../../../../uploads");
};

const UPLOADS_DIR = getUploadsDir();

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  logger.info("Shared uploads directory ensured", { path: UPLOADS_DIR });
}

export const processFileJob = async (job: Job) => {
  const { fileId, filePath } = job.data as { fileId: string; filePath: string };

  logger.info("Starting file processing", { jobId: job.id, fileId, filePath });

  let validCount = 0;
  let invalidRows: any[] = [];

  try {
    // Helper to split name into first and last
    const splitName = (
      fullName: string
    ): { firstName: string; lastName: string } => {
      const parts = fullName.trim().split(/\s+/);
      if (parts.length === 0) return { firstName: "Unknown", lastName: "User" };
      if (parts.length === 1)
        return { firstName: parts[0] ?? "", lastName: "" };
      return {
        firstName: parts[0] ?? "",
        lastName: parts.slice(1).join(" ") ?? "",
      };
    };

    if (filePath.endsWith(".csv")) {
      await new Promise<void>((resolve, reject) => {
        const validReceivers: any[] = [];

        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => {
            const parsed = uploadFileSchema.safeParse({
              name: String(row.name || row.Name || "").trim(),
              email: String(row.email || row.Email || "")
                .trim()
                .toLowerCase(),
              phoneNumber: String(
                row.phone || row.mobile || row.Phone || row.Mobile || ""
              )
                .replace(/\D/g, "")
                .trim(),
            });

            if (parsed.success) {
              const { firstName, lastName } = splitName(parsed.data.name);
              validReceivers.push({
                fileId,
                firstName,
                lastName,
                phoneNumber: parsed.data.phoneNumber ?? "9813393593", // This is now correct and present!
              });
              validCount++;
            } else {
              invalidRows.push({
                row,
                errors: parsed.error.format(),
              });
            }

            const processed = validCount + invalidRows.length;
            if (processed % 50 === 0) {
              job.updateProgress(
                Math.min(90, Math.round((processed / 10000) * 90))
              );
            }
          })
          .on("end", async () => {
            try {
              if (validReceivers.length > 0) {
                await dbClient.upload_Receiver.createMany({
                  data: validReceivers,
                  skipDuplicates: true,
                });
                logger.info("Successfully inserted receivers", {
                  fileId,
                  count: validReceivers.length,
                });
              }
              resolve();
            } catch (err) {
              reject(err);
            }
          })
          .on("error", (err) => {
            logger.error("CSV parsing error", { error: err.message });
            reject(err);
          });
      });
    } else if (filePath.match(/\.(xlsx|xls)$/i)) {
      // Handle Excel files
      const workbook = XLSX.readFile(filePath);
      const firstSheetName = workbook.SheetNames[0];
      if (!firstSheetName) {
        throw new Error("No sheets found in Excel file");
      }
      const sheet = workbook.Sheets[firstSheetName];
      if (!sheet) {
        throw new Error("Sheet not found in Excel file");
      }
      const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: "" });

      const validReceivers: any[] = [];

      rows.forEach((row) => {
        const parsed = uploadFileSchema.safeParse({
          name: String(row.name || row.Name || "").trim(),
          email: String(row.email || row.Email || "")
            .trim()
            .toLowerCase(),
          phoneNumber: String(
            row.phone || row.mobile || row.Phone || row.Mobile || ""
          )
            .replace(/\D/g, "")
            .trim(),
        });

        if (parsed.success) {
          const { firstName, lastName } = splitName(parsed.data.name);
          validReceivers.push({
            fileId,
            firstName,
            lastName,
            phoneNumber: parsed.data.phoneNumber,
          });
          validCount++;
        } else {
          invalidRows.push({ row, errors: parsed.error.format() });
        }
      });

      if (validReceivers.length > 0) {
        await dbClient.upload_Receiver.createMany({
          data: validReceivers,
          skipDuplicates: true,
        });
      }
    } else {
      throw new Error("Unsupported file format");
    }

    // Update file status in DB
    await dbClient.files.update({
      where: { id: fileId },
      data: {
        uploadStatus: "UPLOADED",
        numberOfReceivers: validCount,
        // invalidRowsPath: invalidRows.length > 0 ? saveInvalidFile() : null,
      },
    });

    job.updateProgress(100);

    logger.info("File processed successfully", {
      jobId: job.id,
      fileId,
      validCount,
      invalidCount: invalidRows.length,
    });
  } catch (err: any) {
    logger.error("File processing failed", {
      jobId: job.id,
      fileId,
      error: err.message,
      stack: err.stack,
    });

    await dbClient.files.update({
      where: { id: fileId },
      data: { uploadStatus: "FAILED" },
    });

    throw err; // Let BullMQ mark job as failed
  }
};
