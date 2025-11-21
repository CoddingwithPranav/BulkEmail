import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    phoneNumber: z.string().regex(/^9\d{9}$/).optional(), // Nepal format example
    password: z.string().min(8).optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    organizationName: z.string().optional(),
    accountType: z.enum(['INDIVIDUAL', 'ORGANIZATION']).default('INDIVIDUAL'),
    isGuest: z.boolean().optional().default(false),
  }).refine((data) => data.email || data.phoneNumber, {
    message: "Either email or phoneNumber is required",
  }).refine((data) => data.isGuest || data.password, {
    message: "Password is required for non-guest accounts",
  }),
});

export const loginSchema = z.object({
  body: z.object({
    name: z.string(),
    password: z.string().min(8),
  }),
});