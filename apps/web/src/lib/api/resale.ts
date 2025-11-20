import axiosInstance from '@/axios';
import {
  BaseQueryParams,
  DealerResale,
  DealerResaleResponse,
  InitalResponse,
} from '../types';

export const getResales = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<DealerResaleResponse>(
    '/resales',
    { params: query }
  );
  return result.data;
};

export const getResale = async (id: string) => {
  const { data: result } = await axiosInstance.get<
    InitalResponse<DealerResale>
  >(`/resales/${id}`);
  return result.data;
};

export const createResale = async (data: Record<string, string>) => {
  const { data: result } = await axiosInstance.post('/resales', data);
  return result.data;
};

export const updateResale = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.put(`/resales/${id}`, data);
  return result.data;
};

export const deleteResale = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/resales/${id}`);
  return result.data;
};
