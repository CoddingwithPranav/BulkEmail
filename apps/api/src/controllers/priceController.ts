import { AuthRequest } from "../middleware/auth";
import { Response } from "express";
import logger from "@repo/config/logger";
import {
  getCurrentPrice,
  createPrice,
  getPricingHistory,
} from "../services/priceService";

export const getCurrentSmsPricePaisa = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const price = await getCurrentPrice();
    console.log("Fetched Current Price:", price);
    return res.json({ success: true, data: price });
  } catch (err: any) {
    logger.error("getCurrentSmsPricePaisa failed", { error: err.message });
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch price" });
  }
};

export const createPriceHandler = async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== "ADMIN") {
    return res
      .status(403)
      .json({ success: false, message: "Admin access required" });
  }

  try {
    const input = req.body;
    const newPrice = await createPrice(input);

    return res.status(201).json({
      success: true,
      message: "SMS price updated successfully",
      data: {
        id: newPrice.id,
        pricePerEmailPaisa: newPrice.pricePerEmailPaisa,
        pricePerEmailNPR: newPrice.pricePerEmailPaisa / 100,
        effectiveFrom: newPrice.effectiveFrom,
        effectiveTo: newPrice.effectiveTo,
      },
    });
  } catch (err: any) {
    logger.error("createPrice failed", { error: err.message });
    return res
      .status(500)
      .json({ success: false, message: "Failed to update price" });
  }
};

export const getPricingHistoryHandler = async (
  req: AuthRequest,
  res: Response
) => {
  if (req.user?.role !== "ADMIN") {
    return res
      .status(403)
      .json({ success: false, message: "Admin access required" });
  }

  const page = Number(req.query.page) || 1;
  const limit = Math.min(Number(req.query.limit) || 20, 100);

  try {
    const result = await getPricingHistory(page, limit);
    return res.json({ success: true, data: result });
  } catch (err: any) {
    logger.error("getPricingHistory failed", { error: err.message });
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
