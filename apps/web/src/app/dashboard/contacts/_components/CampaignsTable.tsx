"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

import CategorySelect from "@/components/common/CategorySelect";
import { DataTable } from "@/components/datatable";
import { useMyContactsQuery } from "@/hooks/queries/myContact.query";
import { useMyContactsTableColumns } from "@/hooks/table/columns/my-contacts-columns";
import { useDataTable } from "@/hooks/table/use-data-table";

const PAGE_SIZE = 15;

const MyContactsTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current category filter from URL
  const currentCategoryId = searchParams.get("categoryId") ?? "";

  // Build query object for API
  const queryObject = useMemo(
    () => ({
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: PAGE_SIZE,
      search: searchParams.get("q") || undefined,
      categoryId: currentCategoryId || undefined,
    }),
    [searchParams, currentCategoryId]
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

  const updateCategoryFilter = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.delete("page");
    } else {
      params.delete("categoryId");
    }
    router.push(`?${params.toString()}`);
  };

  const clearCategoryFilter = () => {
    updateCategoryFilter("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold p-4">My Contacts</h1>
      </div>

      <DataTable
        table={table}
        columns={columns}
        count={data?.pagination?.totalItems ?? 0}
        pageSize={PAGE_SIZE}
        isLoading={isLoading}
        queryObject={queryObject}
        pagination
        search
        layout="fit"
        
        customFilters={
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <CategorySelect
              value={currentCategoryId}
              onValueChange={updateCategoryFilter}
              placeholder="All Categories"
            />
            {currentCategoryId && (
              <Button
                variant="outline"
                size="icon"
                onClick={clearCategoryFilter}
                className="shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        }
      />
    </div>
  );
};

export default MyContactsTable;