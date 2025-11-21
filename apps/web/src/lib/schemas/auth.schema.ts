import { first } from 'lodash';
import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().nonempty({ message: 'Login name is required' }),
  password: z.string().min(6, { message: 'Password is too short' }),
});

export const registerSchema = z.object({
  firstName:z.string().min(2, "First name is required").optional(),
  lastName:z.string().min(2, "Last name is required").optional(),
  fullName: z.string().min(2, "Name is required").optional(),
  isGuest: z.boolean().optional().default(false),
  email: z.string().email("Invalid email address"),
  phoneNumber:  z.string().regex(/^9\d{9}$/, "Invalid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  accountType: z.enum(["INDIVIDUAL", "ORGANIZATION"]),
});



export type LoginForm = z.infer<typeof loginSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;
