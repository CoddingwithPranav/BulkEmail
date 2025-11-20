import { z } from "zod";

const complaintTypeMasterSchema = z.object({
  complaintTypeId: z.number().optional(),
  complaintTypeName: z.string().optional(),
  description: z.string().optional(),
});

const complaintMasterSchema = z.object({
  complaintCode: z.string().optional(),
  complaintName: z.string().optional(),
  rate: z.number().optional(),
  complaintTypeId: z.number().optional(),
  complaintTypeMaster: complaintTypeMasterSchema,
  assignedParts: z.array(z.number()).optional(),
});

const complaintSchema = z.object({
  jobComplaintId: z.string().optional(),
  complaintCode: z.string().min(1, "Complaint Code is required"),
  jobId: z.string().optional(),
  empCode: z.string().optional(),
  complaintDescription: z.string().optional(),
  employee: z.object({
    empCode: z.string().optional(),
    empName: z.string().optional(),
  }),
  complaintMaster: complaintMasterSchema.optional(),
});

export type ComplaintSchema = z.infer<typeof complaintSchema>;

export const createServiceRequestsSchema = z.object({
  jobNo: z.string().min(1, "Job Card No. is required"),
  registrationNumber: z.string().optional(),
  appointmentTypeId: z.string().optional(),
  jobTypeId: z.string().optional(),
  status: z.string().optional(),
  jobDate: z.string().optional(),
  vehicleArrivalDate: z.string().optional(),
  cusName: z.string().min(1, "Customer Name is required"),
  cusCode: z.string().optional(),
  empCode: z.string().optional(),
  phone: z.string().optional(),
  tmNo1: z.string().optional(),
  ward: z.string().optional(),
  address: z.string().optional(),
  pofficeAddress: z.string().optional(),
  panNo: z.string().optional(),
  dealer: z.string().optional(),
  advisor: z.string().optional(),
  chasisNumber: z.string().optional(),
  engineNumber: z.string().optional(),
  vehicleNo: z.string().optional(),
  currentKm: z.string().optional(),
  complaints: z.array(complaintSchema).optional(),
});

export type CreateServiceRequestsFormData = z.infer<
  typeof createServiceRequestsSchema
>;
