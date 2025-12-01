import { z } from "zod";
import {
  createPriceSchema,
  updatePriceSchema,
  getPricingHistoryQuerySchema,
  priceIdParamSchema,
} from "./price.schema";

export const createPriceValidation = z.object({
  body: createPriceSchema,
});

export const updatePriceValidation = z.object({
  params: priceIdParamSchema,
  body: updatePriceSchema,
});

export const deletePriceValidation = z.object({
  params: priceIdParamSchema,
});

export const getPricingHistoryValidation = z.object({
  query: getPricingHistoryQuerySchema,
});

export const getCurrentPriceValidation = z.object({}).optional();