import logger from "@repo/config/logger";
import { dbClient } from "@repo/db";
import { uploadFileSchema } from "@repo/types";
import { Job } from "bullmq";
import csv from "csv-parser";
import fs from "fs";
import XLSX from "xlsx";

export const processFileJob = async (job: Job) => {
  const {
    fileId,
    filePath,
    isGuest = false,
  } = job.data as {
    fileId: string;
    filePath: string;
    isGuest?: boolean;
  };

  logger.info("Starting file processing", {
    jobId: job.id,
    fileId,
    filePath,
    isGuest,
  });

  let validCount = 0;
  let invalidCount = 0;

  try {
    if (filePath.endsWith(".csv")) {
      await new Promise<void>((resolve, reject) => {
        const validReceivers: any[] = [];
        const invalidReceivers: any[] = [];

        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => {
            const parsed = uploadFileSchema.safeParse({
              FirstName: String(row.FirstName || row.firstname || "").trim(),
              LastName: String(row.LastName || row.lastname || "").trim(),
              Province: String(row.Province || row.province || "").trim(),
              District: String(row.District || row.district || "").trim(),
              Municipality: String(
                row.Municipality || row.municipality || ""
              ).trim(),
              PhoneNumber: String(
                row.phone ||
                  row.mobile ||
                  row.Phone ||
                  row.Mobile ||
                  row.PhoneNumber ||
                  ""
              )
                .replace(/\D/g, "")
                .trim(),
            });

            const baseData = {
              fileId,
              firstName: parsed.success
                ? parsed.data.FirstName
                : String(row.FirstName || row.firstname || "").trim() || null,
              lastName: parsed.success
                ? parsed.data.LastName
                : String(row.LastName || row.lastname || "").trim() || null,
              province: parsed.success
                ? parsed.data.Province
                : String(row.Province || row.province || "").trim() || null,
              district: parsed.success
                ? parsed.data.District
                : String(row.District || row.district || "").trim() || null,
              municipality: parsed.success
                ? parsed.data.Municipality
                : String(row.Municipality || row.municipality || "").trim() ||
                  null,
              phoneNumber: parsed.success
                ? parsed.data.PhoneNumber
                : String(
                    row.phone || row.mobile || row.Phone || row.Mobile || ""
                  )
                    .replace(/\D/g, "")
                    .trim(),
            };
            console.log("Parsed row:", parsed.success); // Debug log
            console.log("Base data:", parsed.error?.cause); // Debug log
            if (parsed.success) {
              validReceivers.push(baseData);
              validCount++;
            } else {
              invalidReceivers.push(baseData);
              invalidCount++;
            }

            // // Optional: progress update every 50 rows
            // const processed = validCount + invalidCount;
            // if (processed % 50 === 0) {
            //   job.updateProgress(
            //     Math.min(90, Math.round((processed / 10000) * 90))
            //   );
            // }
          })
          .on("end", async () => {
            try {
              logger.info("validReceivers length:", validReceivers); // Debug log
              if (validReceivers.length > 0) {
                if (isGuest) {
                  await dbClient.guestReceiver.createMany({
                    data: validReceivers,
                    skipDuplicates: true,
                  });
                } else {
                  await dbClient.upload_Receiver.createMany({
                    data: validReceivers,
                    skipDuplicates: true,
                  });
                }
              }

              // Insert invalid ones
              logger.info("invalidReceivers length:", invalidReceivers); // Debug log
              if (invalidReceivers.length > 0) {
                if (isGuest) {
                  await dbClient.invalidGuestReceiver.createMany({
                    data: invalidReceivers,
                    skipDuplicates: true,
                  });
                } else {
                  await dbClient.invalid_Upload_Receiver.createMany({
                    data: invalidReceivers,
                    skipDuplicates: true,
                  });
                }
              }

              resolve();
            } catch (err) {
              reject(err);
            }
          })
          .on("error", reject);
      });
    }
    // Excel handling (same logic)
    else if (filePath.match(/\.(xlsx|xls)$/i)) {
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
      const invalidReceivers: any[] = [];

      rows.forEach((row) => {
        const parsed = uploadFileSchema.safeParse({
          FirstName: String(row.FirstName || row.firstname || "").trim(),
          LastName: String(row.LastName || row.lastname || "").trim(),
          Province: String(row.Province || row.province || "").trim(),
          District: String(row.District || row.district || "").trim(),
          Municipality: String(
            row.Municipality || row.municipality || ""
          ).trim(),
          PhoneNumber: String(
            row.phone || row.mobile || row.Phone || row.Mobile || ""
          )
            .replace(/\D/g, "")
            .trim(),
        });

        const baseData = {
          fileId,
          firstName: parsed.success
            ? parsed.data.FirstName
            : String(row.FirstName || "").trim() || null,
          lastName: parsed.success
            ? parsed.data.LastName
            : String(row.LastName || "").trim() || null,
          province: parsed.success
            ? parsed.data.Province
            : String(row.Province || "").trim() || null,
          district: parsed.success
            ? parsed.data.District
            : String(row.District || "").trim() || null,
          municipality: parsed.success
            ? parsed.data.Municipality
            : String(row.Municipality || "").trim() || null,
          phoneNumber: parsed.success
            ? parsed.data.PhoneNumber
            : String(row.phone || "")
                .replace(/\D/g, "")
                .trim(),
        };

        if (parsed.success && baseData.phoneNumber.length >= 10) {
          validReceivers.push(baseData);
          validCount++;
        } else {
          invalidReceivers.push(baseData);
          invalidCount++;
        }
      });

      if (validReceivers.length > 0) {
        if (isGuest) {
          await dbClient.guestReceiver.createMany({
            data: validReceivers,
            skipDuplicates: true,
          });
        } else {
          await dbClient.upload_Receiver.createMany({
            data: validReceivers,
            skipDuplicates: true,
          });
        }
      }

      if (invalidReceivers.length > 0) {
        if (isGuest) {
          await dbClient.invalidGuestReceiver.createMany({
            data: invalidReceivers,
            skipDuplicates: true,
          });
        } else {
          await dbClient.invalid_Upload_Receiver.createMany({
            data: invalidReceivers,
            skipDuplicates: true,
          });
        }
      }
    } else {
      throw new Error("Unsupported file format");
    }

    // Update file status
    if (isGuest) {
      await dbClient.guestFile.update({
        where: { id: fileId },
        data: {
          uploadStatus: "UPLOADED",
          numberOfReceivers: validCount,
        },
      });
    } else {
      await dbClient.files.update({
        where: { id: fileId },
        data: {
          uploadStatus: "UPLOADED",
          numberOfReceivers: validCount,
        },
      });
    }

    // job.updateProgress(100);
    logger.info("File processed successfully", {
      jobId: job.id,
      fileId,
      isGuest,
      validCount,
      invalidCount,
    });
  } catch (err: any) {
    logger.error("File processing failed", {
      jobId: job.id,
      fileId,
      isGuest,
      error: err.message,
    });

    if (isGuest) {
      await dbClient.guestFile.update({
        where: { id: fileId },
        data: { uploadStatus: "FAILED" },
      });
    } else {
      await dbClient.files.update({
        where: { id: fileId },
        data: { uploadStatus: "FAILED" },
      });
    }

    throw err;
  }
};
