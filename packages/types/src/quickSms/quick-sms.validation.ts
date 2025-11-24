import { z } from "zod";
import { sendBulkQuickSmsSchema, sendQuickSmsSchema } from "./quick-sms.schema";

export const sendQuickSmsValidationSchema = z.object({
  body: sendQuickSmsSchema,
});

export const sendBulkQuickSmsValidationSchema = z.object({
  body: sendBulkQuickSmsSchema,
});
