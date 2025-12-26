import axiosInstance from "@/axios";

export const getSMSPrice = async () => {
  const { data } = await axiosInstance.get("/price/current");
  return data.data;
};