import { InitalResponse } from ".";

export type Job = {
  id: string;
  jobCardNo: string;
  vehicleNumber: string;
  mileage: string;
  engineNumber: string;
  chassisNumber: string;
  jobType: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  dealer: string;
  appointmentType: string;
  paymentType: string;
  vehicleArrival: string;
  expectedDelivery: string;
  status: string;
  complaints: string[];
  invoiceGenerated?: boolean;
  progress: string;
};

export type Employee = {
  empCode: string;
  empName: string;
};

export type ComplaintTypeMaster = {
  complaintTypeId: number;
  complaintTypeName: string;
  description: string;
  makeUid: string;
  makeDate: string;
  mdyUid: string | null;
  mdyDate: string | null;
  recycledUid: string | null;
  recycledDate: string | null;
  recycledFlag: string;
};

export type Complaint = {
  complaintCode: string;
  complaintName: string;
  rate: number;
  empCode: string;
  comCode: number;
  complaintTypeId: number;
  makeDate: string;
  makeUid: string;
  mdyDate: string | null;
  mdyUid: string | null;
  recycledDate: string | null;
  recycledUid: string | null;
  recycledFlag: string;
  complaintTypeMaster: ComplaintTypeMaster;
};

export type ItemMaster = {
  itCode: string;
  itId: number;
  itName: string;
  keyUnit: string;
  transUnit: number;
  mrp: number;
};
export type JobComplaintPart = {
  complaintConsId: string;
  jobComplaintId: string;
  itCode: string;
  unit: string;
  qty: number;
  rate: number;
  itemMaster: ItemMaster;
};

export type JobComplaint = {
  jobComplaintId: string;
  jobId: string;
  srNo: number;
  complaintCode: string;
  empCode: string;
  assignDate: string;
  completionFlag: string;
  completionTime: string | null;
  timeTaken: string | null;
  approvedBy: string | null;
  approvedDate: string | null;
  comCode: string;
  braCode: string;
  makeDate: string;
  makeUid: string;
  mdyDate: string | null;
  mdyUid: string | null;
  recycledDate: string | null;
  recycledUid: string | null;
  recycledFlag: string;
  employee: Employee;
  complaintMaster: Complaint;
  parts: JobComplaintPart[];
};

export type JobComplaintsResponse = InitalResponse<{
  complaints: JobComplaint[];
  count: number;
}>;

export type ItemsResponse = InitalResponse<{
  items: ItemMaster[];
  count: number;
}>;
