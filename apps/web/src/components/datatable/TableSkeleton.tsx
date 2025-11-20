import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type TableSkeletonProps = {
  rowCount?: number;
  search?: boolean;
  filters?: boolean;
  orderBy?: boolean;
  pagination?: boolean;
  layout?: "fit" | "fill";
};

export const TableSkeleton = ({
  rowCount = 5,
  search = true,
  filters = true,
  orderBy = true,
  pagination = true,
  layout = "fit",
}: TableSkeletonProps) => {
  // Row count + header row
  const totalRowCount = rowCount + 1;

  const rows = Array.from({ length: totalRowCount }, (_, i) => i);
  const hasToolbar = search || filters || orderBy;

  return (
    <div
      aria-hidden
      className={cn({
        "flex h-full flex-col overflow-hidden": layout === "fill",
      })}
    >
      {hasToolbar && (
        <div className="flex items-center justify-between py-4">
          {/* {filters && <Skeleton className="h-7 w-full max-w-[135px]" />} */}
          {(search || orderBy) && (
            <div className="flex items-center gap-x-2">
              {search && <Skeleton className="h-8 w-[260px]" />}
              {/* {orderBy && <Skeleton className="h-7 w-7" />} */}
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col divide-y border-y">
        {rows.map((row) => (
          <Skeleton key={row} className="h-10 w-full rounded-none" />
        ))}
      </div>
      {pagination && <TableFooterSkeleton layout={layout} />}
    </div>
  );
};

export const TableFooterSkeleton = ({ layout }: { layout: "fill" | "fit" }) => {
  return (
    <div
      className={cn("flex items-center justify-between py-4", {
        "border-t": layout === "fill",
      })}
    >
      <Skeleton className="h-7 w-[138px]" />
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-7 w-11" />
        <Skeleton className="h-7 w-11" />
      </div>
    </div>
  );
};
