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
import { toast } from "sonner"; 
import MyContactFormFields from "../../_components/ContactCardForm";

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
      form.reset();
      router.push("/dashboard/contacts");
    } catch (error: any) {
      toast.error(error?.message || "Failed to create contact");
      console.error("Create contact error:", error);
    }
  };

  return (
    <div className="mx-auto p-6">
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