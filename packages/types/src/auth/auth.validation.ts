import { z } from "zod";
import { loginBodySchema, registerBodySchema } from "./auth.schema";

export const registerValidationSchema = z.object({
  body: registerBodySchema,
});

export const loginValidationSchema = z.object({
  body: loginBodySchema,
});
