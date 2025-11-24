import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  Campaign,
  CampaignsResponse,
  InitialResponse,
} from "@repo/types";

export const getCampaigns = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<
    InitialResponse<CampaignsResponse>
  >("/campaigns", {
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

export const createCampaign = async (data: Campaign) => {
  const { data: result } = await axiosInstance.post("/campaigns", data);
  return result.data;
};

export const updateCampaign = async (id: string, data: Campaign) => {
  const { data: result } = await axiosInstance.patch(`/campaigns/${id}`, data);
  return result.data;
};

export const deleteCampaign = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/campaigns/${id}`);
  return result.data;
};
