'use client';

import { DataTable } from '@/components/datatable';
import { useReceiversQuery } from '@/hooks/queries/reveivers.query';
import { useReceiversTableColumns } from '@/hooks/table/columns/use-receivers-table-columns';
import { useDataTable } from '@/hooks/table/use-data-table';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PAGE_SIZE = 10;

const ReceiversTable = () => {
  const columns = useReceiversTableColumns();
  const searchParams = useSearchParams();

  const queryObject = useMemo(() => ({
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  }), [searchParams]);

  const { data, isLoading } = useReceiversQuery(queryObject);

  const { table } = useDataTable({
    data: data?.receivers ?? [],
    columns,
    count: data?.pagination?.totalItems ?? 0, 
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id || "",
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={data?.pagination?.totalItems ?? 0}
      pageSize={PAGE_SIZE}
      isLoading={isLoading}
      queryObject={queryObject}
      pagination
      search
    />
  );
};

export default ReceiversTable;
