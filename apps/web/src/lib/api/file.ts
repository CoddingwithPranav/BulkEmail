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
}

/**
 * Upload a file with category
 * @param file - The CSV/XLSX file
 * @param categoryId - Required category ID for the contacts
 */
export const uploadFile = async (
  file: File,
  categoryId: string
): Promise<FileUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("categoryId", categoryId); // Send categoryId in body

  const { data } = await axiosInstance.post<{
    success: true;
    data: FileUploadResponse;
  }>("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data.data;
};

// Get file status
export const getFileStatus = async (fileId: string): Promise<FileRecord> => {
  const { data } = await axiosInstance.get<{
    success: true;
    data: { file: FileRecord };
  }>(`/files/status/${fileId}`);

  return data.data.file;
};

// Get user's uploaded files
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
  type: "csv" | "xlsx" = "csv"
) => {
  const endpoint = `/files/invalid/${fileId}?type=${type}`;
  window.open(endpoint, "_blank");
};

// Delete uploaded file
export const deleteFile = async (fileId: string) => {
  await axiosInstance.delete(`/files/${fileId}`);
};