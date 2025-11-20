import { BaseQueryParams, CustomerVehicleResponse } from '../types';
import { VehicleSalesResponse } from '../types/vehicleSales';

import axiosInstance from '@/axios';
import { InitalResponse } from '../types';
import { VehicleResponse } from '../types/vehicle';

export const getVehicleSales = async (chasisNumber: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: result } = await axiosInstance.get<InitalResponse<any>>(
    `/vehicles/${chasisNumber}/sales`
  );
  return result.data;
};

export const getCustomerVehicles = async (params: BaseQueryParams) => {
  const { data } = await axiosInstance.get<CustomerVehicleResponse>(
    '/customers/vehicles',
    { params }
  );
  return data.data;
};
export const fetchStockVehicles = async (query: BaseQueryParams) => {
  const { data } = await axiosInstance.get<VehicleResponse>(
    `/customers/stock-vehicles`,
    {
      params: query,
    }
  );
  return data.data;
};

export const fetchStockVehicleOptions = async (query: BaseQueryParams) => {
  const { vehicles } = await fetchStockVehicles(query);
  return (
    vehicles?.map((v) => ({
      value: v.chessisId,
      label: `${v.chessisId}`,
      fullData: v,
    })) ?? []
  );
};

export const fetchVehicleSales = async (query: BaseQueryParams) => {
  const { data } = await axiosInstance.get<VehicleSalesResponse>(
    `/vehicles/sales`,
    { params: query }
  );
  return data.data;
};

export const fetchVehicleSalesOptions = async (query: BaseQueryParams) => {
  const { sales } = await fetchVehicleSales(query);

  return (
    sales?.map((sale) => ({
      value: sale.vehicle.chessisId,
      label: sale.vehicle.chessisId,
      fullData: sale,
    })) ?? []
  );
};
