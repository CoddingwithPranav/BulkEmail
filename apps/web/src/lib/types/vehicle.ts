import { InitalResponse } from '.';

export type Vehicle = {
  registrationNo: string;
  chessisId: string;
  engineeId: string;
  modelNo: string;
  colorName: string;
  status: 'Sold' | 'In Stock';
};

export type VehicleResponse = InitalResponse<{
  vehicles: Vehicle[];
  count: number;
}>;
