import { z } from "zod";

const nepalPhoneRegex = /^9\d{9}$/;

export const registerBodySchema = z
  .object({
    email: z.string().email().optional(),
    phoneNumber: z.string().regex(nepalPhoneRegex).optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    fullName: z.string().optional(),
    organizationName: z.string().optional(),
    accountType: z.enum(["INDIVIDUAL", "ORGANIZATION"]).default("INDIVIDUAL"),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: "Either email or phoneNumber is required",
  })
  .refine((data) => data.password, {
    message: "Password is required for non-guest accounts",
  });

export type RegisterForm = z.infer<typeof registerBodySchema>;

export const loginBodySchema = z.object({
  name: z.string(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginForm = z.infer<typeof loginBodySchema>;
