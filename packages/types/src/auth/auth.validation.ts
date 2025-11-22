// @repo/types/src/auth.validation.ts
// ONLY imported by backend (Express routes)

import { z } from "zod";
import { registerBodySchema, loginBodySchema } from "./auth.schema";

// Full validation schemas including { body, params, query }
export const registerValidationSchema = z.object({
  body: registerBodySchema,
});

export const loginValidationSchema = z.object({
  body: loginBodySchema,
});