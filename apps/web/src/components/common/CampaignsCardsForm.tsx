"use client";

import { Briefcase, CheckCircle, MapPin, Upload, Users, X } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { Container } from "@/components/common/Container";
import FileUploadModal from "@/components/common/FileUploadModal";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import type { Campaign } from "@repo/types";

interface CampaignFormProps {
  form: UseFormReturn<Campaign>;
  children?: React.ReactNode;
  isGuest?: boolean;
}

const CampaignForm = ({
  form,
  children,
  isGuest = false,
}: CampaignFormProps) => {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedFileInfo, setSelectedFileInfo] = useState<{
    fileId: string;
    validCount: number;
    name?: string;
  } | null>(null);

  const handleFileSuccess = (fileId: string, validCount: number) => {
    setSelectedFileInfo({ fileId, validCount });
    // Set values in react-hook-form
    form.setValue("fileId", fileId as any); // Zod expects number? We'll fix schema later
    form.setValue("recipientsNumber", validCount);
    setUploadModalOpen(false);
  };

  const removeSelectedFile = () => {
    setSelectedFileInfo(null);
    form.setValue("fileId", undefined);
    form.setValue("recipientsNumber", undefined);
  };

  const hasLocationTargeting =
    !!form.watch("province") ||
    !!form.watch("district") ||
    !!form.watch("municipality");

  const hasReceivers = selectedFileInfo || hasLocationTargeting;

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

      {/* Targeting Options */}
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-600" />
          Target Recipients *
        </h2>

        <div className="space-y-6">
          {/* Option 1: Upload File */}
          <div className="border rounded-lg p-6 bg-muted/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium">Upload Recipients List</h3>
                <p className="text-sm text-muted-foreground">
                  Upload CSV or Excel file with phone numbers
                </p>
              </div>
              <Button onClick={() => setUploadModalOpen(true)} size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </div>

            {selectedFileInfo && (
              <Alert className="mt-4 border-green-200 bg-green-50 dark:bg-green-950/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <AlertDescription className="font-medium">
                        {selectedFileInfo.validCount.toLocaleString()} valid
                        recipients loaded
                      </AlertDescription>
                      <p className="text-xs text-muted-foreground mt-1">
                        Ready to send • File ID:{" "}
                        {selectedFileInfo.fileId.slice(0, 8)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeSelectedFile}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </Alert>
            )}
          </div>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or target by location
              </span>
            </div>
          </div>

          {/* Option 2: Location Targeting */}
          <div className="border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-600" />
              Location Targeting (Optional)
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Leave blank to send to all users, or specify location to target
              specific areas.
            </p>

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

            {hasLocationTargeting && (
              <div className="mt-4">
                <Badge variant="secondary">
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
          </div>

          {/* Validation Alert */}
          {!hasReceivers && (
            <Alert variant="destructive">
              <AlertDescription>
                You must either upload a recipients file or specify a location
                to target.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </Container>

      {/* Submit Buttons */}
      {children}

      {/* File Upload Modal */}
      <FileUploadModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        isGuest={isGuest}
        onSuccess={handleFileSuccess}
      />
    </>
  );
};

export default CampaignForm;
