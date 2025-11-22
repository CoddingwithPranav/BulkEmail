import { z } from "zod";
import { updateProfileSchema } from "./user.schema";

// Reusable param validator (if you ever need /profile/:id for admin)
const paramsId = z.object({
  id: z.string().transform(Number).pipe(z.number().int().positive()),
});

// For the current user: PATCH /profile → only body
export const updateMyProfileValidationSchema = z.object({
  body: updateProfileSchema,
});

// Optional: If you later add admin route like PATCH /profile/:id
export const updateUserProfileValidationSchema = z.object({
  body: updateProfileSchema,
  params: paramsId,
});
