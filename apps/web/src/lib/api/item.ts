///items?catId=

import axiosInstance from "@/axios";
import { BaseQueryParams } from "../types";
import { ItemsResponse } from "../types/job";

export const getItems = async (params: BaseQueryParams, catId?: string) => {
  const query = { ...params, catId };
  const { data: result } = await axiosInstance.get<ItemsResponse>("/items", {
    params: query,
  });
  return result.data;
};
