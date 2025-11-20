/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  InitalResponse,
  JobCard,
  JobCardResponse,
} from "../types";
import { JobComplaintsResponse } from "../types/job";

export const getJobCards = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<JobCardResponse>("/jobs", {
    params: query,
  });
  return result.data;
};

export const getJobCardById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitalResponse<JobCard>>(
    `/jobs/${id}`
  );
  return result.data;
};

export const createJobCard = async (data: Record<string, string>) => {
  const { data: result } = await axiosInstance.post("/jobs", data);
  return result.data;
};

export const updateJobCard = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.put(`/jobs/${id}`, data);
  return result.data;
};

export const deleteJobCard = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/jobs/${id}`);
  return result.data;
};

export const getComplaintsApi = async (id: string) => {
  const { data: result } = await axiosInstance.get<JobComplaintsResponse>(
    `/jobs/${id}/complaints`
  );
  return result.data;
};

export const assignComplaintsApi = async (
  id: string,
  data: {
    complaints: any[];
  }
) => {
  const { data: result } = await axiosInstance.post(
    `/jobs/${id}/complaints`,
    data
  );
  return result.data;
};

export const assignMechanicApi = async (
  id: string,
  data: {
    empCode: string;
  }
) => {
  const { data: result } = await axiosInstance.patch(
    `/jobs/complaints/${id}/assign-employee`,
    data
  );
  return result.data;
};

// complaint parts
export const assignPartsToComplaintApi = async (
  id: string,
  data: {
    parts: any[];
  }
) => {
  const { data: result } = await axiosInstance.post(
    `/jobs/complaints/${id}/assign-parts`,
    data
  );
  return result.data;
};

export const updatePartsApi = async (
  id: string,
  data: {
    parts: any[];
  }
) => {
  const { data: result } = await axiosInstance.put(
    `/jobs/complaints/assign-parts/${id}`,
    data
  );
  return result.data;
};
export const deletePartsApi = async (id: string) => {
  const { data: result } = await axiosInstance.delete(
    `/jobs/complaints/assign-parts/${id}`
  );
  return result.data;
};
