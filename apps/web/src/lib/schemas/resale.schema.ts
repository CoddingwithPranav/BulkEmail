import z from 'zod';

export const createVehicleSaleSchema = z.object({
  registrationNo: z.string().min(1, 'Registration Number is required'),
  chessisId: z.string().min(1, 'Chassis ID is required'),
  engineeId: z.string().min(1, 'Engine ID is required'),
  modelNo: z.string(),
  variant: z.string(),
  color: z.string(),
  cusName: z.string().min(1, 'Customer Name is required'),
  mobile: z.string().min(1, 'Phone Number is required'),
  panNo: z.string().min(1, 'PAN Number is required'),
  pofficeAddress: z.string().min(1, 'Address is required'),
  saleDate: z.date(),
  status: z.enum(['pending', 'complete']),
});

export type CreateVehicleSaleFormData = z.infer<typeof createVehicleSaleSchema>;
