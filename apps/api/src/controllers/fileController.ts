import logger from "@repo/config/logger";
import { dbClient } from "@repo/db/client";
import { Response } from "express";
import { fileProcessingQueue } from "../jobs/queues";
import { AuthRequest } from "../middleware/auth";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const { originalname, filename, size, path: filePath } = req.file;

  try {
    const fileRecord = await dbClient.files.create({
      data: {
        userId: req.user.id,
        name: originalname,
        path: filePath,
        sizeInBytes: BigInt(size),
        type: originalname.endsWith(".csv") ? "CSV" : "XLSX",
        uploadStatus: "PROCESSING",
      },
    });

    const job = await fileProcessingQueue.add("process-file", {
      fileId: fileRecord.id,
      filePath,
      userId: req.user.id,
    });

    logger.info("File uploaded & queued", {
      fileId: fileRecord.id,
      jobId: job.id,
      size,
      userId: req.user.id,
    });

    res.status(202).json({
      message: "File uploaded! Processing started...",
      fileId: fileRecord.id,
      jobId: job.id,
      trackUrl: `/api/files/status/${fileRecord.id}`,
    });
  } catch (err: any) {
    logger.error("Upload failed", { error: err.message });
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getFileStatus = async (req: AuthRequest, res: Response) => {
  const file = await dbClient.files.findFirst({
    where: { id: req.params.id, userId: req.user.id },
    select: {
      id: true,
      name: true,
      uploadStatus: true,
      numberOfReceivers: true,
      invalidRowsPath: true,
      createdAt: true,
    },
  });

  if (!file) return res.status(404).json({ message: "File not found" });

  res.json({ file });
};

export const downloadInvalidRows = async (req: AuthRequest, res: Response) => {
  const file = await dbClient.files.findFirst({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (!file?.invalidRowsPath) {
    return res.status(404).json({ message: "No invalid rows found" });
  }

  res.download(file.invalidRowsPath, `invalid-${file.name}.xlsx`);
};
