// src/lib/query/files.query.ts
import { uploadFile, getFileStatus, getUserFiles, deleteFile, FileRecord } from "@/lib/api/file";
import { QueryFunctionContext, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useUploadFileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, isGuest }: { file: File; isGuest?: boolean }) =>
      uploadFile(file, isGuest),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};

export const useFileStatusQuery = (fileId: string | null, isGuest = false) => {
  return useQuery<FileRecord>({
    queryKey: ["file", fileId, { isGuest }],
    queryFn: () => {
      if (!fileId) throw new Error("fileId is required");
      return getFileStatus(fileId, isGuest);
    },
    enabled: !!fileId,
    refetchInterval: (query) => {
      const data = query.state.data as FileRecord | undefined;
      return data?.uploadStatus === "PROCESSING" ? 2000 : false;
    },
    retry: 1,
  });
};
export const useUserFilesQuery = () => {
  return useQuery({
    queryKey: ["files"],
    queryFn: getUserFiles,
  });
};

export const useDeleteFileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};