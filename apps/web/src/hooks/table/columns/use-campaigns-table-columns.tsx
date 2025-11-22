import { Button } from '@/components/ui/button';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
const columnHelper = createColumnHelper<any>();


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

export const useCampaignsTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'No',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>No</span>
          </div>
        ),  
        cell: ({ row }) => <div>{row.original.no} </div>,
      }),
      columnHelper.display({
        id: 'name',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Name</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>{row.original.name}</div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'type',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Type</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.type} </div>,
      }),
      columnHelper.display({
        id: 'recipients',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Recipients</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>{row.original.recipients}</div>
          </div>
        ),
      }),

      columnHelper.display({
        id: 'sentDate',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Sent Date</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.sentDate} </div>,
      }),
      columnHelper.display({
        id: 'budget',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Budget</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.sentDate} </div>,
      }),
      columnHelper.display({
        id: 'status',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Status</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.status} </div>,
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Link href={`/dashboard/campaigns/${row.original.id}`}>
            <Button variant="outline" size="sm" className="text-xs px-2 py-1">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </Link>
        ),
      }),
    ],
    []
  );
};
