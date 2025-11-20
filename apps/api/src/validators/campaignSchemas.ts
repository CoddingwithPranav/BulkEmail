import { z } from 'zod';

const nepalPhoneRegex = /^9[78][0-9]{8}$/;

export const createCampaignSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Campaign name must be at least 3 characters"),
    messageText: z.string()
      .min(1, "Message cannot be empty")
      .max(1600, "Message too long (max ~10 SMS parts)"),
    fileId: z.number().int().positive().optional(),
    province: z.string().optional(),
    district: z.string().optional(),
    municipality: z.string().optional(),
    // Manual receivers (if no file)
    manualReceivers: z.array(
      z.object({
        phoneNumber: z.string().regex(nepalPhoneRegex, "Invalid Nepal phone number"),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
    ).optional(),
    paymentReceiptImage: z.string().url().optional(), // if prepaid or required
  }),
}).refine((data) => {
  // Must have either fileId or manualReceivers
  return !!data.body.fileId || (data.body.manualReceivers && data.body.manualReceivers.length > 0);
}, {
  message: "Either fileId or manualReceivers is required",
});

export const updateCampaignSchema = z.object({
  body: z.object({
    name: z.string().min(3).optional(),
    messageText: z.string().min(1).max(1600).optional(),
    province: z.string().optional(),
    district: z.string().optional(),
    municipality: z.string().optional(),
    paymentReceiptImage: z.string().url().optional(),
  }),
  params: z.object({
    id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()),
  }),
});

// Admin only
export const approveCampaignSchema = z.object({
  params: z.object({
    id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()),
  }),
  body: z.object({
    action: z.enum(['APPROVED', 'CANCELLED']),
    reason: z.string().optional(),
  }),
});