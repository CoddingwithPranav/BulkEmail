"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateCategoriesInput, createCategoriesSchema, CreateReceiverInput } from "@repo/types";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import CategoriesFormFields from "../../_componenets/CategoriesFrom";
import { useCreateCategoryMutation } from "@/hooks/queries/categories.query";


export default function CreateCategories() {
      const router = useRouter();
    
      const form = useForm<CreateCategoriesInput>({
        resolver: zodResolver(createCategoriesSchema),
        defaultValues: {
          name: "",
          description: ""
        },
      });
    
      const { mutateAsync: createContact, isPending } = useCreateCategoryMutation();
    
      const onSubmit = async (values: CreateReceiverInput) => {
        try {
          await createContact(values);
          form.reset();
          router.push("/dashboard/categories");
        } catch (error: any) {
          toast.error(error?.message || "Failed to create contact");
          console.error("Create contact error:", error);
        }
      };
  return (
     <div className="mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CategoriesFormFields form={form} />

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
              {isPending ? "Creating..." : "Create Categories"}
            </Button>
          </div>
        </form>
      </Form>
    </div>

  );
}