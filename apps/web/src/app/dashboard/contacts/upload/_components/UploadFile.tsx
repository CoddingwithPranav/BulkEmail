"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import CategorySelect from "@/components/common/CategorySelect";
import {
  useUploadFileMutation,
  useFileStatusQuery,
} from "@/hooks/queries/files.query";
import {
  Loader2,
  CheckCircle,
  XCircle,
  Upload,
  ArrowRight,
} from "lucide-react";
import { queryClient } from "@/lib/query-client";

const formSchema = z.object({
  categoryId: z.string().min(1, "Please select a category"),
});

type FormValues = z.infer<typeof formSchema>;

export default function UploadFile() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFileId, setUploadedFileId] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { categoryId: "" },
  });

  const uploadMutation = useUploadFileMutation();

  const { data: fileStatus, isLoading: statusLoading } =
    useFileStatusQuery(uploadedFileId);

  const ContinueToList = async () => {
    router.push("/dashboard/contacts");
    await queryClient.invalidateQueries({
      queryKey: ["my-contacts"], //It refreshes the contacts list after update
    });
  };

  const onSubmit = async (values: FormValues) => {
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }

    uploadMutation.mutate(
      { file: selectedFile, categoryId: values.categoryId },
      {
        onSuccess: (data) => {
          toast.success("File uploaded! Processing started...");
          setUploadedFileId(data.fileId);
          setSelectedFile(null);
          form.reset();
        },
        onError: (error: any) => {
          toast.error(error?.message || "Upload failed");
        },
      }
    );
  };

  const isUploading = uploadMutation.isPending;
  const isProcessing = fileStatus?.uploadStatus === "PROCESSING";
  const isDone =
    fileStatus?.uploadStatus === "UPLOADED" ||
    fileStatus?.uploadStatus === "FAILED";

  return (
    <div className="mx-auto  p-6">
      <h2 className="text-2xl font-bold mb-6">Upload Contacts</h2>

      {/* Upload Form */}
      {!uploadedFileId && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-card p-6 rounded-lg border"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact Category <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <CategorySelect
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Choose a category..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>
                Select File <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    setSelectedFile(file || null);
                    if (file) toast.success(`Selected: ${file.name}`);
                  }}
                  disabled={isUploading}
                />
              </FormControl>
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>{selectedFile.name}</strong> (
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                Supported: CSV, XLSX
              </p>
            </FormItem>

            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isUploading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="brand"
                disabled={
                  isUploading || !selectedFile || !form.watch("categoryId")
                }
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload File
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}

      {/* Processing Status */}
      {uploadedFileId && !isDone && (
        <div className="mt-8 p-8 bg-card rounded-lg border text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-brand" />
          <h3 className="mt-4 text-lg font-semibold">
            Processing your file...
          </h3>
          <p className="text-muted-foreground mt-2">
            This may take a few seconds. Please wait.
          </p>
          {statusLoading && (
            <p className="text-sm text-muted-foreground mt-4">
              Checking status...
            </p>
          )}
        </div>
      )}

      {/* Success */}
      {fileStatus?.uploadStatus === "UPLOADED" && (
        <div className="mt-8 p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600 dark:text-green-400" />
          <h3 className="mt-4 text-xl font-bold text-green-800 dark:text-green-300">
            Upload Successful!
          </h3>
          <p className="mt-2 text-green-700 dark:text-green-400">
            {fileStatus.numberOfReceivers} contacts added successfully.
          </p>
          <Button
            className="mt-6"
            variant="brand"
            size="lg"
            onClick={() => ContinueToList()}
          >
            Continue to Contacts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Failed */}
      {fileStatus?.uploadStatus === "FAILED" && (
        <div className="mt-8 p-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-600 dark:text-red-400" />
          <h3 className="mt-4 text-xl font-bold text-red-800 dark:text-red-300">
            Upload Failed
          </h3>
          <p className="mt-2 text-red-700 dark:text-red-400">
            Your file contains invalid data and was rejected.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Only files with 100% valid Phone Number are accepted.
          </p>
          <Button
            className="mt-6"
            variant="brand"
            size="lg"
            onClick={() => {
              setUploadedFileId(null);
            }}
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}
