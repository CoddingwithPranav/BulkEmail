import { z } from 'zod';

const nepalPhoneRegex = /^9[78[0-9]{8}$/;

export const sendQuickSmsSchema = z.object({
  body: z.object({
    toPhoneNumber: z.string().regex(nepalPhoneRegex, "Invalid Nepal phone number"),
    message: z.string()
      .min(1, "Message cannot be empty")
      .max(1600, "Message too long"),
  }),
});

export const sendBulkQuickSmsSchema = z.object({
  body: z.object({
    phoneNumbers: z.array(
      z.string().regex(nepalPhoneRegex, "Invalid Nepal phone number")
    ).min(1).max(500, "Max 500 numbers at once"),
    message: z.string().min(1).max(1600),
  }),
});