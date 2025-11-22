import { z } from "zod";
import id from "zod/v4/locales/id.js";

const nepalPhoneRegex = /^9[78][0-9]{8}$/;


const campaignBase = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  messageText: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1600, "Message too long (max ~10 SMS parts)"),
  fileId: z.number().int().positive().optional(),
  province: z.string().optional(),
  district: z.string().optional(),
  municipality: z.string().optional(),
  totalSmsCost: z.number().min(0).optional(),
  recipientsNumber: z.number().int().min(0).optional(),
  deliveredNumber: z.number().int().min(0).optional(),
  failedNumber: z.number().int().min(0).optional(),
  deliveryRate: z.number().min(0).max(100).optional(),
  paid: z.boolean().optional(),
  status: z.enum(["PENDING", "APPROVED", "SENT", "CANCELLED"]).optional(),
  manualReceivers: z
    .array(
      z.object({
        phoneNumber: z.string().regex(nepalPhoneRegex, "Invalid Nepal phone number"),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
    )
    .optional(),
  paymentReceiptImage: z.string().url().optional(),
});


export const createCampaignSchema = campaignBase

export type CreateCampaignInput = z.infer<typeof createCampaignSchema>;

export const updateCampaignSchema = campaignBase.partial();

export type UpdateCampaignInput = z.infer<typeof updateCampaignSchema>;

export const approveCampaignSchema = z.object({
  action: z.enum(["APPROVED", "CANCELLED"] as const),
  reason: z.string().optional(),
});


export type CampaignsResponse = {
  campaigns: z.infer<typeof createCampaignSchema>[];
  count: number;
}
export type Campaign = z.infer<typeof createCampaignSchema>;
export type ApproveCampaignInput = z.infer<typeof approveCampaignSchema>;