/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCampaign, getCampaignById, getCampaigns, updateCampaign } from "@/lib/api/campaigns";
import { deleteJobCard } from "@/lib/api/jobcards";
import { BaseQueryParams } from "@/lib/types";
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
    mutationFn: (data: any) => createCampaign(data),
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
    mutationFn: (id: string) => deleteJobCard(id),
    meta: {
      invalidateQuery: ["campaigns"],
      successMessage: "Campaign deleted successfully",
      errorMessage: "Something went wrong",
    },
  });
};

