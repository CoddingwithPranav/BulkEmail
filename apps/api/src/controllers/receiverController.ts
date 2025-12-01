import { AuthRequest } from "../middleware/auth";
import { Response } from "express";
import * as receiverService from "../services/receiverService";
import logger from "@repo/config/logger";


export const createReceiver = async (req: AuthRequest, res: Response) => {
  try {
    const receiver = await receiverService.createReceiver(req.user!.id, req.body);
    res.status(201).json({ success: true, data: receiver });
  } catch (err: any) {
    logger.error("Create receiver failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getReceivers = async (req: AuthRequest, res: Response) => {
  try {
    const result = await receiverService.getReceivers(req.user!.id, req.query as any);
    res.json({ success: true, data: result });
  } catch (err: any) {
    logger.error("Get receivers failed", { error: err.message });
    res.status(500).json({ success: false, message: "Failed to fetch receivers" });
  }
};


export const getReceiverById = async (req: AuthRequest, res: Response) => {
  try {
    const receiver = await receiverService.getReceiverById(req.params.id!, req.user!.id);
    if (!receiver) {
      return res.status(404).json({ success: false, message: "Receiver not found" });
    }
    res.json({ success: true, data: receiver });
  } catch (err: any) {
    logger.error("Get receiver failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateReceiver = async (req: AuthRequest, res: Response) => {
  try {
    const receiver = await receiverService.updateReceiver(
      req.params.id!,
      req.user!.id,
      req.body
    );
    res.json({ success: true, message: "Receiver updated", data: receiver });
  } catch (err: any) {
    logger.error("Update receiver failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteReceiver = async (req: AuthRequest, res: Response) => {
  try {
    await receiverService.deleteReceiver(req.params.id!, req.user!.id);
    res.json({ success: true, message: "Receiver deleted" });
  } catch (err: any) {
    logger.error("Delete receiver failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};
