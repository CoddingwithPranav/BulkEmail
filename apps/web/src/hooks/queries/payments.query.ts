import { useMutation } from "@tanstack/react-query";
import { initiatePayment } from "@/lib/api/payments";

export const useInitiatePaymentMutation = () => {
  return useMutation({
    mutationFn: initiatePayment,
    meta: {
      successMessage: "Redirecting to payment gateway...",
      errorMessage: "Failed to initiate payment. Please try again.",
    },
  });
};