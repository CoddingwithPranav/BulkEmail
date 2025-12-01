
import { createReceiver, deleteReceiver, getReceiverById, getReceivers, updateReceiver } from "@/lib/api/receivers";
import { BaseQueryParams, Receiver } from "@repo/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";    

export const useReceiversQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["receiver", query],
    queryFn: () => getReceivers(query),
    placeholderData: keepPreviousData,
  });
};

export const useReceiversQueryById = (id: string) => {
  return useQuery({
    queryKey: ["receiver", id],
    queryFn: () => getReceiverById(id),
  });
};

export const useReceiverCreateMutation = () => {
  return useMutation({
    mutationFn: (data: Receiver) => createReceiver(data),   
    meta: {
        invalidateQuery: ["receiver"],
        successMessage: "Receiver created successfully",
        errorMessage: "Something went wrong",
      },
  });
};

export const useReceiverUpdateMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: Receiver) => updateReceiver(id, data),   
    meta: {
        invalidateQuery: ["receiver"],
        successMessage: "Receiver updated successfully",    
        errorMessage: "Something went wrong",
      },
  });
}

export const useReceiverDeleteMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteReceiver(id),
    meta: {
      invalidateQuery: ["receiver"],
      successMessage: "Receiver deleted successfully",  
        errorMessage: "Something went wrong",
    },
    });
};
