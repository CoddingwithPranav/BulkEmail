import { z } from "zod";
import { createCategoriesSchema, categoriesBase } from "./categories.schema";

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
