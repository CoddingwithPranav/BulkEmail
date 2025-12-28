import { getEmailPrice } from "@/lib/api/price";
import { useQuery } from "@tanstack/react-query";

export const useEmailPriceQuery = () => {
  return useQuery({
    queryKey: ['emailPrice'],
    queryFn: () => getEmailPrice()
  });
};
