import { getItems } from "@/lib/api/item";
import { BaseQueryParams } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export const useGetItems = (params: BaseQueryParams) => {
  return useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(params),
  });
};
