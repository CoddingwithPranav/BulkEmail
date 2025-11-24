import { z } from "zod";
import { updateProfileSchema } from "./user.schema";

const paramsId = z.object({
  id: z.string().transform(Number).pipe(z.number().int().positive()),
});
export const updateMyProfileValidationSchema = z.object({
  body: updateProfileSchema,
});
export const updateUserProfileValidationSchema = z.object({
  body: updateProfileSchema,
  params: paramsId,
});
