import { z } from "zod";

export const createReceiverSchema = z.object({
   id: z.string().uuid().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  province: z.string().optional(),
  district: z.string().optional(),
  municipality: z.string().optional(),
  phoneNumber: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .optional(),
});

export const updateReceiverSchema = createReceiverSchema;

export const getMyReceiversQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  search: z.string().optional(), 
});


export type Receiver = z.infer<typeof createReceiverSchema>;
export type CreateReceiverInput = z.infer<typeof createReceiverSchema>;
export type UpdateReceiverInput = z.infer<typeof updateReceiverSchema>;
export type GetMyReceiversQuery = z.infer<typeof getMyReceiversQuerySchema>;

export type ReceiversResponse = {
  receivers: Receiver[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
