"use client";

import { DataTable } from '@/components/datatable';
import { useDataTable } from '@/hooks/table/use-data-table';
import { createColumnHelper } from '@tanstack/react-table';
import { 
  CreditCard, 
  User, 
  Phone, 
  IndianRupee, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Eye
} from 'lucide-react';
import Link from "next/link";
import { useMemo } from 'react';
import { format } from "date-fns";

// Type based on your User + Payment model (guest users)
export type GuestPayment = {
  id: number;
  guestName: string;
  guestPhone: string;
  amount: number;
  paymentDate: Date;
  status: "pending" | "completed" | "failed";
  paymentMethod: "esewa" | "khalti" | "bank_transfer" | "cash";
  receiptImage?: string;
};

const dummyGuestPayments: GuestPayment[] = [
  { id: 101, guestName: "Ram Bahadur Thapa", guestPhone: "+977 9841234567", amount: 12500, paymentDate: new Date("2025-11-20"), status: "completed", paymentMethod: "esewa" },
  { id: 102, guestName: "Sita Devi Shrestha", guestPhone: "+977 9812345678", amount: 8900, paymentDate: new Date("2025-11-19"), status: "pending", paymentMethod: "khalti" },
  { id: 103, guestName: "Hari Prasad Gurung", guestPhone: "+977 9856789012", amount: 15200, paymentDate: new Date("2025-11-18"), status: "completed", paymentMethod: "bank_transfer" },
  { id: 104, guestName: "Gita Kumari Magar", guestPhone: "+977 9801234567", amount: 6700, paymentDate: new Date("2025-11-17"), status: "failed", paymentMethod: "esewa" },
  { id: 105, guestName: "Krishna Bahadur Lama", guestPhone: "+977 9865432109", amount: 9800, paymentDate: new Date("2025-11-16"), status: "completed", paymentMethod: "cash" },
];

const PAGE_SIZE = 10;
const columnHelper = createColumnHelper<GuestPayment>();

const useGuestPaymentColumns = () => {
  return useMemo(
    () => [
      columnHelper.accessor("guestName", {
        header: "Guest",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-brand" />
            </div>
            <div>
              <div className="font-medium">{row.original.guestName}</div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {row.original.guestPhone}
              </div>
            </div>
          </div>
        ),
      }),

      columnHelper.accessor("amount", {
        header: "Amount",
        cell: ({ row }) => (
          <div className="flex items-center gap-1 font-semibold text-lg">
            <IndianRupee className="w-4 h-4" />
            {row.original.amount.toLocaleString()}
          </div>
        ),
      }),

      columnHelper.accessor("paymentMethod", {
        header: "Method",
        cell: ({ row }) => {
          const method = row.original.paymentMethod;
          const icons = {
            esewa: "E",
            khalti: "K",
            bank_transfer: "Bank",
            cash: "Cash",
          };
          return (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
              <CreditCard className="w-3.5 h-3.5" />
              {method.replace("_", " ").charAt(0).toUpperCase() + method.slice(1).replace("_", " ")}
            </span>
          );
        },
      }),

      columnHelper.accessor("paymentDate", {
        header: "Paid On",
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="font-medium">{format(row.original.paymentDate, "MMM d, yyyy")}</div>
            <div className="text-xs text-muted-foreground">{format(row.original.paymentDate, "h:mm a")}</div>
          </div>
        ),
      }),

      columnHelper.accessor("status", {
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status;
          const config = {
            completed: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30", label: "Paid" },
            pending: { icon: Clock, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900/30", label: "Pending" },
            failed: { icon: XCircle, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30", label: "Failed" },
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

      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Link href={`/dashboard/guest-payments/${row.original.id}`}>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary hover:bg-accent rounded-md transition-colors">
              <Eye className="w-4 h-4" />
              View
            </button>
          </Link>
        ),
      }),
    ],
    []
  );
};

export default function GuestPaymentsTable() {
  const columns = useGuestPaymentColumns();

  const { table } = useDataTable({
    data: dummyGuestPayments,
    columns,
    count: dummyGuestPayments.length,
    pageSize: PAGE_SIZE,
    enablePagination: true,
    getRowId: (row) => row.id.toString(),
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={dummyGuestPayments.length}
      pageSize={PAGE_SIZE}
      isLoading={false}
      search
      pagination
      layout="fit"
      navigateTo={(row) => `/dashboard/guest-payments/${row.original.id}`}
      noRecords={{
        title: "No guest payments yet",
        message: "Payments from temporary users will appear here.",
      }}
    />
  );
}