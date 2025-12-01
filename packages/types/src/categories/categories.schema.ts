import { z } from "zod";

export const categoriesBase = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  userId: z.string().uuid().optional(),
  description: z.string().optional().nullable(),
  isDeleted: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const getCategoriesQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
  search: z.string().optional()
});

export const createCategoriesSchema = categoriesBase;

export const updateCategoriesSchema = categoriesBase.partial();


export type Categories = z.infer<typeof createCategoriesSchema>;
export type CreateCategoriesInput = z.infer<typeof createCategoriesSchema>;
export type UpdateCategoriesInput = z.infer<typeof createCategoriesSchema>;
export type GetCategoriesQuery = z.infer<typeof getCategoriesQuerySchema>;


export type CategoriesResponse = {
  categories: Categories[];
  pagination: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
export type CategoriesDDLResponse = {
  success: string;
  data: {
    id: string;
    name: string;
  }[];
};
