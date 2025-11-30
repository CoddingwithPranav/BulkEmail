import { dbClient } from "@repo/db/client";
import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import logger from "@repo/config/logger";

export const sendQuickSms = async (req: AuthRequest, res: Response) => {
  const { toPhoneNumber, message } = req.body;

  try {
    const quickSend = await dbClient.quickSMSSend.create({
      data: {
        userId: req.user.id,
        toPhoneNumber,
        message,
        status: "SENT", // In real app: queue → PENDING → SENT
      },
    });

    logger.http("Quick SMS sent", { to: toPhoneNumber, userId: req.user.id });
    res.json({ message: "SMS sent successfully", quickSend });
  } catch (err: any) {
    await dbClient.quickSMSSend.create({
      data: { userId: req.user.id, toPhoneNumber, message, status: "FAILED" },
    });
    logger.error("Quick SMS failed", { to: toPhoneNumber, error: err.message });
    res.status(500).json({ message: "Failed to send SMS" });
  }
};

export const sendBulkQuickSms = async (req: AuthRequest, res: Response) => {
  const { phoneNumbers, message } = req.body;

  const records = phoneNumbers.map((phone: string) => ({
    userId: req.user.id,
    toPhoneNumber: phone,
    message,
    status: "SENT" as const,
  }));

  await dbClient.quickSMSSend.createMany({ data: records });
  logger.http("Bulk Quick SMS sent", {
    count: phoneNumbers.length,
    userId: req.user.id,
  });

  res.json({ message: `SMS sent to ${phoneNumbers.length} numbers` });
};

export const getMyQuickSmsHistory = async (req: AuthRequest, res: Response) => {
  const history = await dbClient.quickSMSSend.findMany({
    where: { userId: req.user.id },
    orderBy: { createdAt: "desc" },
    take: 50,
  });
  res.json({ history });
};
