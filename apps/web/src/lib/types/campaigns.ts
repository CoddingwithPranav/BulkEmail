import { InitialResponse } from ".";

export type Campaign ={
    id: string;
    name: string;
    messageText: string;
    failedNumber: number;
    recipientsNumber: number | null;
    deliveredNumber: number;
    deliveryRate: number;
    totalSmsCost: number | null;
    province?: string | null;
    district?: string | null;
    municipality?: string | null;
    paid: boolean;
    paymentReceiptImage: string | null;
    status: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
    deliveryStatus: "NOT_STARTED" | "SENDING" | "SENT" | "FAILED";
    submitDate: string | null;
    createdAt: string;
    updatedAt: string;
}
 

export type CampaignsResponse = InitialResponse<{
  campaigns: Campaign[];
  count: number;
}>;