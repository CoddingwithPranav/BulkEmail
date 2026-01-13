"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UpdateCategoriesInput } from "@repo/types";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { BaggageClaim } from "lucide-react";

interface MyCategoriesFormFieldsProps {
  form: UseFormReturn<UpdateCategoriesInput>;
}
const CategoriesFormFields = ({ form }: MyCategoriesFormFieldsProps) => {
  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <BaggageClaim className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Categories Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ram"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your Description here..."
                    className="min-h-48 resize-none"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <div className="text-sm text-muted-foreground mt-1">
                  {field.value?.length || 0}/100 characters
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>
    </div>
  );
};

export default CategoriesFormFields;
