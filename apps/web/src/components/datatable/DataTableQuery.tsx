/* eslint-disable @typescript-eslint/no-explicit-any */

import { DataTableSearch } from "./DataTableSearch";

export interface DataTableQueryProps {
  search?: boolean | "autofocus";
  orderBy?: any[];
  filters?: any[];
  prefix?: string;
}

export const DataTableQuery: React.FC<DataTableQueryProps> = ({
  search,
  prefix,
  orderBy,
  filters,
}) => {
  return (
    (search || orderBy || filters || prefix) && (
      <div className="flex items-start justify-between gap-x-4 mt-4">
        <div className="flex shrink-0 flex-1 items-center gap-x-2">
          {search && (
            <DataTableSearch
              prefix={prefix}
              autofocus={search === "autofocus"}
            />
          )}
        </div>
      </div>
    )
  );
};
