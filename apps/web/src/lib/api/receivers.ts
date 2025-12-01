import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  Receiver,
  ReceiversResponse,
  InitialResponse,
} from "@repo/types";
export const getReceivers = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<
    InitialResponse<ReceiversResponse>
  >("/receiver", {
    params: query,
  });
  return result.data;
};

export const getReceiverById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitialResponse<Receiver>>(
    `/receiver/${id}`
  );
  return result.data;
};

export const createReceiver = async (data: Receiver) => {
  const { data: result } = await axiosInstance.post("/receiver", data);
  return result.data;
};

export const updateReceiver = async (id: string, data: Partial<Receiver>) => {
  const { data: result } = await axiosInstance.patch(`/receiver/${id}`, data);
  return result.data;
};

export const deleteReceiver = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/receiver/${id}`);
  return result.data;
};
