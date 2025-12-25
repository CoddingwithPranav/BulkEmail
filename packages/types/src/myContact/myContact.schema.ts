// packages/types/myContact/myContact.schema.ts
import { z } from "zod";

export const createMyContactSchema = z.object({
  id: z.string().uuid().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  province: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  district: z.string().optional(),
  municipality: z.string().optional(),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .transform((val) => val.replace(/\D/g, "")),
  categoryId: z.string().uuid("Invalid category ID"),
  category: z.object({
    name: z.string().optional(),
  }).optional(),
});

export const updateMyContactSchema = createMyContactSchema

export const getMyContactsQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  search: z.string().optional(),
  categoryId: z.string().uuid().optional(),
});

export type ContactResponse = {
  contacts: z.infer<typeof createMyContactSchema>[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
export type MyContact = z.infer<typeof createMyContactSchema>;
export type CreateMyContactInput = z.infer<typeof createMyContactSchema>;
export type UpdateMyContactInput = z.infer<typeof updateMyContactSchema>;
export type GetMyContactsQuery = z.infer<typeof getMyContactsQuerySchema>;