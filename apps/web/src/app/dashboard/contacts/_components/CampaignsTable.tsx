"use client";

import { DataTable } from "@/components/datatable";
import { useMyContactsQuery } from "@/hooks/queries/myContact.query";
import { useMyContactsTableColumns } from "@/hooks/table/columns/my-contacts-columns";
import { useDataTable } from "@/hooks/table/use-data-table";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const PAGE_SIZE = 15;

const MyContactsTable = () => {
  const searchParams = useSearchParams();

  const queryObject = useMemo(
    () => ({
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: PAGE_SIZE,
      search: searchParams.get("q") || undefined,
      categoryId: searchParams.get("categoryId") || undefined,
    }),
    [searchParams]
  );

  const { data, isLoading } = useMyContactsQuery(queryObject);

  const columns = useMyContactsTableColumns();

  const { table } = useDataTable({
    data: data?.contacts ?? [],
    columns,
    count: data?.pagination?.totalItems ?? 0,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id!,
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

export default MyContactsTable;