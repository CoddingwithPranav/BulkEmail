/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  Campaign,
  CampaignsResponse,
  InitalResponse,
} from "../types";

export const getCampaigns = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<CampaignsResponse>("/campaigns", {
    params: query,
  });
  return result.data;
};

export const getCampaignById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitalResponse<Campaign>>(
    `/campaigns/${id}`
  );
  return result.data;
};

export const createCampaign = async (data: Record<string, string>) => {
  const { data: result } = await axiosInstance.post("/campaigns", data);
  return result.data;
};

export const updateCampaign = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.put(`/campaigns/${id}`, data);
  return result.data;
};

export const deleteCampaign = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/campaigns/${id}`);
  return result.data;
};