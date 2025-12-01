import { getSMSPrice } from "@/lib/api/price";
import { useQuery } from "@tanstack/react-query";

export const useSMSPriceQuery = () => {
  return useQuery({
    queryKey: ['smsPrice'],
    queryFn: () => getSMSPrice()
  });
};
