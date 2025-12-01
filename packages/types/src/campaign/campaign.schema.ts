import { z } from "zod";

const campaignBase = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(3, "Campaign name must be at least 3 characters"),
  messageText: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1600, "Message too long (max ~10 SMS parts)"),
  province: z.string().optional(),
  categoryId: z.string().uuid("Invalid category ID"),
  district: z.string().optional(),
  municipality: z.string().optional(),
  totalSmsCost: z.number().min(0).optional(),
  totalDelivered: z.number().int().min(0).optional(),
  totalFailed: z.number().int().min(0).optional(),
  totalRecipients: z.number().int().min(0).optional(),
  deliveryRate: z.number().min(0).max(100).optional(),
  paid: z.boolean().optional(),
  status: z.enum(["PENDING", "APPROVED", "SENT", "CANCELLED"]).optional(),
  paymentReceiptImage: z.string().url().optional(),
});

export const approveCampaignSchema = z.object({
  action: z.enum(["APPROVED", "CANCELLED"] as const),
  reason: z.string().optional(),
});
export const createCampaignSchema = campaignBase;
export const updateCampaignSchema = campaignBase.partial();

export type CampaignsResponse = {
  campaigns: z.infer<typeof createCampaignSchema>[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
export type Campaign = z.infer<typeof createCampaignSchema>;

export type ApproveCampaignInput = z.infer<typeof approveCampaignSchema>;
