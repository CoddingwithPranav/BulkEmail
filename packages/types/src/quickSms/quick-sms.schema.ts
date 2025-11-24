import { z } from "zod";

const nepalPhoneRegex = /^9[78][0-9]{8}$/;
export const sendQuickSmsSchema = z.object({
  toPhoneNumber: z
    .string()
    .regex(
      nepalPhoneRegex,
      "Invalid Nepal phone number (must be 10 digits starting with 97 or 98)"
    ),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1600, "Message too long (max ~10 SMS parts)"),
});

export const sendBulkQuickSmsSchema = z.object({
  phoneNumbers: z
    .array(
      z
        .string()
        .regex(
          nepalPhoneRegex,
          "Each phone number must be a valid Nepal mobile number"
        )
    )
    .min(1, "At least one phone number is required")
    .max(500, "Maximum 500 phone numbers allowed per request"),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1600, "Message too long (max ~10 SMS parts)"),
});

export type SendQuickSmsInput = z.infer<typeof sendQuickSmsSchema>;
export type SendBulkQuickSmsInput = z.infer<typeof sendBulkQuickSmsSchema>;
