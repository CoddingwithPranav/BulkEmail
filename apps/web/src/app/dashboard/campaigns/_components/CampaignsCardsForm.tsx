"use client";
import { Container } from "@/components/common/Container";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

import type { Campaign } from "@repo/types";

interface CampaignFormProps {
  form: UseFormReturn<Campaign>;
  children?: React.ReactNode;
}

const CampaignForm = ({ form, children }: CampaignFormProps) => {
  return (
    <>
      {/* Campaign Details */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-gray-600" />
          Campaign Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Name *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Dashain Offer 2082" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="messageText"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Message Text *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your SMS message here..."
                    className="min-h-48 resize-none"
                    {...field}
                  />
                </FormControl>
                <div className="text-sm text-muted-foreground mt-1">
                  {field.value?.length || 0}/1600 characters
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>

      {/* Location Targeting */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-600" />
          Location Targeting (Optional)
        </h2>

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
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>District</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Kathmandu"
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
            name="municipality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Municipality / VDC</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Kathmandu Metropolitan City"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>
      {/* Submit / Cancel buttons (passed via children) */}
      {children}
    </>
  );
};

export default CampaignForm;
