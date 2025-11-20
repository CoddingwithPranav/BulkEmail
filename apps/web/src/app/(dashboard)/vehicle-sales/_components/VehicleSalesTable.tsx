'use client';

import { DataTable } from '@/components/datatable';
import { Button } from '@/components/ui/button';
import { useResaleQuery } from '@/hooks/queries/resale.query';
import { useDataTable } from '@/hooks/table/use-data-table';
import { DealerResale } from '@/lib/types';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PAGE_SIZE = 10;

const columnHelper = createColumnHelper<DealerResale>();

const useVehicleSalesColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: 'chassisEngine',
        header: 'Chassis / Engine',
        cell: ({ row }) => (
          <div className="text-xs leading-tight text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">Chassis:</span>{' '}
              {row.original.chessisId}
            </div>
            <div>
              <span className="font-medium text-foreground">Engine:</span>{' '}
              {row.original.engineId}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: 'registration',
        header: 'Registration',
        cell: ({ row }) => (
          <div className="flex flex-col text-sm">
            <span className="font-medium">{row.original.registrationNo}</span>
          </div>
        ),
      }),

      columnHelper.accessor('newCus', {
        header: 'Customer',
        cell: ({ getValue }) => {
          const value = getValue();
          if (!value) return null;
          const { cusName, tmNo1 } = value;
          return (
            <div className="text-sm">
              <div className="font-medium">{cusName}</div>
              <div className="text-xs text-muted-foreground">{tmNo1}</div>
            </div>
          );
        },
      }),

      columnHelper.accessor('saleDate', {
        header: 'Sale Date',
        cell: ({ getValue }) => (
          <div className="text-sm">
            {new Date(getValue()).toLocaleDateString('en-US')}
          </div>
        ),
      }),

      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Link href={`/vehicle-sales/${row.original.saleId}`}>
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

const VehicleSalesTable = () => {
  const columns = useVehicleSalesColumns();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  };

  const { data, isLoading } = useResaleQuery(queryObject);

  const { table } = useDataTable({
    data: data?.list ?? [],
    columns,
    count: data?.count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.saleId,
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

export default VehicleSalesTable;
