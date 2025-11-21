"use client";

import { DataTable } from '@/components/datatable';
import { useDataTable } from '@/hooks/table/use-data-table';
import { createColumnHelper } from '@tanstack/react-table';
import { FileText, Users, Upload, Clock, CheckCircle2, AlertCircle, Eye } from 'lucide-react';
import Link from "next/link";
import { useMemo } from 'react';
import { format } from "date-fns";

// Types from your Prisma schema
export type FileWithReceivers = {
  id: number;
  name: string;
  numberOfReceivers: number | null;
  sizeInBytes: bigint;
  type: "CSV" | "XLSX";
  uploadStatus: "PENDING" | "UPLOADED" | "FAILED";
  createdAt: Date;
  updatedAt: Date;
};

// Dummy data (replace with real API later)
const dummyFiles: FileWithReceivers[] = [
  {
    id: 1,
    name: "diwali_customers_2025.csv",
    numberOfReceivers: 2847,
    sizeInBytes: BigInt(245760),
    type: "CSV",
    uploadStatus: "UPLOADED",
    createdAt: new Date("2025-11-01"),
    updatedAt: new Date("2025-11-01"),
  },
  {
    id: 2,
    name: "kathmandu_service_list.xlsx",
    numberOfReceivers: 1890,
    sizeInBytes: BigInt(512000),
    type: "XLSX",
    uploadStatus: "UPLOADED",
    createdAt: new Date("2025-10-28"),
    updatedAt: new Date("2025-10-28"),
  },
  {
    id: 3,
    name: "pokhara_premium_clients.csv",
    numberOfReceivers: null,
    sizeInBytes: BigInt(89000),
    type: "CSV",
    uploadStatus: "PENDING",
    createdAt: new Date("2025-11-19"),
    updatedAt: new Date("2025-11-19"),
  },
  {
    id: 4,
    name: "biratnagar_failed_upload.xlsx",
    numberOfReceivers: null,
    sizeInBytes: BigInt(120000),
    type: "XLSX",
    uploadStatus: "FAILED",
    createdAt: new Date("2025-11-15"),
    updatedAt: new Date("2025-11-15"),
  },
];

const PAGE_SIZE = 10;
const columnHelper = createColumnHelper<FileWithReceivers>();

const useReceiverListColumns = () => {
  return useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "File Name",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand/10 rounded-lg">
              <FileText className="w-5 h-5 text-brand" />
            </div>
            <div>
              <div className="font-medium text-foreground">{row.original.name}</div>
              <div className="text-xs text-muted-foreground">
                {row.original.type} • {(Number(row.original.sizeInBytes) / 1024).toFixed(1)} KB
              </div>
            </div>
          </div>
        ),
      }),

      columnHelper.accessor("numberOfReceivers", {
        header: "Receivers",
        cell: ({ row }) => {
          const count = row.original.numberOfReceivers;
          return count ? (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{count.toLocaleString()}</span>
            </div>
          ) : (
            <span className="text-muted-foreground text-sm">Processing...</span>
          );
        },
      }),

      columnHelper.accessor("uploadStatus", {
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.uploadStatus;
          const config = {
            UPLOADED: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", label: "Uploaded" },
            PENDING: { icon: Clock, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30", label: "Processing" },
            FAILED: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30", label: "Failed" },
          }[status];

          const Icon = config.icon;
          return (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full ${config.bg} ${config.color}`}>
              <Icon className="w-3.5 h-3.5" />
              {config.label}
            </span>
          );
        },
      }),

      columnHelper.accessor("createdAt", {
        header: "Uploaded On",
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="font-medium">{format(row.original.createdAt, "MMM d, yyyy")}</div>
            <div className="text-xs text-muted-foreground">{format(row.original.createdAt, "h:mm a")}</div>
          </div>
        ),
      }),

      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            {row.original.uploadStatus === "UPLOADED" && (
              <Link href={`/dashboard/receiver-list/${row.original.id}`}>
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-accent rounded-md transition-colors">
                  <Eye className="w-4 h-4" />
                  View List
                </button>
              </Link>
            )}
            {row.original.uploadStatus === "PENDING" && (
              <span className="text-xs text-muted-foreground">Processing...</span>
            )}
            {row.original.uploadStatus === "FAILED" && (
              <button className="text-xs text-red-600 font-medium">Retry</button>
            )}
          </div>
        ),
      }),
    ],
    []
  );
};

export default function ReceiverListTable() {
  const columns = useReceiverListColumns();

  const { table } = useDataTable({
    data: dummyFiles,
    columns,
    count: dummyFiles.length,
    pageSize: PAGE_SIZE,
    enablePagination: true,
    getRowId: (row) => row.id.toString(),
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={dummyFiles.length}
      pageSize={PAGE_SIZE}
      isLoading={false}
      search
      pagination
      layout="fit"
      noRecords={{
        title: "No receiver lists yet",
        message: "Upload your first contact list to send SMS campaigns.",
      }}
    />
  );
}