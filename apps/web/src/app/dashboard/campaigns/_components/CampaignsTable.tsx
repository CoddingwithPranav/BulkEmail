"use client";

import { DataTable } from '@/components/datatable';
import { useDataTable } from '@/hooks/table/use-data-table';
import { createColumnHelper } from '@tanstack/react-table';
import {
  Megaphone,
  Users,
  IndianRupee,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
} from 'lucide-react';
import Link from "next/link";
import { useMemo } from 'react';

// Campaign type
export type Campaign = {
  id: string;
  name: string;
  type: string;
  recipients: number;
  sentDate: string | null;
  budget: number;
  conversions: number;
  status: "completed" | "sent" | "scheduled";
};

// Dummy data
const dummyCampaigns: Campaign[] = [
  { id: "camp-001", name: "Diwali Super Sale 2025", type: "SMS", recipients: 2847, sentDate: "2025-11-10", budget: 45000, conversions: 189, status: "completed" },
  { id: "camp-002", name: "Service Reminder Batch", type: "WhatsApp", recipients: 1200, sentDate: "2025-11-18", budget: 8000, conversions: 412, status: "sent" },
  { id: "camp-003", name: "New Year Exclusive Offer", type: "Email + SMS", recipients: 5200, sentDate: null, budget: 120000, conversions: 0, status: "scheduled" },
  { id: "camp-004", name: "Monsoon Service Camp", type: "SMS", recipients: 890, sentDate: "2025-07-15", budget: 25000, conversions: 67, status: "completed" },
  { id: "camp-005", name: "Customer Loyalty Program", type: "WhatsApp", recipients: 3200, sentDate: "2025-11-20", budget: 35000, conversions: 298, status: "sent" },
];

const PAGE_SIZE = 10;
const columnHelper = createColumnHelper<Campaign>();

const useCampaignColumns = () => {
  return useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Campaign",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand/10 rounded-lg">
              <Megaphone className="w-5 h-5 text-brand" />
            </div>
            <div>
              <div className="font-medium text-foreground">{row.original.name}</div>
              <div className="text-xs text-muted-foreground">ID: {row.original.id}</div>
            </div>
          </div>
        ),
      }),

      columnHelper.accessor("type", {
        header: "Channel",
        cell: ({ row }) => (
          <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {row.original.type}
          </span>
        ),
      }),

      columnHelper.accessor("recipients", {
        header: "Recipients",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{row.original.recipients.toLocaleString()}</span>
          </div>
        ),
      }),

      columnHelper.accessor("budget", {
        header: "Budget",
        cell: ({ row }) => (
          <div className="flex items-center gap-1 font-medium">
            <IndianRupee className="w-4 h-4" />
            {row.original.budget.toLocaleString()}
          </div>
        ),
      }),

      columnHelper.accessor("conversions", {
        header: "Conversions",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <TrendingUp className={`w-4 h-4 ${row.original.conversions > 200 ? 'text-green-600' : 'text-orange-600'}`} />
            <span className="font-semibold">{row.original.conversions}</span>
          </div>
        ),
      }),

      columnHelper.accessor("status", {
        header: "Status",
        cell: ({ row }) => {
          const status = row.original.status;
          const config = {
            completed: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
            sent: { icon: Clock, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
            scheduled: { icon: AlertCircle, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
          }[status];

          const Icon = config.icon;
          return (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full ${config.bg} ${config.color}`}>
              <Icon className="w-3.5 h-3.5" />
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          );
        },
      }),

      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <Link href={`/dashboard/campaigns/${row.original.id}`}>
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

export default function CampaignsTable() {
  const columns = useCampaignColumns();

  const { table } = useDataTable({
    data: dummyCampaigns,
    columns,
    count: dummyCampaigns.length,
    pageSize: PAGE_SIZE,
    enablePagination: true,
    getRowId: (row) => row.id,
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={dummyCampaigns.length}
      pageSize={PAGE_SIZE}
      isLoading={false}
      search
      pagination
      layout="fit"
      navigateTo={(row) => `/dashboard/campaigns/${row.original.id}`}
      noRecords={{
        title: "No campaigns found",
        message: "Create your first campaign to get started.",
      }}
    />
  );
}