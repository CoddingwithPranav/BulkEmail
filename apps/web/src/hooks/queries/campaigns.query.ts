/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCampaign, deleteCampaign, getCampaignById, getCampaigns, updateCampaign } from "@/lib/api/campaigns";
import { BaseQueryParams, CreateCampaignInput } from "@repo/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export const useCampaignsQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["campaigns", query],
    queryFn: () => getCampaigns(query),
    placeholderData: keepPreviousData,
  });
};

export const useCampaignsQueryById = (id: string) => {
  return useQuery({
    queryKey: ["campaigns", id],
    queryFn: () => getCampaignById(id),
  });
};

export const useCampaignCreateMutation = () => {
  return useMutation({
    mutationFn: (data: CreateCampaignInput) => createCampaign(data),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign created successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useCampaignUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updateCampaign(id, data),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign updated successfully",
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

