"use client";

import MyReceiverFormFields from "../../_components/ReceiverForm";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateReceiverInput, createReceiverSchema } from "@repo/types";
import { useReceiverCreateMutation } from "@/hooks/queries/reveivers.query";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";


export default function CreateReceiver() {
      const router = useRouter();
    
      const form = useForm<CreateReceiverInput>({
        resolver: zodResolver(createReceiverSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          province: "",
          district: "",
          municipality: "",
          phoneNumber: ""
        },
      });
    
      const { mutateAsync: createContact, isPending } = useReceiverCreateMutation();
    
      const onSubmit = async (values: CreateReceiverInput) => {
        try {
          await createContact(values);
          form.reset();
          router.push("/dashboard/receiver-list");
        } catch (error: any) {
          toast.error(error?.message || "Failed to create contact");
          console.error("Create contact error:", error);
        }
      };
  return (
     <div className="mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <MyReceiverFormFields form={form} />

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
              {isPending ? "Creating..." : "Create Receiver"}
            </Button>
          </div>
        </form>
      </Form>
    </div>

  );
}