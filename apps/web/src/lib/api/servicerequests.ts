import { BaseQueryParams, InitalResponse } from "../types";

import axiosInstance from "@/axios";
import {
  AppointmentType,
  Employee,
  JobType,
  ServiceRequestResponse,
  ServiceRequests,
} from "../types/ServiceRequest";

export const getServiceRequests = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<ServiceRequestResponse>(
    "/jobs/request/",
    {
      params: query,
    }
  );
  return result.data;
};

export const getServiceJobNo = async () => {
  const { data: result } = await axiosInstance.get<InitalResponse<number>>(
    "/jobs/request/job-no"
  );
  return result.data;
};

export const approveServiceRequest = async (id: string) => {
  const { data: result } = await axiosInstance.post(
    `/jobs/request/${id}/approve`
  );
  return result.data;
};

export const getServiceRequestById = async (id: string) => {
  const { data: result } = await axiosInstance.get<
    InitalResponse<ServiceRequests>
  >(`/jobs/request/${id}`);
  return result.data;
};

export const createServiceRequest = async (data: Record<string, string>) => {
  const { data: result } = await axiosInstance.post("/jobs/request", data);
  return result.data;
};

export const updateServiceRequest = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.put(`/jobs/request/${id}`, data);
  return result.data;
};

export const deleteServiceRequest = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/jobs/request/${id}`);
  return result.data;
};

export const getAppointmentTypes = async () => {
  const { data: result } = await axiosInstance.get<
    InitalResponse<AppointmentType[]>
  >("/appointment-types");
  return result.data;
};

export const getJobTypes = async () => {
  const { data: result } = await axiosInstance.get<InitalResponse<JobType[]>>(
    "/job-types"
  );
  return result.data;
};

export const getServiceAdvisors = async () => {
  const { data: result } = await axiosInstance.get<InitalResponse<Employee[]>>(
    "/service-advisors"
  );
  return result.data;
};

export const fetchServiceAdvisors = async (
  query: BaseQueryParams
): Promise<{ data: Employee[] }> => {
  const { data } = await axiosInstance.get<InitalResponse<Employee[]>>(
    "/service-advisors",
    { params: query }
  );
  return { data: data.data };
};

export const fetchMechanics = async (
  query: BaseQueryParams
): Promise<{ data: Employee[] }> => {
  const { data } = await axiosInstance.get<InitalResponse<Employee[]>>(
    "/mechanics",
    { params: query }
  );
  return { data: data.data };
};

export const fetchServiceAdvisorsOptions = async (query: BaseQueryParams) => {
  const { data } = await fetchServiceAdvisors(query);

  return (
    data?.map((emp) => ({
      value: emp.empCode,
      label: emp.empName,
      fullData: emp,
    })) ?? []
  );
};
