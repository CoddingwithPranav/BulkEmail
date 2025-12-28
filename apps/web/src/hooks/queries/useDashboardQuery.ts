import { getDashboard } from "@/lib/api/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useDashboardQuery = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard, 
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};