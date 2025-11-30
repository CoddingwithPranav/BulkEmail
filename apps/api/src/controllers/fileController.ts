import logger from "@repo/config/logger";
import { dbClient } from "@repo/db/client";
import { Response } from "express";
import XLSX from "xlsx";
import { fileProcessingQueue } from "../jobs/queues";
import { AuthRequest } from "../middleware/auth";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const { categoryId } = req.body;
  if (!categoryId) {
    return res.status(400).json({ success: false, message: "Category ID is required" });
  }

  const { originalname, path: filePath, size } = req.file;
  const userId = req.user!.id;
  logger.info("File upload initiated", { userId, originalname, filePath, size, categoryId });

  try {
    const fileRecord = await dbClient.files.create({
      data: {
        userId,
        name: originalname,
        path: filePath,
        sizeInBytes: BigInt(size),
        type: originalname.toLowerCase().endsWith(".csv") ? "CSV" : "XLSX",
        uploadStatus: "PROCESSING",
        CategoryId: categoryId,
      },
    });

    const job = await fileProcessingQueue.add("process-file", {
      fileId: fileRecord.id,
      filePath,
      categoryId,
      userId,
    });

    logger.info("File upload queued", { fileId: fileRecord.id, jobId: job.id, userId, categoryId });

    return res.status(202).json({
      success: true,
      data: {
        message: "File uploaded and processing started",
        fileId: fileRecord.id,
        jobId: job.id,
      },
    });
  } catch (err: any) {
    logger.error("Upload failed", { error: err.message, userId });
    return res.status(500).json({ success: false, message: "Failed to upload file" });
  }
};

export const getUserFiles = async (req: AuthRequest, res: Response) => {
  const files = await dbClient.files.findMany({
    where: { userId: req.user!.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      type: true,
      uploadStatus: true,
      numberOfReceivers: true,
      createdAt: true,
      category: { select: { name: true } },
    },
  });

  res.json({ success: true, data: { files } });
};

export const getFileStatus = async (req: AuthRequest, res: Response) => {
  const file = await dbClient.files.findFirst({
    where: { id: req.params.id, userId: req.user!.id },
    select: {
      id: true,
      name: true,
      uploadStatus: true,
      numberOfReceivers: true,
      createdAt: true,
    },
  });

  if (!file) {
    return res.status(404).json({ success: false, message: "File not found" });
  }

  res.json({ success: true, data: { file } });
};

export const downloadInvalidRows = async (req: AuthRequest, res: Response) => {
  const fileId = req.params.id;
  const format = (req.query.type as string)?.toLowerCase() || "csv";

  const invalidRows = await dbClient.invalid_My_Contact.findMany({
    where: { fileId },
    select: {
      firstName: true,
      lastName: true,
      province: true,
      district: true,
      municipality: true,
      phoneNumber: true,
    },
  });

  if (invalidRows.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No invalid rows found for this file",
    });
  }

  const rowsWithError = invalidRows.map((r) => ({
    FirstName: r.firstName || "",
    LastName: r.lastName || "",
    Province: r.province || "",
    District: r.district || "",
    Municipality: r.municipality || "",
    PhoneNumber: r.phoneNumber || "",
    Error: r.phoneNumber
      ? "Invalid format (must be exactly 10 digits)"
      : "Phone number is missing",
  }));

  if (format === "csv") {
    const headers = rowsWithError.length > 0 && rowsWithError[0] ? Object.keys(rowsWithError[0]!).join(",") : "";
    const csv = [headers, ...rowsWithError.map((r) => Object.values(r).join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename="invalid-rows-${fileId}.csv"`);
    return res.send(csv);
  }

  if (format === "xlsx") {
    const ws = XLSX.utils.json_to_sheet(rowsWithError);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invalid Rows");

    // Style header
    const range = XLSX.utils.decode_range(ws["!ref"]!);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const addr = XLSX.utils.encode_cell({ r: 0, c: C });
      if (!ws[addr]) continue;
      ws[addr].s = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "D73B3E" } },
      };
    }

    const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", `attachment; filename="invalid-rows-${fileId}.xlsx"`);
    return res.send(buffer);
  }

  return res.status(400).json({ message: "Invalid format. Use ?type=csv or ?type=xlsx" });
};

export const deleteFile = async (req: AuthRequest, res: Response) => {
  const fileId = req.params.id;
  const userId = req.user!.id;

  const file = await dbClient.files.findFirst({
    where: { id: fileId, userId },
  });

  if (!file) {
    return res.status(404).json({ success: false, message: "File not found" });
  }

  await dbClient.$transaction([
    dbClient.my_Contact.deleteMany({ where: { fileId } }),
    dbClient.invalid_My_Contact.deleteMany({ where: { fileId } }),
    dbClient.files.delete({ where: { id: fileId } }),
  ]);

  logger.info("File and contacts deleted", { fileId, userId });
  res.json({ success: true, message: "File deleted successfully" });
};