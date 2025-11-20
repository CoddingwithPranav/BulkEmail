import { Button } from '@/components/ui/button';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
const columnHelper = createColumnHelper<any>();

export const useJobCardTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'jobNo',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Job No</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.jobNo} </div>,
      }),
      columnHelper.display({
        id: 'customer',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Customer</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>{row.original.customer.cusName}</div>
            <div>{row.original.customer.tmNo1}</div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'registrationNo',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Registration Number</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.registrationNumber} </div>,
      }),
      columnHelper.display({
        id: 'vehicle',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Vehicle</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>Eng:{row.original.engineNumber}</div>
            <div>Che:{row.original.chasisNumber}</div>
          </div>
        ),
      }),

      columnHelper.display({
        id: 'jobDate',
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Scheduled Date</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.jobDate} </div>,
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Link href={`/job-cards/${row.original.jobId}`}>
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
