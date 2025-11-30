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



export default function EditContactPage ({ id }: { id: string }) {
  const router = useRouter();

  const { data: contact, isLoading, isSuccess } = useMyContactByIdQuery(id);
  const { mutateAsync: updateContact, isPending } = useUpdateMyContactMutation(id);

  const form = useForm<UpdateMyContactInput>({
    resolver: zodResolver(updateMyContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      province: "",
      district: "",
      municipality: "",
      categoryId: "",
    },
  });

  // Populate form when contact is fetched
  useEffect(() => {
    if (isSuccess && contact) {
      form.reset({
        firstName: contact.firstName ?? "",
        lastName: contact.lastName ?? "",
        phoneNumber: contact.phoneNumber,
        province: contact.province ?? "",
        district: contact.district ?? "",
        municipality: contact.municipality ?? "",
        categoryId: contact.categoryId,
      });
    }
  }, [contact, isSuccess, form]);

  const onSubmit = async (values: UpdateMyContactInput) => {
    try {
      await updateContact(values);
      toast.success("Contact updated successfully!");
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
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Edit Contact</h1>
        <p className="text-muted-foreground mt-2">
          Update contact details below.
        </p>
      </div>

      <Form {...form}>
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