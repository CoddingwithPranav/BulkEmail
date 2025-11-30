import {
  createMyContact,
  deleteMyContact,
  getMyContactById,
  getMyContacts,
  updateMyContact,
} from "@/lib/api/myContact";
import { BaseQueryParams, MyContact } from "@repo/types";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export const useMyContactsQuery = (query: BaseQueryParams) => {
  return useQuery({
    queryKey: ["my-contacts", query],
    queryFn: () => getMyContacts(query),
    placeholderData: keepPreviousData,
  });
};

export const useMyContactByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["my-contacts", id],
    queryFn: () => getMyContactById(id),
    enabled: !!id, // prevents query if id is empty/falsy
  });
};

export const useCreateMyContactMutation = () => {
  return useMutation({
    mutationFn: (data: MyContact) => createMyContact(data),
    meta: {
      invalidateQuery: ["my-contacts"],
      successMessage: "Contact created successfully",
      errorMessage: "Failed to create contact",
    },
  });
};

export const useUpdateMyContactMutation = (id: string) => {
  return useMutation({
    mutationFn: (data: Partial<MyContact>) => updateMyContact(id, data),
    meta: {
      invalidateQuery: ["my-contacts", id], // invalidate both list and detail
      successMessage: "Contact updated successfully",
      errorMessage: "Failed to update contact",
    },
  });
};

export const useDeleteMyContactMutation = () => {
  return useMutation({
    mutationFn: (id: string) => deleteMyContact(id),
    meta: {
      invalidateQuery: ["my-contacts"],
      successMessage: "Contact deleted successfully",
      errorMessage: "Failed to delete contact",
    },
  });
};