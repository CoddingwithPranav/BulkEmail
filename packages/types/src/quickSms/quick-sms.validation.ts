// @repo/types/src/quick-sms.validation.ts
// Only imported by backend

import { z } from "zod";
import {
  sendQuickSmsSchema,
  sendBulkQuickSmsSchema,
} from "./quick-sms.schema";

export const sendQuickSmsValidationSchema = z.object({
  body: sendQuickSmsSchema,
});

export const sendBulkQuickSmsValidationSchema = z.object({
  body: sendBulkQuickSmsSchema,
});