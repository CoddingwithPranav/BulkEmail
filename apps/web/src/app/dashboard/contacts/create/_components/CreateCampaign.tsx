"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCreateMyContactMutation } from "@/hooks/queries/myContact.query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateMyContactInput,
  createMyContactSchema,
} from "@repo/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner"; // optional, but recommended
import MyContactFormFields from "../../_components/CampaignsCardsForm";

export default function CreateContactPage() {
  const router = useRouter();

  const form = useForm<CreateMyContactInput>({
    resolver: zodResolver(createMyContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      province: "",
      district: "",
      municipality: "",
      phoneNumber: "",
      categoryId: "",
    },
  });

  const { mutateAsync: createContact, isPending } = useCreateMyContactMutation();

  const onSubmit = async (values: CreateMyContactInput) => {
    try {
      await createContact(values);
      toast.success("Contact created successfully!");
      form.reset();
      router.push("/dashboard/my-contacts");
    } catch (error: any) {
      toast.error(error?.message || "Failed to create contact");
      console.error("Create contact error:", error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Create New Contact</h1>
        <p className="text-muted-foreground mt-2">
          Add a new contact to your personal contact list.
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
              {isPending ? "Creating..." : "Create Contact"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}