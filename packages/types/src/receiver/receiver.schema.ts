import { z } from "zod";

export const receiverBase = z.object({
  id: z.string().uuid().optional(),

  firstName: z.string().optional(),
  lastName: z.string().optional(),

  province: z.string().optional(),
  district: z.string().optional(),
  municipality: z.string().optional(),

  phoneNumber: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),

  isDeleted: z.boolean().optional(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),

  receiverMessageId: z.string().uuid().nullable().optional(),

  userId: z.string().uuid(),
});

export const createReceiverSchema = receiverBase;

export const updateReceiverSchema = receiverBase.partial();

export type ReceiversResponse = {
  receivers: z.infer<typeof createReceiverSchema>[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};

export type Receiver = z.infer<typeof createReceiverSchema>;
export type CreateReceiverInput = z.infer<typeof createReceiverSchema>;
export type UpdateReceiverInput = z.infer<typeof updateReceiverSchema>;
