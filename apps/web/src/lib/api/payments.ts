// lib/api/payments.ts
import axiosInstance from "@/axios";
import { InitialResponse } from "@repo/types";

export type InitiatePaymentPayload = {
  campaignId: string;
  amount: number;
  payment_method: "esewa";
};

export type InitiatePaymentResponse =
  | {
      paymentMethod: "esewa";
      formData: Record<string, string>;
    }
  

export const initiatePayment = async (payload: InitiatePaymentPayload) => {
  const { data } = await axiosInstance.post<InitialResponse<InitiatePaymentResponse>>(
    "/payments/create",
    payload
  );
  console.log("Payment initiation response:", data);
  return data.data; // { paymentMethod, formData or data }
};