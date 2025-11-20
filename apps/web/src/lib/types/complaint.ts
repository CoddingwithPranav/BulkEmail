import { InitalResponse } from ".";

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
  complaintType: ComplaintTypeMaster;
};
export type ComplaintListResponse = InitalResponse<{
  complaints: Complaint[];
  count: number;
}>;
