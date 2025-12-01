import {
  createCategory,
  deleteCategory,
  getCategoriesDDL,
  getCategoryById,
  updateCategory,
} from "@/lib/api/categories";
import { BaseQueryParams, Categories } from "@repo/types";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const QUERY_KEY = "categories";


export const useCategoriesQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryFn: () => getCategoriesDDL(),
    queryKey: ["categories", query],
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
    staleTime: 1000 * 60 * 10, // 10 minutes — categories rarely change
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string; description?: string }) =>
      createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    meta: {
      successMessage: "Category created successfully",
      errorMessage: "Failed to create category",
    },
  });
};


export const useUpdateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Categories> }) =>
      updateCategory(id, data),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, variables.id] });
    },
    meta: {
      successMessage: "Category updated successfully",
      errorMessage: "Failed to update category",
    },
  });
};

// DELETE
export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
    meta: {
      successMessage: "Category deleted successfully",
      errorMessage: "Failed to delete category",
    },
  });
};