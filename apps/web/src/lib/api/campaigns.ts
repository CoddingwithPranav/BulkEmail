/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  InitialResponse
} from "../types";
import { Campaign, CampaignsResponse, CreateCampaignInput } from "@repo/types";

export const getCampaigns = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<InitialResponse<CampaignsResponse>>("/campaigns", {
    params: query,
  });
  return result.data;
};

export const getCampaignById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitialResponse<Campaign>>(
    `/campaigns/${id}`
  );
  return result.data;
};

export const createCampaign = async (data:CreateCampaignInput) => {
  const { data: result } = await axiosInstance.post("/campaigns", data);
  return result.data;
};

export const updateCampaign = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.patch(`/campaigns/${id}`, data);
  return result.data;
};

export const deleteCampaign = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/campaigns/${id}`);
  return result.data;
};