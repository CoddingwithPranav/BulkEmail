import logger from "@repo/config/logger";
import { dbClient } from "@repo/db";
import { Job } from "bullmq";
import csv from "csv-parser";
import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import { generateInvalidExcel } from "../utils/excel";
import { contactSchema } from "../utils/validation";

export const processFileJob = async (job: Job) => {
  console.log("Processing job:", job.id);
  const { fileId, filePath } = job.data;
  let validCount = 0;
  let invalidRows: any[] = [];

  try {
    if (filePath.endsWith(".csv")) {
      await new Promise((resolve, reject) => {
        const valid: any[] = [];
        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => {
            const result = contactSchema.safeParse({
              name: String(row.name || "").trim(),
              email: String(row.email || "").trim(),
              phone: String(row.phone || row.mobile || "").replace(/\D/g, ""),
            });

            if (result.success) {
              valid.push({ ...result.data, fileId });
              validCount++;
            } else {
              invalidRows.push({ ...row, errors: result.error.message });
            }

            job.updateProgress(
              Math.min(
                100,
                Math.round(((validCount + invalidRows.length) / 10000) * 100)
              )
            );
          })
          .on("end", async () => {
            await dbClient.upload_Receiver.createMany({ data: valid });
            resolve(null);
          })
          .on("error", reject);
      });
    } else {
      // XLSX logic similar
      const workbook = XLSX.readFile(filePath);
      const firstSheetName = workbook.SheetNames && workbook.SheetNames[0];
      if (!firstSheetName) {
        throw new Error("No sheets found in the Excel file.");
      }
      const sheet = workbook.Sheets[firstSheetName];
      if (!sheet) {
        throw new Error("Sheet not found in the Excel file.");
      }
      const rows: any[] = XLSX.utils.sheet_to_json(sheet);

      const valid: any[] = [];
      rows.forEach((row) => {
        const result = contactSchema.safeParse({
          name: String(row.name || "").trim(),
          email: String(row.email || "").trim(),
          phone: String(row.phone || row.mobile || "").replace(/\D/g, ""),
        });
        if (result.success) {
          valid.push({ ...result.data, fileId });
          validCount++;
        } else {
          invalidRows.push({ ...row, errors: result.error.message });
        }
      });
      await dbClient.receiver.createMany({ data: valid });
    }

    // Save invalid rows
    let invalidPath: string | null = null;
    if (invalidRows.length > 0) {
      const buffer = generateInvalidExcel(invalidRows);
      invalidPath = path.join(
        process.cwd(),
        "uploads",
        `invalid-${fileId}.xlsx`
      );
      fs.writeFileSync(invalidPath, buffer);
    }

    await dbClient.files.update({
      where: { id: fileId },
      data: {
        uploadStatus: "UPLOADED",
        numberOfReceivers: validCount,
        invalidRowsPath: invalidPath,
      },
    });

    logger.info("File processed", {
      fileId,
      validCount,
      invalid: invalidRows.length,
    });
  } catch (err: any) {
    await dbClient.files.update({
      where: { id: fileId },
      data: { uploadStatus: "FAILED" },
    });
    logger.error("Processing failed", { fileId, error: err.message });
    throw err;
  } finally {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
};
