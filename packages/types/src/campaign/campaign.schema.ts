import { z } from "zod";

const nepalPhoneRegex = /^9[78][0-9]{8}$/;

const campaignBase = z.object({
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  messageText: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1600, "Message too long (max ~10 SMS parts)"),
  fileId: z.number().int().positive().optional(),
  province: z.string().optional(),
  district: z.string().optional(),
  municipality: z.string().optional(),
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


export const createCampaignSchema = campaignBase.refine(
  (data) => !!data.fileId || (data.manualReceivers?.length ?? 0) > 0,
  { message: "Either fileId or manualReceivers is required" }
);

export type CreateCampaignInput = z.infer<typeof createCampaignSchema>;

export const updateCampaignSchema = campaignBase.partial();

export type UpdateCampaignInput = z.infer<typeof updateCampaignSchema>;

export const approveCampaignSchema = z.object({
  action: z.enum(["APPROVED", "CANCELLED"] as const),
  reason: z.string().optional(),
});

export type ApproveCampaignInput = z.infer<typeof approveCampaignSchema>;