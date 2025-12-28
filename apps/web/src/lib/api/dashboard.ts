import axiosInstance from "@/axios";
import { DashboardData } from "@repo/types";

export const getDashboard = async (): Promise<{ data: DashboardData }> => {
  const { data: result } = await axiosInstance.get("/dashboard");
  return result;
};