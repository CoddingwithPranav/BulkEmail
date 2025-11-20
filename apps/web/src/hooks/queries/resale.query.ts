import {
  createResale,
  deleteResale,
  getResale,
  getResales,
  updateResale,
} from '@/lib/api/resale';
import { BaseQueryParams } from '@/lib/types';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

export const useResaleQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ['resales', query],
    queryFn: () => getResales(query),
    placeholderData: keepPreviousData,
  });
};

export const useResaleQueryById = (id: string) => {
  return useQuery({
    queryKey: ['resales', id],
    queryFn: () => getResale(id),
  });
};

export const useResaleCreateMutation = () => {
  return useMutation({
    mutationFn: (data: any) => createResale(data),
    meta: {
      invalidateQuery: [['resales'], ['customers']],
      successMessage: 'Resale created successfully',
      errorMessage: 'Something went wrong',
    },
  });
};

export const useResaleUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: any) => updateResale(id, data),
    meta: {
      invalidateQuery: ['resales'],
      successMessage: 'Resale updated successfully',
      errorMessage: 'Something went wrong',
    },
  });
};

export const useResaleDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteResale(id),
    meta: {
      invalidateQuery: ['resales'],
      successMessage: 'Resale deleted successfully',
      errorMessage: 'Something went wrong',
    },
  });
};
