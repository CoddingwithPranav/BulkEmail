/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { cn } from '@/lib/utils';
import isEqual from 'lodash/isEqual';
import { memo } from 'react';
import { DataTableQuery, DataTableQueryProps } from './DataTableQuery';
import { DataTableRoot, DataTableRootProps } from './DataTableRoot';
import { NoRecords, NoResultsProps } from './NoResult';
import { TableSkeleton } from './TableSkeleton';

type DataTableProps<T> = DataTableRootProps<T> &
  DataTableQueryProps & {
    isLoading?: boolean;
    pageSize: number;
    queryObject?: Record<string, any>;
    noRecords?: Pick<NoResultsProps, 'title' | 'message'>;
  };

const MemoizedDataTableQuery = memo(DataTableQuery);

export function DataTable<T>({
  table,
  columns,
  pagination,
  navigateTo,
  commands,
  count = 0,
  search = false,
  orderBy,
  filters,
  prefix,
  queryObject = {},
  pageSize,
  isLoading = false,
  noHeader = false,
  layout = 'fit',
  noRecords: noRecordsProps = {},
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <TableSkeleton
        layout={layout}
        rowCount={pageSize}
        search={!!search}
        filters={!!filters?.length}
        orderBy={!!orderBy?.length}
        pagination={!!pagination}
      />
    );
  }

  const defaultQueryObject = {
    q: undefined,
    page: 1,
    limit: pageSize,
  };
  const noQuery =
    isEqual(queryObject, defaultQueryObject) ||
    Object.values(queryObject).filter((v) => Boolean(v)).length === 0;
  const noResults = !isLoading && count === 0 && !noQuery;
  const noRecords = !isLoading && count === 0 && noQuery;

  if (noRecords) {
    return (
      <NoRecords
        className={cn({
          'flex h-full flex-col overflow-hidden': layout === 'fill',
        })}
        {...noRecordsProps}
      />
    );
  }

  return (
    <div
      className={cn('space-y-4', {
        'flex h-full flex-col overflow-hidden': layout === 'fill',
      })}
    >
      <div className="px-4">
        <MemoizedDataTableQuery
          search={search}
          orderBy={orderBy}
          filters={filters}
          prefix={prefix}
        />
      </div>
      <DataTableRoot
        table={table}
        count={count}
        columns={columns}
        pagination
        navigateTo={navigateTo}
        commands={commands}
        noResults={noResults}
        noHeader={noHeader}
        layout={layout}
      />
    </div>
  );
}
