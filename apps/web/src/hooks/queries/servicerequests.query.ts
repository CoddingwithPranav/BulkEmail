/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  approveServiceRequest,
  createServiceRequest,
  deleteServiceRequest,
  getAppointmentTypes,
  getJobTypes,
  getServiceJobNo,
  getServiceRequestById,
  getServiceRequests,
  updateServiceRequest,
} from "@/lib/api/servicerequests";
import { BaseQueryParams } from "@/lib/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export const useServiceRequestsQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["jobs/request", query],
    queryFn: () => getServiceRequests(query),
    placeholderData: keepPreviousData,
  });
};

export const useServiceRequestQueryById = (id: string) => {
  return useQuery({
    queryKey: ["jobs/request", id],
    queryFn: () => getServiceRequestById(id),
  });
};

export const useServiceRequestNo = () => {
  return useQuery({
    queryKey: ["jobs/request/job-no"],
    queryFn: () => getServiceJobNo(),
  });
};

export const useServiceRequestApproveMutation = () => {
  return useMutation({
    mutationFn: (id: string) => approveServiceRequest(id),
    meta: {
      invalidateQuery: [["jobs/request"], ["jobs"]],
      successMessage: "Service Request approved successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useServiceRequestCreateMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createServiceRequest(data),
    meta: {
      invalidateQuery: ["jobs/request"],
      successMessage: "Service Request created successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useServiceRequestUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updateServiceRequest(id, data),
    meta: {
      invalidateQuery: ["jobs/request"],
      successMessage: "Service Request updated successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useServiceRequestDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteServiceRequest(id),
    meta: {
      invalidateQuery: ["jobs/request"],
      successMessage: "Service Request deleted successfully",
      errorMessage: "Something went wrong",
    },
  });
};

export const useAppointmentTypes = () => {
  return useQuery({
    queryKey: ["appointment-types"],
    queryFn: () => getAppointmentTypes(),
  });
};

export const useJobTypes = () => {
  return useQuery({
    queryKey: ["job-types"],
    queryFn: () => getJobTypes(),
  });
};
