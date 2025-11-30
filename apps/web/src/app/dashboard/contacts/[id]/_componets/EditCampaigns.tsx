"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  useMyContactByIdQuery,
  useUpdateMyContactMutation,
} from "@/hooks/queries/myContact.query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateMyContactInput,
  updateMyContactSchema,
} from "@repo/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import MyContactFormFields from "../../_components/CampaignsCardsForm";
import { queryClient } from "@/lib/query-client";



export default function EditContactPage ({ id }: { id: string }) {
  const router = useRouter();

  const { data: contact, isLoading, isSuccess } = useMyContactByIdQuery(id);
  const { mutateAsync: updateContact, isPending } = useUpdateMyContactMutation(id);

  const formValues = contact ? {
    firstName: contact.firstName ?? "",
    lastName: contact.lastName ?? "",
    phoneNumber: contact.phoneNumber,
    province: contact.province ?? "",
    district: contact.district ?? "",
    municipality: contact.municipality ?? "",
    categoryId: contact.categoryId ?? "",
  } : undefined; // Pass undefined when data is loading

  const form = useForm<UpdateMyContactInput>({
    resolver: zodResolver(updateMyContactSchema),
    values: formValues, 
  });

  const onSubmit = async (values: UpdateMyContactInput) => {
    try {
      await updateContact(values);
      await queryClient.invalidateQueries({ 
        queryKey: ["my-contacts"] //It refreshes the contacts list after update
      });
      router.back();
    } catch (error: any) {
      toast.error(error?.message || "Failed to update contact");
      console.error("Update failed:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Loading contact...</p>
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Contact not found</p>
        <Button variant="outline" onClick={() => router.back()} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto  p-6">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <MyContactFormFields form={form} />

          <div className="flex justify-end gap-4 pt-8 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button type="submit" variant="brand" disabled={isPending}>
              {isPending ? "Updating..." : "Update Contact"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

