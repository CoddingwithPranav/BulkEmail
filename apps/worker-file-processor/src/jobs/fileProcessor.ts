// import logger from "@repo/config/logger";
// import { dbClient } from "@repo/db/client";
// import { uploadFileSchema } from "@repo/types";
// import { Job } from "bullmq";
// import csv from "csv-parser";
// import fs from "fs";
// import XLSX from "xlsx";

// const normalizePhone = (phone: string): string => phone.replace(/\D/g, "").trim();

// export const processFileJob = async (job: Job) => {
//   const { fileId, filePath, categoryId, userId } = job.data as {
//     fileId: string;
//     filePath: string;
//     categoryId: string;
//     userId: string;
//   };

//   let validCount = 0;
//   let invalidCount = 0;
//   const validContacts: any[] = [];
//   const invalidContacts: any[] = [];

//   const processRow = (row: any) => {
//     const rawFirstName = String(row.FirstName || row.firstname || "").trim();
//     const rawLastName = String(row.LastName || row.lastname || "").trim();
//     const rawProvince = String(row.Province || row.province || "").trim();
//     const rawDistrict = String(row.District || row.district || "").trim();
//     const rawMunicipality = String(row.Municipality || row.municipality || "").trim();

//     const phoneRaw = [
//       row.PhoneNumber,
//       row.phone,
//       row.mobile,
//       row.Phone,
//       row.Mobile,
//       row.phoneNumber,
//     ].find(Boolean) || "";

//     const phoneNumber = normalizePhone(phoneRaw);
//     const isValidPhone = phoneNumber.length === 10;

//     let errorReason = "";
//     if (!phoneRaw.trim()) errorReason = "Phone number is missing";
//     else if (!isValidPhone) errorReason = "Invalid format (must be exactly 10 digits)";

//     const parsed = uploadFileSchema.safeParse({
//       FirstName: rawFirstName,
//       LastName: rawLastName,
//       Province: rawProvince,
//       District: rawDistrict,
//       Municipality: rawMunicipality,
//       PhoneNumber: phoneNumber,
//     });

//     console.log("Parsed row:", parsed.success);
//     if(parsed.success==false){
//       console.log("Errors:", parsed.error.issues);
//     }

//     const contactData = {
//       userId,
//       categoryId,
//       fileId,
//       firstName: rawFirstName || null,
//       lastName: rawLastName || null,
//       province: rawProvince || null,
//       district: rawDistrict || null,
//       municipality: rawMunicipality || null,
//       phoneNumber: phoneNumber || null,
    
//     };

//     if (parsed.success && isValidPhone) {
//       validContacts.push(contactData);
//       validCount++;
//     } else {
//       invalidContacts.push({...contactData ,  errorReason: errorReason || (!parsed.success ? "Invalid data format" : "")});
//       invalidCount++;
//     }
//   };

//   try {
//     if (filePath.endsWith(".csv")) {
//       await new Promise<void>((resolve, reject) => {
//         fs.createReadStream(filePath)
//           .pipe(csv())
//           .on("data", processRow)
//           .on("end", resolve)
//           .on("error", reject);
//       });
//     } else {
//       // Excel
//       const workbook = XLSX.readFile(filePath);
//       const sheetName = workbook.SheetNames[0];
//       if (!sheetName) {
//         throw new Error("No sheet found in the Excel file.");
//       }
//       const sheet = workbook.Sheets[sheetName];
//       if (!sheet) {
//         throw new Error("Sheet not found in the workbook.");
//       }
//       const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
//       rows.forEach(processRow);
//     }

//     console.log("Valid contacts →", validContacts);
//     console.log("Invalid contacts →", invalidContacts);

//     // Save to DB
//     if (validContacts.length > 0) {
//       await dbClient.my_Contact.createMany({
//         data: validContacts,
//         skipDuplicates: true,
//       });
//     }

//     if (invalidContacts.length > 0) {
//       await dbClient.invalid_My_Contact.createMany({
//         data: invalidContacts,
//         skipDuplicates: true,
//       });
//     }

//     await dbClient.files.update({
//       where: { id: fileId },
//       data: {
//         uploadStatus: "UPLOADED",
//         numberOfReceivers: validCount,
//       },
//     });

//     logger.info("File processed successfully", {
//       fileId,
//       validCount,
//       invalidCount,
//       total: validCount + invalidCount,
//     });
//   } catch (err: any) {
//     await dbClient.files.update({
//       where: { id: fileId },
//       data: { uploadStatus: "FAILED" },
//     });
//     logger.error("File processing failed", { fileId, error: err.message });
//     throw err;
//   }
// };














import logger from "@repo/config/logger";
import { dbClient } from "@repo/db/client";
import { uploadFileSchema } from "@repo/types";
import { Job } from "bullmq";
import csv from "csv-parser";
import fs from "fs";
import XLSX from "xlsx";




const normalizePhone = (phone: unknown): string => {
  if (phone === null || phone === undefined) return "";
  return String(phone).replace(/\D/g, "").trim();
};


export const processFileJob = async (job: Job) => {
  const { fileId, filePath, categoryId, userId } = job.data as {
    fileId: string;
    filePath: string;
    categoryId: string;
    userId: string;
  };

  const validContacts: any[] = [];
  let rowNumber = 0;

  const processRow = (row: any) => {
    rowNumber++;

    const rawFirstName = String(row.FirstName || row.firstname || "").trim();
    const rawLastName = String(row.LastName || row.lastname || "").trim();
    const rawProvince = String(row.Province || row.province || "").trim();
    const rawDistrict = String(row.District || row.district || "").trim();
    const rawMunicipality = String(row.Municipality || row.municipality || "").trim();
    const rawEmail = String(row.Email || row.email || "").trim();
    const phoneRaw =
      [row.PhoneNumber, row.phone, row.mobile, row.Phone, row.Mobile, row.phoneNumber]
        .find(Boolean) || "";

    console.log(`Processing row ${rowNumber}:`, row);
    console.log(`Normalized phone:`,phoneRaw);
    const phoneNumber = normalizePhone(phoneRaw);

    if (phoneNumber.length !== 10) {
      throw new Error(`Row ${rowNumber}: Phone number must be exactly 10 digits`);
    }

    const parsed = uploadFileSchema.safeParse({
      FirstName: rawFirstName,
      LastName: rawLastName,
      Province: rawProvince,
      District: rawDistrict,
      Municipality: rawMunicipality,
      PhoneNumber: phoneNumber,
      Email: rawEmail,
    });

    if (!parsed.success) {
      const errors = parsed.error.issues.map(i => i.message).join(", ");
      throw new Error(`Row ${rowNumber}: ${errors}`);
    }

    validContacts.push({
      userId,
      categoryId,
      fileId,
      firstName: rawFirstName || null,
      lastName: rawLastName || null,
      province: rawProvince || null,
      district: rawDistrict || null,
      municipality: rawMunicipality || null,
      phoneNumber,
      email: rawEmail || null,
    });
  };

  try {
    if (filePath.endsWith(".csv")) {
      await new Promise<void>((resolve, reject) => {
        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => {
            try { processRow(row); } catch (e: any) { reject(e); }
          })
          .on("end", resolve)
          .on("error", reject);
      });
    } else {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      if (!sheetName) {
        throw new Error("No sheet found in the Excel file.");
      }
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) {
        throw new Error("Sheet not found in the workbook.");
      }
      const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });
      rows.forEach(processRow);
    }

    // ALL ROWS VALID → Save in transaction
    await dbClient.$transaction(async (tx) => {
      await tx.my_Contact.createMany({
        data: validContacts,
        skipDuplicates: true,
      });

      await tx.files.update({
        where: { id: fileId },
        data: {
          uploadStatus: "UPLOADED",
          numberOfReceivers: validContacts.length,
        },
      });
    });

    logger.info("File fully processed and uploaded", {
      fileId,
      totalContacts: validContacts.length,
    });
  } catch (err: any) {
    // First invalid row → reject entire file
    await dbClient.files.update({
      where: { id: fileId },
      data: {
        uploadStatus: "FAILED",
        numberOfReceivers: 0,
      },
    });

    logger.warn("File upload rejected - invalid data found", {
      fileId,
      error: err.message,
    });

    throw err;
  }
};