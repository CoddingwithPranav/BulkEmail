"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UpdateReceiverInput } from "@repo/types";
import { MapPin, Phone, User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";


interface MyReceiverFormFieldsProps {
  form: UseFormReturn<UpdateReceiverInput>;

}
const MyReceiverFormFields = ({ form }: MyReceiverFormFieldsProps) => {
  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Personal Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ram"
                    {...field}  value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Bahadur"
                    {...field} value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="9801234567"
                    className="pl-10"
                    maxLength={10}
                    {...field} value={field.value ?? ""}
                  />
                </div>
              </FormControl>
              <FormMessage />
              <p className="text-xs text-muted-foreground mt-1">
                Must be exactly 10 digits (Nepali mobile number)
              </p>
            </FormItem>
          )}
        />
      </section>

      {/* Location Details */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Location (Optional)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Province</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Bagmati"
                    {...field} value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Kathmandu"
                    {...field} value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="municipality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Municipality / VDC</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Kathmandu Metropolitan"
                    {...field} value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </section>
    </div>
  );
};

export default MyReceiverFormFields;