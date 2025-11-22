import { z } from "zod";

const nepalPhoneRegex = /^9[78][0-9]{8}$/;

export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name too long")
    .trim(),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name too long")
    .trim(),

  email: z.string().email("Invalid email address").toLowerCase().trim(),

  phoneNumber: z
    .string()
    .regex(nepalPhoneRegex, "Invalid Nepali phone number (e.g., 98XXXXXXXX)")
    .optional()
    .or(z.literal("")),

  profileImage: z
    .string()
    .url("Invalid image URL")
    .optional()
    .or(z.literal("")),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
