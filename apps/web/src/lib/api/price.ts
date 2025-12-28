import axiosInstance from "@/axios";
import { PriceResponse } from "@repo/types";

export const getEmailPrice = async (): Promise<PriceResponse> => {
  const { data } = await axiosInstance.get("/price/current");
  return data.data;
};