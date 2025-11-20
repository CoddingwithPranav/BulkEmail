'use client';

import { ColumnDef } from '@tanstack/react-table';
import { useRouter, useSearchParams } from 'next/navigation';

import { DataTable } from '@/components/datatable';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useVehiclesQuery } from '@/hooks/queries/vehicle.query';
import { useDataTable } from '@/hooks/table/use-data-table';
import { Vehicle } from '@/lib/types/vehicle';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';

const PAGE_SIZE = 10;

const DealerVehiclesTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  };

  const { data, isLoading } = useVehiclesQuery(queryObject);

  const columns: ColumnDef<Vehicle>[] = [
    {
      header: 'Vehicle',
      cell: ({ row }) => {
        const vehicle = row.original;
        return (
          <div className="flex flex-col">
            <span>Engine: {vehicle.engineeId}</span>
            <span>Chassis: {vehicle.chessisId}</span>
          </div>
        );
      },
    },
    {
      header: 'Registration Number',
      cell: ({ row }) => {
        const vehicle = row.original;
        return (
          <div className="flex flex-col">
            <span>Engine: {vehicle.registrationNo}</span>
          </div>
        );
      },
    },
    {
      header: 'Model No',
      accessorKey: 'modelNo',
    },
    {
      header: 'Color',
      accessorKey: 'colorName',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <Badge
            className={cn({
              'bg-green-100 text-green-800': status === 'In Stock',
              'bg-red-100 text-red-800': status === 'Sold',
            })}
            variant="outline"
          >
            {status}
          </Badge>
        );
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => {
        const vehicleId = row.original.chessisId;
        return (
          <Button
            variant="outline"
            onClick={() => router.push(`/customers/vehicles/${vehicleId}`)}
          >
            <EyeIcon className="w-4 h-4 mr-1" /> View
          </Button>
        );
      },
    },
  ];

  const { table } = useDataTable({
    data: data?.vehicles ?? [],
    columns,
    count: data?.count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.chessisId,
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

export default DealerVehiclesTable;
