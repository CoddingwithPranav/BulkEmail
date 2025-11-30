
// src/lib/api/myContact.ts
import axiosInstance from "@/axios";
import {
  BaseQueryParams,
  MyContact,
  InitialResponse,
  ContactResponse,
} from "@repo/types";

export const getMyContacts = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<InitialResponse<ContactResponse>>("/my-contacts", {
    params: query,
  });
  return result.data;
};

export const getMyContactById = async (id: string) => {
  const { data: result } = await axiosInstance.get<
    InitialResponse<MyContact>
  >(`/my-contacts/${id}`);
  return result.data;
};

export const createMyContact = async (data: MyContact) => {
  const { data: result } = await axiosInstance.post("/my-contacts", data);
  return result.data;
};

export const updateMyContact = async (id: string, data: Partial<MyContact>) => {
  const { data: result } = await axiosInstance.patch(`/my-contacts/${id}`, data);
  return result.data;
};

export const deleteMyContact = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/my-contacts/${id}`);
  return result.data;
};