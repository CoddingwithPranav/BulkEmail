import { z } from "zod";
import { createCategoriesSchema, categoriesBase, getCategoriesQuerySchema } from "./categories.schema";

const paramsId = z.object({
  id: z.string().uuid(),
});

export const createCategoriesValidationSchema = z.object({
  body: createCategoriesSchema,
});

export const updateCategoriesValidationSchema = z.object({
  body: categoriesBase.partial(),
  params: paramsId,
});

export const deleteCategoriesValidationSchema = z.object({
  params: paramsId,
});

export const getCategoriesValidation = z.object({
  query: getCategoriesQuerySchema,
});
