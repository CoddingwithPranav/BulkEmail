// packages/types/price/price.schema.ts
import { z } from "zod";

export const createPriceSchema = z.object({
  pricePerSmsPaisa: z
    .number()
    .int()
    .min(1, "Price must be at least 1 paisa")
    .max(10000, "Price too high")
    .describe("Price per SMS in paisa (e.g., 85 = Rs. 0.85)"),

  currency: z
    .string()
    .default("NPR")
    .optional()
    .describe("Currency code (default: NPR)"),

  effectiveFrom: z
    .string()
    .datetime({ message: "Invalid datetime format" })
    .optional()
    .default(() => new Date().toISOString())
    .describe("When this price becomes active"),

  effectiveTo: z
    .string()
    .datetime({ message: "Invalid datetime format" })
    .nullable()
    .optional()
    .describe("When this price expires (null = never)"),
});

export const updatePriceSchema = createPriceSchema
  .partial()
  .extend({
    isActive: z.boolean().optional(),
  });

export const getPricingHistoryQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const priceIdParamSchema = z.object({
  id: z.string().uuid("Invalid price ID"),
});

// Inferred Types
export type CreatePriceInput = z.infer<typeof createPriceSchema>;
export type UpdatePriceInput = z.infer<typeof updatePriceSchema>;
export type GetPricingHistoryQuery = z.infer<typeof getPricingHistoryQuerySchema>;
export type PriceIdParam = z.infer<typeof priceIdParamSchema>;

export type PriceResponse = {
  id: string;
  pricePerSmsPaisa: number;
  pricePerSmsNPR: number;
  currency: string;
  isActive: boolean;
  effectiveFrom: string;
  effectiveTo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PricingHistoryResponse = {
  items: PriceResponse[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};