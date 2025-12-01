import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoriesDDL,
  getCategoryById,
  getCategoryRecipientCount,
  updateCategory,
} from "@/lib/api/categories";
import { BaseQueryParams, Categories } from "@repo/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "categories";


export const useCategoriesQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["categories", query],
    queryFn: () => getCategories(query),
    placeholderData: keepPreviousData,
  });
};
export const useCategoryRecipientCountQuery = (categoryId: string ) => {
  return useQuery({
    queryFn: () => getCategoryRecipientCount(categoryId),
    queryKey: ["categories", categoryId],
    placeholderData: keepPreviousData,
  });
};
export const useCategoriesDDLQuery = () => {
  return useQuery<Categories[]>({
    queryKey: ["categories", "ddl"], 
    queryFn: async () => {
      const response = await getCategoriesDDL();
      return response.data;
    }, 
    staleTime: 1000 * 60 * 10,
  });
};

export const useCategoryByIdQuery = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: (data: Categories) => createCategory(data),
    meta: {
      invalidateQuery: ["categories"],
      successMessage: "Category created successfully",
      errorMessage: "Failed to create category",
    },
  });
};


export const useUpdateCategoryMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: Partial<Categories>) => updateCategory(id, data),
    meta: {
      invalidateQuery: ["categories", id], 
      successMessage: "Category updated successfully",
      errorMessage: "Failed to update category",
    },
  });
};


export const useDeleteCategoryMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    meta: {
      invalidateQuery: ["categories"],
      successMessage: "Category deleted successfully",
      errorMessage: "Failed to delete category",
    },
  });
};