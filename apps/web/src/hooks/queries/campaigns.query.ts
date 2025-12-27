import {
  createCampaign,
  deleteCampaign,
  getCampaignById,
  getCampaigns,
  startCampaign,
  updateCampaign,
  updatePaidStatusCampaign,
} from "@/lib/api/campaigns";
import { BaseQueryParams, Campaign } from "@repo/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export const useCampaignsQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["campaigns", query],
    queryFn: () => getCampaigns(query),
    placeholderData: keepPreviousData,
    refetchInterval:5000,
  });
};

export const useCampaignsQueryById = (id: string) => {
  return useQuery({
    queryKey: ["campaigns", id],
    queryFn: () => getCampaignById(id),
  });
};
export const useCampaignStartMutation = () => {
  return useMutation({
    mutationFn: (id: string) => startCampaign(id),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign started successfully",
      errorMessage: "Something went wrong",
    },
  });
};


export const useCampaignCreateMutation = () => {
  return useMutation({
    mutationFn: (data: Campaign) => createCampaign(data),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign created successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useCampaignUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: Campaign) => updateCampaign(id, data),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign updated successfully",
      errorMessage: "Something went wrong",
    },
  });
};
export const useCampaignUpdatePaidStatusMutation = (id: string) => {
  return useMutation({
    mutationFn: () => updatePaidStatusCampaign(id),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign marked as paid successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useCampaignDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteCampaign(id),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign deleted successfully",
      errorMessage: "Something went wrong",
    },
  });
};
