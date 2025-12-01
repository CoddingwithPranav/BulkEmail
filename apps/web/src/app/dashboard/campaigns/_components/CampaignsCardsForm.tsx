"use client";

import { Briefcase, CheckCircle, MapPin, Tag, Users } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Container } from "@/components/common/Container";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategorySelect from "@/components/common/CategorySelect";
import type { Campaign } from "@repo/types";

interface CampaignFormProps {
  form: UseFormReturn<Campaign>;
  children?: React.ReactNode;
}

const CampaignForm = ({ form, children }: CampaignFormProps) => {
  const selectedCategoryId = form.watch("categoryId");
  return (
    <>
      {/* Campaign Details */}
      <Container className="mb-8">
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

      {/* Targeting Options */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-600" />
          Target Recipients *
        </h2>

        <div className="space-y-6">
          {/* Select Category */}
          <div className="border rounded-lg p-6 bg-muted/20">
            <h3 className="font-medium flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5" />
              Send to Contact Category
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Select a category to send the message to all contacts in it.
            </p>

            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose Category *</FormLabel>
                  <FormControl>
                    <CategorySelect
                      value={field.value || ""}
                      onValueChange={field.onChange}
                      placeholder="Select a category..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedCategoryId && (
              <Alert className="mt-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <AlertDescription className="ml-2">
                  All contacts in this category will receive your message.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* OR Divider
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground">Or</span>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Location Targeting (Optional)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Narrow down recipients by location. Leave blank to send to entire category.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Province</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Bagmati" {...field} value={field.value ?? ""} />
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
                      <Input placeholder="e.g. Kathmandu" {...field} value={field.value ?? ""} />
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
                      <Input placeholder="e.g. Kathmandu Metropolitan" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {hasLocationTargeting && (
              <div className="mt-4">
                <Badge variant="secondary" className="text-sm">
                  Targeting users in{" "}
                  {[
                    form.watch("province"),
                    form.watch("district"),
                    form.watch("municipality"),
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </Badge>
              </div>
            )}
          </div> */}

         
        </div>
      </Container>

      {/* Submit Buttons */}
      {children}
    </>
  );
};

export default CampaignForm;