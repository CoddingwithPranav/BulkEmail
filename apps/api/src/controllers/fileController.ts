import logger from "@repo/config/logger";
import { dbClient } from "@repo/db/client";
import { Response } from "express";
import fs from "fs";
import XLSX from "xlsx";
import { fileProcessingQueue, fileProcessingQueueEvents } from "../jobs/queues";
import { AuthRequest } from "../middleware/auth";

export const uploadFile = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const { originalname, filename, size, path: filePath } = req.file;
  const isGuest = !req.user;

  try {
    let fileRecord;
    if (isGuest) {
      // For guests – you might want to track via session/cookie later
      fileRecord = await dbClient.guestFile.create({
        data: {
          name: originalname,
          path: filePath,
          sizeInBytes: BigInt(size),
          type: originalname.endsWith(".csv") ? "CSV" : "XLSX",
          uploadStatus: "PROCESSING",
          guest: {
            // Provide required guest data here, e.g. create or connect
            // Example: create: { /* guest fields */ }
            // If you have a guestId, use: connect: { id: guestId }
            // Replace the below line with actual guest creation/connection logic
            create: {},
          },
        },
      });
    } else {
      fileRecord = await dbClient.files.create({
        data: {
          userId: req.user.id,
          name: originalname,
          path: filePath,
          sizeInBytes: BigInt(size),
          type: originalname.endsWith(".csv") ? "CSV" : "XLSX",
          uploadStatus: "PROCESSING",
        },
      });
    }

    const job = await fileProcessingQueue.add("process-file", {
      fileId: fileRecord.id,
      filePath,
      isGuest,
    });

    logger.info("File queued", {
      fileId: fileRecord.id,
      jobId: job.id,
      isGuest,
    });

    res.status(202).json({
      message: "File uploaded and processing started",
      fileId: fileRecord.id,
      jobId: job.id,
      progressUrl: `/api/files/progress/${job.id}`,
      isGuest,
    });
  } catch (err: any) {
    logger.error("Upload failed", { error: err.message });
    res.status(500).json({ message: "Upload failed" });
  }
};

export const getFileProgressSSE = (req: AuthRequest, res: Response) => {
  const jobId = req.params.jobId;

  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  res.flushHeaders();

  const send = (data: any) => res.write(`data: ${JSON.stringify(data)}\n\n`);

  send({ progress: 0, status: "queued" });

  const onProgress = (event: any) => {
    if (event.jobId === jobId) {
      send({ progress: event.data, status: "processing" });
    }
  };
  const onCompleted = (event: any) => {
    if (event.jobId === jobId) {
      send({ progress: 100, status: "completed" });
      cleanup();
    }
  };
  const onFailed = (event: any) => {
    if (event.jobId === jobId) {
      send({ progress: 0, status: "failed", error: event.failedReason });
      cleanup();
    }
  };

  const cleanup = () => {
    fileProcessingQueueEvents.removeListener("progress", onProgress);
    fileProcessingQueueEvents.removeListener("completed", onCompleted);
    fileProcessingQueueEvents.removeListener("failed", onFailed);
    res.end();
  };

  fileProcessingQueueEvents.on("progress", onProgress);
  fileProcessingQueueEvents.on("completed", onCompleted);
  fileProcessingQueueEvents.on("failed", onFailed);

  req.on("close", cleanup);
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

  if (!file) return res.status(404).json({ message: "File not found" });
  res.json({ file });
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
    },
  });
  res.json({ files });
};

export const downloadInvalidRows = async (req: AuthRequest, res: Response) => {
  const fileId = req.params.id;
  const format = (req.query.type as string)?.toLowerCase() || "csv";

  let invalidRows = await dbClient.invalid_Upload_Receiver.findMany({
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
    const guestRows = await dbClient.invalidGuestReceiver.findMany({
      where: { guestFileId: fileId },
      select: {
        firstName: true,
        lastName: true,
        province: true,
        district: true,
        municipality: true,
        phoneNumber: true,
      },
    });

    // Map to same shape (fileId is just for consistency)
    invalidRows = guestRows.map((r) => ({ ...r, fileId }));
  }

  if (invalidRows.length === 0) {
    return res.status(404).json({ message: "No invalid rows found" });
  }

  // Add helpful error hint (optional but very user-friendly)
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

  // ——————— CSV Export ———————
  if (format === "csv") {
    const headers =
      rowsWithError.length > 0 && rowsWithError[0]
        ? Object.keys(rowsWithError[0]!).join(",")
        : "";
    const csvContent = [
      headers,
      ...rowsWithError.map((row) => Object.values(row).join(",")),
    ].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="invalid-rows-${fileId}.csv"`
    );
    return res.send(csvContent);
  }

  // ——————— XLSX Export ———————
  if (format === "xlsx") {
    const ws = XLSX.utils.json_to_sheet(rowsWithError);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invalid Rows");

    // Style header row
    const range = XLSX.utils.decode_range(ws["!ref"]!);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const address = XLSX.utils.encode_cell({ r: 0, c: C });
      if (!ws[address]) continue;
      ws[address].s = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "D73B3E" } },
      };
    }

    const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="invalid-rows-${fileId}.xlsx"`
    );
    return res.send(buffer);
  }

  // Invalid format
  return res
    .status(400)
    .json({ message: "Invalid format. Use ?type=csv or ?type=xlsx" });
};

export const deleteFile = async (req: AuthRequest, res: Response) => {
  const fileId = req.params.id;

  const file = await dbClient.files.findFirst({
    where: { id: fileId, userId: req.user!.id },
    include: { receivers: true },
  });

  if (!file) return res.status(404).json({ message: "File not found" });

  // Delete from DB
  await dbClient.files.delete({ where: { id: fileId } });

  // Delete physical file
  if (fs.existsSync(file.path)) {
    fs.unlinkSync(file.path);
  }

  logger.info("File deleted", { fileId, userId: req.user!.id });
  res.json({ message: "File deleted successfully" });
};
