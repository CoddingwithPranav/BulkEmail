import { getComplaints } from "@/lib/api/complaints";
import { BaseQueryParams } from "@/lib/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useComplaintQuery = (params?: BaseQueryParams) => {
  return useQuery({
    queryKey: ["complaints", params],
    queryFn: () => getComplaints(params),
    placeholderData: keepPreviousData,
  });
};
