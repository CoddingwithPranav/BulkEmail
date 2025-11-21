"use client";

import { DataTable } from "@/components/datatable";
import { useServiceRequestsQuery } from "@/hooks/queries/servicerequests.query";
import useServiceRequestsTableColumns from "@/hooks/table/columns/use-service-table-columns";
import { useDataTable } from "@/hooks/table/use-data-table";
import { useSearchParams } from "next/navigation";

const PAGE_SIZE = 10;

const ServiceRequestsTable = () => {
  const columns = useServiceRequestsTableColumns();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get("q") || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
  };

  const { data, isLoading } = useServiceRequestsQuery(queryObject);

  const { table } = useDataTable({
    data: data?.requests ?? [],
    columns,
    count: data?.count,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.jobId,
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

export default ServiceRequestsTable;
