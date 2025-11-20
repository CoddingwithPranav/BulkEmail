/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  fetchVehicleSales,
  getCustomerVehicles,
  getVehicleSales,
} from '@/lib/api/vehicle';
import { BaseQueryParams } from '@/lib/types';
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';

export type StockVehicleOption = {
  value: string;
  label: string;
  fullData: any;
};

export const useVehicleSalesMutation = () => {
  return useMutation({
    mutationKey: ['vehicleSales'],
    mutationFn: (chasisNumber: string) => getVehicleSales(chasisNumber),
  });
};

export const useVehiclesQuery = (params: {
  q?: string;
  limit: number;
  page: number;
}) => {
  return useQuery({
    queryKey: ['customers', 'vehicles', params],
    queryFn: () => getCustomerVehicles(params),
    placeholderData: keepPreviousData,
  });
};

export const useVehicleSalesQuery = (params: BaseQueryParams) => {
  return useQuery({
    queryKey: ['vehicleSales', params],
    queryFn: () => fetchVehicleSales(params),
    placeholderData: keepPreviousData,
  });
};
