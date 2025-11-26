"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Upload,
  Download,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import { useFileStatusQuery, useUploadFileMutation } from "@/hooks/queries/files.query";


interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  isGuest?: boolean;
  onSuccess?: (fileId: string, validCount: number) => void;
}

const TEMPLATE_URL = "/templates/receivers-template.xlsx";

export default function FileUploadModal({
  isOpen,
  onClose,
  isGuest = false,
  onSuccess,
}: FileUploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedFileId, setUploadedFileId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadMutation = useUploadFileMutation();
  const { data: fileStatus, isLoading: statusLoading } = useFileStatusQuery(
    uploadedFileId,
    isGuest
  );

  const isUploading = uploadMutation.isPending;
  const isProcessing = statusLoading || fileStatus?.uploadStatus === "PROCESSING";
  const isCompleted = fileStatus?.uploadStatus === "UPLOADED";
  const isFailed = uploadMutation.isError || fileStatus?.uploadStatus === "FAILED";


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    const ext = selected.name.toLowerCase();
    if (!ext.match(/\.(csv|xlsx|xls)$/)) {
      toast.error("Invalid file type", {
        description: "Only CSV and Excel files are allowed",
      });
      return;
    }
    setFile(selected);
  };

  const uploadFile = () => {
    if (!file) return;

    uploadMutation.mutate(
      { file, isGuest },
      {
        onSuccess: (data) => {
          setUploadedFileId(data.fileId);
          toast.success("File uploaded!", {
            description: "Processing contacts...",
          });
        },
        onError: () => {
          toast.error("Upload failed");
        },
      }
    );
  };

  // This is the key fix: only call onSuccess once, then close
  const handleSuccessAndClose = useCallback(() => {
    if (uploadedFileId && fileStatus?.numberOfReceivers != null) {
      onSuccess?.(uploadedFileId, fileStatus.numberOfReceivers);
    }
    onClose();
  }, [uploadedFileId, fileStatus?.numberOfReceivers, onSuccess, onClose]);

  // Auto-close only ONCE when success is confirmed
  useEffect(() => {
    if (isCompleted && uploadedFileId) {
      const timer = setTimeout(handleSuccessAndClose, 1200);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, uploadedFileId, handleSuccessAndClose]);

  const handleClose = () => {
    if (isUploading || isProcessing) {
      toast("Please wait", { description: "File is still being processed" });
      return;
    }
    if (isCompleted) {
      handleSuccessAndClose();
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Upload Recipients List</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Template */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 bg-muted/20">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Download Template</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Use our template for perfect results
            </p>
            <Button asChild>
              <a href={TEMPLATE_URL} download>
                <Download className="mr-2 h-4 w-4" />
                Download (.xlsx)
              </a>
            </Button>
          </div>

          {/* Upload Area */}
          <div className="space-y-6">
            {/* Step 1: Choose file */}
            {!uploadedFileId ? (
              <>
                <div
                  className="border-2 border-dashed rounded-lg p-10 text-center cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm font-medium">
                    {file ? file.name : "Drop CSV/Excel file here"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    or click to browse
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {file && (
                  <div className="flex gap-3">
                    <Button onClick={uploadFile} disabled={isUploading} className="flex-1">
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
                    <Button variant="outline" onClick={() => setFile(null)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Step 2: Processing / Success */}
                {(isUploading || isProcessing) && (
                  <div className="text-center space-y-4">
                    <p className="text-sm">
                      {isUploading ? "Uploading file..." : "Processing contacts..."}
                    </p>
                    <Progress value={isUploading ? 40 : 75} />
                  </div>
                )}

                {isCompleted && fileStatus && (
                  <div className="text-center space-y-6 animate-in fade-in duration-500">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-2xl font-bold">Ready to Send!</h3>
                    <p className="text-3xl font-bold text-green-600">
                      {fileStatus.numberOfReceivers?.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground">valid contacts loaded</p>
                  </div>
                )}

                {isFailed && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Processing failed. Please check your file and try again.
                    </AlertDescription>
                  </Alert>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}