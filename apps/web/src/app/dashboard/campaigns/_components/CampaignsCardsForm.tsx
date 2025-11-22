"use client";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Briefcase, Users, FileText, MapPin, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { CreateCampaignInput } from "@/lib/schemas/campaigns.schema";

const CampaignForm = ({
  form,
  children,
}: {
  form: UseFormReturn<CreateCampaignInput>;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "manualReceivers",
  });

  const handleBack = () => {
    router.back();
    form.reset();
  };

  return (
    <>
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-gray-600" /> Campaign Details
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
            name="paymentReceiptImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Receipt Image URL (if prepaid)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://example.com/receipt.jpg"
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

      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-600" /> Location Targeting (Optional)
        </h2>
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

      <Container className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-600" /> Manual Receivers (Optional)
          </h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ phoneNumber: "", firstName: "", lastName: "" })}
          >
            Add Receiver
          </Button>
        </div>

        {fields.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No manual receivers added yet. Add one or use location/file targeting.
          </p>
        )}

        <div className="space-y-4">
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg border bg-card p-5 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           

                <FormField
                  control={form.control}
                  name={`manualReceivers.${index}.firstName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ram" {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`manualReceivers.${index}.lastName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Bahadur" {...field} value={field.value ?? ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-end">
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Actions - put your submit/back buttons here or pass via children */}
      {children}
    </>
  );
};

export default CampaignForm;