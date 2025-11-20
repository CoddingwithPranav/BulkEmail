import axiosInstance from '@/axios';
import {
  BaseQueryParams,
  Customer,
  CustomerResponse,
  InitalResponse,
} from '../types';

export const getCustomer = async (query: BaseQueryParams) => {
  const { data: result } = await axiosInstance.get<CustomerResponse>(
    '/customers',
    { params: query }
  );
  return result.data;
};

export const getCustomerById = async (id: string) => {
  const { data: result } = await axiosInstance.get<InitalResponse<Customer>>(
    `/customers/${id}`
  );
  return result.data;
};

export const createCustomer = async (data: Record<string, string>) => {
  const { data: result } = await axiosInstance.post('/customers', data);
  return result.data;
};

export const updateCustomer = async (
  id: string,
  data: Record<string, string>
) => {
  const { data: result } = await axiosInstance.put(`/customers/${id}`, data);
  return result.data;
};

export const deleteCustomer = async (id: string) => {
  const { data: result } = await axiosInstance.delete(`/customers/${id}`);
  return result.data;
};
