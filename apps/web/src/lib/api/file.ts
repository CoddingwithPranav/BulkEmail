// src/lib/files.ts
import axiosInstance from "@/axios";

export type FileStatus = "PENDING" | "PROCESSING" | "UPLOADED" | "FAILED";

export interface FileRecord {
  id: string;
  name: string;
  type: "CSV" | "XLSX";
  uploadStatus: FileStatus;
  numberOfReceivers: number | null;
  createdAt: string;
  
}

export interface FileUploadResponse {
  fileId: string;
  jobId: string;
  message?: string;
  isGuest?: boolean;
}

// Upload file
export const uploadFile = async (file: File, isGuest = false): Promise<FileUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const endpoint = isGuest ? "/files/upload" : "/files/upload";

  const { data } = await axiosInstance.post<{
    success: true;
    data: FileUploadResponse;
  }>(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data.data; // This is correct
};

// Get file status
export const getFileStatus = async (fileId: string, isGuest = false): Promise<FileRecord> => {
  const endpoint = isGuest
    ? `/files/status/${fileId}`
    : `/files/status/${fileId}`;

  const { data } = await axiosInstance.get<{
    success: true;
    data: { file: FileRecord };
  }>(endpoint);

  return data.data.file;
};

// Get user's files
export const getUserFiles = async (): Promise<FileRecord[]> => {
  const { data } = await axiosInstance.get<{
    success: true;
    data: { files: FileRecord[] };
  }>("/files/list");

  return data.data.files;
};

// Download invalid rows
export const downloadInvalidRows = (
  fileId: string,
  type: "csv" | "xlsx" = "csv",
  isGuest = false
) => {
  const endpoint = isGuest
    ? `/files/invalid/${fileId}?type=${type}`
    : `/files/invalid/${fileId}?type=${type}`;
  window.open(endpoint, "_blank");
};

// Delete file
export const deleteFile = async (fileId: string) => {
  await axiosInstance.delete(`/files/${fileId}`);
};