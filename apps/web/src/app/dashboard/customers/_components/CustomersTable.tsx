'use client';

import { DataTable } from '@/components/datatable';
import { Button } from '@/components/ui/button';
import { useCustomerQuery } from '@/hooks/queries/customer.query';
import { useDataTable } from '@/hooks/table/use-data-table';
import { Customer } from '@/lib/types';
import { createColumnHelper } from '@tanstack/react-table';
import { EyeIcon, MapPin, MapPinHouse, Phone } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PAGE_SIZE = 10;

const columnHelper = createColumnHelper<Customer>();

const useCustomerTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'cusName',
        header: 'Customer',
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="font-medium text-foreground">
              {row.original.cusName}
            </div>
            <div className="text-xs text-muted-foreground">
              {row.original.cusCode}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'tmNo1',
        header: 'Contact',
        cell: ({ row }) => (
          <div className="flex flex-col text-sm gap-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-xs">{row.original.tmNo1}</span>
            </div>
            {/* <div className="flex items-center gap-1 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span className="text-xs">{row.original.tmNo2}</span>
            </div> */}
          </div>
        ),
      }),
      columnHelper.display({
        id: 'panNo',
        header: 'Pan No',
        cell: ({ row }) => (
          <div className="flex flex-col text-sm gap-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPinHouse className="w-4 h-4 text-blue-500" />
              <span className="text-xs">{row.original.panNo}</span>
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'pofficeAddress',
        header: 'Address',
        cell: ({ row }) => (
          <div className="flex flex-col text-sm gap-1">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="text-xs">{row.original.pofficeAddress}</span>
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Link href={`/customers/${row.original.cusCode}`}>
            <Button variant="outline" size="sm" className="text-xs px-2 py-1">
              <EyeIcon className="w-4 h-4 mr-1" /> View
            </Button>
          </Link>
        ),
      }),
    ],
    []
  );
};

const CustomerTable = () => {
  const columns = useCustomerTableColumns();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  };

  const { data, isLoading } = useCustomerQuery(queryObject);
  console.log('Customer Data:', data);

  const { table } = useDataTable({
    data: data?.customers ?? [],
    columns,
    count: data?.count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.cusCode,
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={data?.count ?? 0}
      pageSize={PAGE_SIZE}
      isLoading={isLoading}
      queryObject={queryObject}
      pagination
      search
    />
  );
};

export default CustomerTable;
