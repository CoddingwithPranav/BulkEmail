import axiosInstance from "@/axios";
import { BaseQueryParams } from "../types";
import { ComplaintListResponse } from "../types/complaint";

export const getComplaints = async (query?: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<ComplaintListResponse>(
    "/complaints",
    {
      params: query,
    }
  );
  return result.data;
};
