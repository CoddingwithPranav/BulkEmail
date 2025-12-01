"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateCategoriesInput, updateCategoriesSchema } from "@repo/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { queryClient } from "@/lib/query-client";
import CategoriesFormFields from "../../_componenets/CategoriesFrom";
import {
  useCategoryByIdQuery,
  useUpdateCategoryMutation,
} from "@/hooks/queries/categories.query";

export default function EditCategoriesPage({ id }: { id: string }) {
  const router = useRouter();

  const { data: categories, isLoading, isSuccess } = useCategoryByIdQuery(id);
  const { mutateAsync: updateContact, isPending } =
    useUpdateCategoryMutation(id);

  const formValues = categories
    ? {
        name: categories.name ?? "",
        description: categories.description ?? "",
      }
    : undefined; // Pass undefined when data is loading

  const form = useForm<UpdateCategoriesInput>({
    resolver: zodResolver(updateCategoriesSchema),
    values: formValues,
  });

  const onSubmit = async (values: UpdateCategoriesInput) => {
    try {
      await updateContact(values);
      await queryClient.invalidateQueries({
        queryKey: ["categories"], //It refreshes the contacts list after update
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
        <p className="text-muted-foreground">Loading Categories...</p>
      </div>
    );
  }

  if (!categories) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Categories not found</p>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mt-4"
        >
          Go Back
        </Button>
      </div>
    );
  }
  return (
    <div className="mx-auto  p-6">
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
              {isPending ? "Updating..." : "Update categories"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
