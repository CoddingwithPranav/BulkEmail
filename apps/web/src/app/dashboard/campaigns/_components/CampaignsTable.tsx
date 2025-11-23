'use client';

import { DataTable } from '@/components/datatable';
import { useCampaignsQuery } from '@/hooks/queries/campaigns.query';
import { useCampaignsTableColumns } from '@/hooks/table/columns';
import { useDataTable } from '@/hooks/table/use-data-table';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const PAGE_SIZE = 10;


const CampaignsTable = () => {
  const columns = useCampaignsTableColumns();
  const searchParams = useSearchParams();

  const queryObject = useMemo(() => ({
    q: searchParams.get('q') || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
  }), [searchParams]);

  const { data, isLoading } = useCampaignsQuery(queryObject);
  const { table } = useDataTable({
    data: data?.campaigns ?? [],
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

export default CampaignsTable;

