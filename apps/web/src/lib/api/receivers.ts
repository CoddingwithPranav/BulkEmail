
import axiosInstance from "@/axios";
import {  BaseQueryParams,
  Receiver,
  ReceiversResponse,
  InitialResponse,
} from "@repo/types";   
export const getReceivers = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<
    InitialResponse<ReceiversResponse>
  >("/receivers", {
    params: query,
  });
  return result.data;
};

export const getReceiverById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitialResponse<Receiver>>(
    `/receivers/${id}`
  );
  return result.data;
};

export const createReceiver = async (data: Receiver) => {
  const { data: result } = await axiosInstance.post("/receivers", data);
  return result.data;
};

export const updateReceiver = async (id: string, data: Partial<Receiver>) => {
  const { data: result } = await axiosInstance.patch(`/receivers/${id}`, data);
  return result.data;
};

export const deleteReceiver = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/receivers/${id}`);
  return result.data;
};


