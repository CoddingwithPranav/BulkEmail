"use client";

import { CheckCircle, Tag, Users } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Container } from "@/components/common/Container";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CategorySelect from "@/components/common/CategorySelect";
import { useCategoryRecipientCountQuery } from "@/hooks/queries/categories.query";
import type { Campaign } from "@repo/types";
import "react-quill-new/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import dynamic from "next/dynamic";
import { useEmailPriceQuery } from "@/hooks/queries/price.query";

interface CampaignFormProps {
  form: UseFormReturn<Campaign>;
  children?: React.ReactNode;
}

const CampaignForm = ({ form, children }: CampaignFormProps) => {
  const selectedCategoryId = form.watch("categoryId");

  const { data: countData, isLoading: loadingCount } =
    useCategoryRecipientCountQuery(selectedCategoryId);

  const { data: priceData } = useEmailPriceQuery();
  const pricePerEmail = priceData?.pricePerEmailNPR || 0.5; // Adjust default as needed

  const recipientCount = countData?.recipientCount || 0;
  const totalCost = recipientCount > 0 ? recipientCount * pricePerEmail : 0;

  return (
    <>
      {/* Campaign Details */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Campaign Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormItem>
            <FormLabel>Campaign Name *</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g. Dashain Email Offer 2082"
                {...form.register("name")}
              />
            </FormControl>
            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel>Email Subject *</FormLabel>
            <FormControl>
              <Input
                placeholder="e.g. Exclusive Dashain Offer Just for You!"
                {...form.register("subject")}
              />
            </FormControl>
            <FormMessage>{form.formState.errors.subject?.message}</FormMessage>
          </FormItem>

          {/* Email Body with Rich Editor */}
          <FormItem className="md:col-span-2">
            <FormLabel>Email Body *</FormLabel>
            <FormControl>
              <ReactQuill
                theme="snow"
                value={form.watch("emailBody") || ""}
                onChange={(value) => form.setValue("emailBody", value)}
                placeholder="Write your email body here..."
                className="min-h-96"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.emailBody?.message}
            </FormMessage>
          </FormItem>
        </div>
      </Container>

      {/* Targeting Options */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-600" />
          Target Recipients *
        </h2>
        <div className="space-y-6">
          <div className="border rounded-xl p-6 bg-card shadow-sm">
            <h3 className="font-medium flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5" />
              Send to Contact Category
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Select a category to send the email to all contacts in it.
            </p>

            <FormItem>
              <FormLabel>Choose Category *</FormLabel>
              <FormControl>
                <CategorySelect
                  value={form.watch("categoryId") || ""}
                  onValueChange={(value) => form.setValue("categoryId", value)}
                  placeholder="Select a category..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>

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
                        <span className="text-sm text-muted-foreground">
                          Total Recipients
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          {recipientCount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Price per Email
                        </span>
                        <span className="font-semibold">
                          Rs. {pricePerEmail.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-3 px-4 bg-brand/10 rounded-lg">
                        <span className="font-medium">
                          Total Estimated Cost
                        </span>
                        <span className="text-2xl font-bold text-brand">
                          Rs. {totalCost.toFixed(2)}
                        </span>
                      </div>
                      <Alert className="border-green-200 bg-green-50 dark:bg-green-950/30">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <AlertDescription>
                          All{" "}
                          <strong>{recipientCount.toLocaleString()}</strong>{" "}
                          contacts in this category will receive your email.
                        </AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <Alert variant="destructive" className="bg-orange-50 border-orange-200">
                      <AlertDescription>
                        No contacts found in this category. Please add contacts
                        first.
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