// app/dashboard/campaigns/create/_components/CampaignsCardsForm.tsx
"use client";

import { CheckCircle, Tag, Users } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Container } from "@/components/common/Container";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
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
import { useCategoryRecipientCountQuery } from "@/hooks/queries/categories.query";
import type { Campaign } from "@repo/types";
import { useSMSPriceQuery } from "@/hooks/queries/price.query";

interface CampaignFormProps {
  form: UseFormReturn<Campaign>;
  children?: React.ReactNode;
}

const CampaignForm = ({ form, children }: CampaignFormProps) => {
  const selectedCategoryId = form.watch("categoryId");

  const { data: countData, isLoading: loadingCount } = useCategoryRecipientCountQuery(
    selectedCategoryId
  );

  const { data: priceData } = useSMSPriceQuery();
  const pricePerSms = priceData?.pricePerSmsNPR  || 0.85;

  const recipientCount = countData?.recipientCount || 0;
  const totalCost = recipientCount > 0 ? recipientCount * pricePerSms : 0;

  return (
    <>
      {/* Campaign Details */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
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

      {/* Targeting Options */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-600" />
          Target Recipients *
        </h2>

        <div className="space-y-6">
          {/* Category Selection */}
          <div className="border rounded-xl p-6 bg-card shadow-sm">
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

            {/* Live Preview: Recipient Count & Cost */}
            {selectedCategoryId && (
              <div className="mt-6 pt-6 border-t">
                <div className="space-y-4">
                  {loadingCount ? (
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-48" />
                      <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                  ) : recipientCount > 0 ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Recipients</span>
                        <span className="text-2xl font-bold text-primary">
                          {recipientCount.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Price per Email</span>
                        <span className="font-semibold">Rs. {pricePerSms.toFixed(2)}</span>
                      </div>

                      <div className="flex items-center justify-between py-3 px-4 bg-brand/10 rounded-lg">
                        <span className="font-medium">Total Estimated Cost</span>
                        <span className="text-2xl font-bold text-brand">
                          Rs. {totalCost.toFixed(2)}
                        </span>
                      </div>

                      <Alert className="border-green-200 bg-green-50 dark:bg-green-950/30">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <AlertDescription>
                          All <strong>{recipientCount.toLocaleString()}</strong> contacts in this category will receive your message.
                        </AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <Alert variant="destructive" className="bg-orange-50 border-orange-200">
                      <AlertDescription>
                        No contacts found in this category. Please add contacts first.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>
      </Container>

      {children}
    </>
  );
};

export default CampaignForm;