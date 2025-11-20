import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerById,
  updateCustomer,
} from '@/lib/api/customer';
import { BaseQueryParams } from '@/lib/types';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

export const useCustomerQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ['customers', query],
    queryFn: () => getCustomer(query),
    placeholderData: keepPreviousData,
  });
};

export const useCustomerQueryById = (id: string) => {
  return useQuery({
    queryKey: ['customers', id],
    queryFn: () => getCustomerById(id),
  });
};

export const useCustomerCreateMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createCustomer(data),
    meta: {
      invalidateQuery: ['customers'],
      successMessage: 'Customer created successfully',
      errorMessage: 'Something went wrong',
    },
  });
};

export const useCustomerUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updateCustomer(id, data),
    meta: {
      invalidateQuery: ['customers'],
      successMessage: 'Customer updated successfully',
      errorMessage: 'Something went wrong',
    },
  });
};

export const useCustomerDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteCustomer(id),
    meta: {
      invalidateQuery: ['customers'],
      successMessage: 'Customer deleted successfully',
      errorMessage: 'Something went wrong',
    },
  });
};
