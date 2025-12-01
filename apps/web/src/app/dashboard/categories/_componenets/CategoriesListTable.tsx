'use client';

import { DataTable } from '@/components/datatable';
import { useCategoriesQuery } from '@/hooks/queries/categories.query';
import { useCategoriesTableColumns } from '@/hooks/table/columns/use-categories-table-columns';
import { useDataTable } from '@/hooks/table/use-data-table';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PAGE_SIZE = 10;

const CategoriesTable = () => {
  const columns = useCategoriesTableColumns();
  const searchParams = useSearchParams();

  const queryObject = useMemo(() => ({
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  }), [searchParams]);

  const { data, isLoading } = useCategoriesQuery(queryObject);

  const { table } = useDataTable({
    data: data?.categories ?? [],
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

export default CategoriesTable;
