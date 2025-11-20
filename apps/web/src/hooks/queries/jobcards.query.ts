/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  assignComplaintsApi,
  assignMechanicApi,
  assignPartsToComplaintApi,
  createJobCard,
  deleteJobCard,
  deletePartsApi,
  getComplaintsApi,
  getJobCardById,
  getJobCards,
  updateJobCard,
  updatePartsApi,
} from "@/lib/api/jobcards";
import { BaseQueryParams } from "@/lib/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export const useJobCardsQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["jobs", query],
    queryFn: () => getJobCards(query),
    placeholderData: keepPreviousData,
  });
};

export const useJobcardsQueryById = (id: string) => {
  return useQuery({
    queryKey: ["jobs", id],
    queryFn: () => getJobCardById(id),
  });
};

export const useJobCardCreateMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createJobCard(data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Job Card created successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useJobCardUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updateJobCard(id, data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Job Card updated successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useJobCardDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteJobCard(id),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Job Card deleted successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useJobCardComplaintsQuery = (id: string) => {
  return useQuery({
    queryKey: ["jobs", id, "complaints"],
    queryFn: () => getComplaintsApi(id),
  });
};

export const useJobCardAssignComplaintsMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: { complaints: any[] }) => assignComplaintsApi(id, data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Complaints updated successfully",
      errorMessage: "Something went wrong",
    },
  });
};

// mechanic
export const useJobCardAssignMechanicMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: { empCode: string }) => assignMechanicApi(id, data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Mechanic assigned to complaint successfully",
      errorMessage: "Something went wrong",
    },
  });
};

// parts

export const useJobCardAssignPartsMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => assignPartsToComplaintApi(id, data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Parts assigned to complaint successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useJobCardUpdateAssignPartsMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updatePartsApi(id, data),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Parts updated successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useJobCardDeleteAssignPartsMutation = (id: string) => {
  return useMutation({
    mutationFn: () => deletePartsApi(id),
    meta: {
      invalidateQuery: ["jobs"],
      successMessage: "Parts deleted successfully",
      errorMessage: "Something went wrong",
    },
  });
};
