'use client';

import { DataTable } from '@/components/datatable';
import { useVehicleSalesQuery } from '@/hooks/queries/vehicle.query';
import useSoldVehicleTableColumn from '@/hooks/table/columns/use-sold-vehicle-table-column';
import { useDataTable } from '@/hooks/table/use-data-table';
import { useSearchParams } from 'next/navigation';

const PAGE_SIZE = 10;

const SoldVehiclesTable = () => {
  const columns = useSoldVehicleTableColumn();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  };

  const { data, isLoading } = useVehicleSalesQuery(queryObject);

  const { table } = useDataTable({
    data: data?.sales ?? [],
    columns,
    count: data?.count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.vehicle.chessisId,
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

export default SoldVehiclesTable;
