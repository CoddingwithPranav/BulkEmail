// controllers/campaignPaymentController.ts
import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth";
import * as paymentService from "../services/paymentService";
import axios from "axios";
import crypto from "crypto";

const ESEWA_SECRET = process.env.ESEWA_SECRET_KEY || "8gBm/:&EnhH.1/q";
const ESEWA_PID = process.env.ESEWA_PRODUCT_CODE || "EPAYTEST";

const createSignature = (message: string): string => {
  const hmac = crypto.createHmac("sha256", ESEWA_SECRET);
  hmac.update(message);
  return hmac.digest("base64");
};

export const initiatePayment = async (req: AuthRequest, res: Response) => {
  try {
    const { campaignId, amount, payment_method:paymentMethod } = req.body;
    const userId = req.user!.id;

    if (!campaignId || !amount || !["esewa"].includes(paymentMethod)) {
      return res.status(400).json({ error: "Invalid request data" });
    }
    const existingPayment = await paymentService.findCampaignPaymentByCampaignId(campaignId);
    if (existingPayment?.status === "paid") {
      return res.status(400).json({ error: "Campaign already paid" });
    }

    const payment = await paymentService.createCampaignPayment({
      userId,
      campaignId,
      amount: Number(amount),
      paymentMethod: paymentMethod as "esewa",
    });
      const message = `total_amount=${amount},transaction_uuid=${payment.id},product_code=${ESEWA_PID}`;
      const signature = createSignature(message);

      const formData = {
        amount: amount.toString(),
        tax_amount: "0",
        total_amount: amount.toString(),
        transaction_uuid: payment.id,
        product_code: "EPAYTEST",
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: `${process.env.BACKEND_URL}/api/v1/payments/esewa/success`,
        failure_url: `${process.env.FRONTEND_URL}/payment/failure`,
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature,
      };
      return res.json({
        success:true,
        data:{
        paymentMethod: "esewa",
        formData,
        }
      });
  } catch (err: any) {
    console.error("Payment initiation error:", err);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
};

export const verifyEsewaSuccess = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = req.query;
    console.log("eSewa callback data:", data);
    if (!data) return res.redirect(`${process.env.FRONTEND_URL}/payment/failure`);
    console.log("eSewa callback received:", data);
    const decoded = JSON.parse(Buffer.from(data as string, "base64").toString("utf-8"));
    console.log("eSewa callback data:", decoded);
    if (decoded.status !== "COMPLETE") {
      return res.redirect(`${process.env.FRONTEND_URL}/payment/failure`);
    }

    const message = decoded.signed_field_names
      .split(",")
      .map((field: string) => `${field}=${decoded[field] || ""}`)
      .join(",");
    const signature = createSignature(message);
    if (signature !== decoded.signature) {
      return res.status(400).json({ error: "Invalid signature" });
    }
    if (!req.body) {
      req.body = {};
    }
    req.body.paymentId = decoded.transaction_uuid;
    req.body.transactionCode = decoded.transaction_code;
    req.body.gatewayData = decoded;
    next();
  } catch (err) {
    console.error(err);
    res.redirect(`${process.env.FRONTEND_URL}/payment/failure`);
  }
};



export const confirmPaymentSuccess = async (req: Request, res: Response) => {
  try {
    const { paymentId, transactionCode, gatewayData } = req.body;

    const payment = await paymentService.findCampaignPaymentById(paymentId);
    if (!payment || payment.status === "paid") {
      return res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
    }

    const data = await paymentService.markCampaignPaymentAsPaid(
      payment.campaignId,
      transactionCode,
      transactionCode,
      gatewayData
    );

    res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
  } catch (err) {
    console.error(err);
    res.redirect(`${process.env.FRONTEND_URL}/payment/failure`);
  }
};