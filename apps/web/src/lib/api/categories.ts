import axiosInstance from "@/axios";
import {
  Categories,
  CategoriesResponse,
  CreateCategoriesInput,
  UpdateCategoriesInput,
  InitialResponse,
  BaseQueryParams,
  CategoriesDDLResponse,
} from "@repo/types";


export const getCategories = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<InitialResponse<CategoriesResponse>>("/categories", {
    params: query,
  });
  return result.data;
};

export const getCategoriesDDL = async () => {
  const { data: result } = await axiosInstance.get<CategoriesDDLResponse>("/categories/ddl");
  return result;
};
export const getCategoryRecipientCount = async (categoryId: string) => {
  const { data } = await axiosInstance.get(`/categories/total-recipients/${categoryId}`);
  return data.data; 
};
export const getCategoryById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitialResponse<Categories>>(
    `/categories/${id}`
  );
  return result.data;
};

export const createCategory = async (data: CreateCategoriesInput) => {
  const { data: result } = await axiosInstance.post<InitialResponse<Categories>>(
    "/categories",
    data
  );
  return result.data;
};

export const updateCategory = async (id: string, data: UpdateCategoriesInput) => {
  const { data: result } = await axiosInstance.patch<InitialResponse<Categories>>(
    `/categories/${id}`,
    data
  );
  return result.data;
};

export const deleteCategory = async (id: string) => {
  const { data: result } = await axiosInstance.delete<InitialResponse<null>>(
    `/categories/${id}`
  );
  return result.data;
};