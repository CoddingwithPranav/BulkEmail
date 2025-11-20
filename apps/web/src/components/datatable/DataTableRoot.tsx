/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  Table as ReactTable,
  Row,
  flexRender,
} from "@tanstack/react-table";
import Link from "next/link";
import { UIEvent, useEffect, useRef, useState } from "react";
import { NoResults } from "./NoResult";

type BulkCommand = {
  label: string;
  shortcut: string;
  action: (selection: Record<string, boolean>) => Promise<void>;
};

export interface DataTableRootProps<TData> {
  table: ReactTable<TData>;

  columns: ColumnDef<TData, any>[];

  navigateTo?: (row: Row<TData>) => string;

  commands?: BulkCommand[];

  count?: number;

  pagination?: boolean;

  noResults?: boolean;

  noHeader?: boolean;

  layout?: "fill" | "fit";
}

export const DataTableRoot = <TData,>({
  table,
  columns,
  pagination,
  navigateTo,
  commands,
  count = 0,
  noResults = false,
  noHeader = false,
  layout = "fit",
}: DataTableRootProps<TData>) => {
  const [showStickyBorder, setShowStickyBorder] = useState(false);

  const scrollableRef = useRef<HTMLDivElement>(null);

  const hasSelect = columns.find((c) => c.id === "select");
  const hasActions = columns.find((c) => c.id === "actions");
  const hasCommandBar = commands && commands.length > 0;

  //   const rowSelection = table.getState().rowSelection;
  const { pageIndex, pageSize } = table.getState().pagination;

  const colCount = columns.length - (hasSelect ? 1 : 0) - (hasActions ? 1 : 0);
  const colWidth = 100 / colCount;

  const handleHorizontalScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;

    if (scrollLeft > 0) {
      setShowStickyBorder(true);
    } else {
      setShowStickyBorder(false);
    }
  };

  //   const handleAction = async (action: BulkCommand["action"]) => {
  //     await action(rowSelection).then(() => {
  //       table.resetRowSelection();
  //     });
  //   };

  useEffect(() => {
    scrollableRef.current?.scroll({ top: 0, left: 0 });
  }, [pageIndex]);

  return (
    <div
      className={cn("flex w-full flex-col overflow-hidden", {
        "flex flex-1 flex-col": layout === "fill",
      })}
    >
      <div
        ref={scrollableRef}
        onScroll={handleHorizontalScroll}
        className={cn("w-full", {
          "min-h-0 flex-grow overflow-auto": layout === "fill",
          "overflow-x-auto": layout === "fit",
        })}
      >
        {!noResults ? (
          <Table className="relative w-full">
            {!noHeader && (
              <TableHeader className="border-t-0 bg-accent">
                {table.getHeaderGroups().map((headerGroup) => {
                  return (
                    <TableRow
                      key={headerGroup.id}
                      className={cn({
                        "relative border-b-0 [&_th:last-of-type]:w-[1%] [&_th:last-of-type]:whitespace-nowrap":
                          hasActions,
                        "[&_th:first-of-type]:w-[1%] [&_th:first-of-type]:whitespace-nowrap":
                          hasSelect,
                      })}
                    >
                      {headerGroup.headers.map((header, index) => {
                        const isActionHeader = header.id === "actions";
                        const isSelectHeader = header.id === "select";
                        const isSpecialHeader =
                          isActionHeader || isSelectHeader;

                        const firstHeader = headerGroup.headers.findIndex(
                          (h) => h.id !== "select"
                        );
                        const isFirstHeader =
                          firstHeader !== -1
                            ? header.id === headerGroup.headers[firstHeader].id
                            : index === 0;

                        const isStickyHeader = isSelectHeader || isFirstHeader;

                        return (
                          <TableHead
                            data-table-header-id={header.id}
                            key={header.id}
                            style={{
                              width: !isSpecialHeader
                                ? `${colWidth}%`
                                : undefined,
                            }}
                            className={cn({
                              "bg-accent sticky left-0 after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-transparent after:content-['']":
                                isStickyHeader,
                              "left-[68px]":
                                isStickyHeader && hasSelect && !isSelectHeader,
                              "after:bg-border":
                                showStickyBorder &&
                                isStickyHeader &&
                                !isSpecialHeader,
                            })}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableHeader>
            )}
            <TableBody>
              {table.getRowModel().rows.map((row) => {
                const to = navigateTo ? navigateTo(row) : undefined;
                const isRowDisabled = hasSelect && !row.getCanSelect();

                const isOdd = row.depth % 2 !== 0;

                const cells = row.getVisibleCells();

                return (
                  <TableRow
                    key={row.id}
                    data-selected={row.getIsSelected()}
                    className={cn(
                      "transition-colors group/row group relative [&_td:last-of-type]:w-[1%] [&_td:last-of-type]:whitespace-nowrap",
                      "has-[[data-row-link]:focus-visible]:bg-accent/20",
                      {
                        "bg-transparent hover:bg-transparent-hover": isOdd,
                        "cursor-pointer": !!to,
                        "bg-accent hover:bg-accent-hover": row.getIsSelected(),
                        "!bg-muted !hover:bg-muted": isRowDisabled,
                      }
                    )}
                  >
                    {cells.map((cell, index) => {
                      const visibleCells = row.getVisibleCells();
                      const isSelectCell = cell.column.id === "select";

                      const firstCell = visibleCells.findIndex(
                        (h) => h.column.id !== "select"
                      );
                      const isFirstCell =
                        firstCell !== -1
                          ? cell.column.id === visibleCells[firstCell].column.id
                          : index === 0;

                      const isStickyCell = isSelectCell || isFirstCell;

                      /**
                       * If the table has nested rows, we need to offset the cell padding
                       * to indicate the depth of the row.
                       */
                      const depthOffset =
                        row.depth > 0 && isFirstCell
                          ? row.depth * 14 + 24
                          : undefined;

                      const hasLeftOffset =
                        isStickyCell && hasSelect && !isSelectCell;

                      const Inner = flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      );

                      const isTabableLink = isFirstCell && !!to;
                      const shouldRenderAsLink = !!to && !isSelectCell;

                      return (
                        <TableCell
                          key={cell.id}
                          className={cn({
                            "!pl-0 !pr-0": shouldRenderAsLink,
                            "bg-muted transition-colors sticky left-0 group  group-hover/row:hover:bg-muted":
                              isStickyCell,
                            "bg-transparent group-hover/row:hover:bg-gray-50":
                              isStickyCell && isOdd,
                            "left-[68px]": hasLeftOffset,
                            "after:absolute after:inset-y-0 after:right-0 after:h-full after:w-px after:bg-gray-200 after:content-['']":
                              showStickyBorder && isStickyCell && !isSelectCell,
                            "!bg-gray-200 !hover:bg-gray-200": isRowDisabled,
                            "group-has-[[data-row-link]:focus-visible]:bg-gray-100":
                              isStickyCell,
                          })}
                          style={{
                            paddingLeft: depthOffset
                              ? `${depthOffset}px`
                              : undefined,
                          }}
                        >
                          {shouldRenderAsLink ? (
                            <Link
                              href={to}
                              className="size-full outline-none"
                              data-row-link
                              tabIndex={isTabableLink ? 0 : -1}
                            >
                              <div
                                className={cn(
                                  "flex size-full items-center pr-6",
                                  {
                                    "pl-6": isTabableLink && !hasLeftOffset,
                                  }
                                )}
                              >
                                {Inner}
                              </div>
                            </Link>
                          ) : (
                            Inner
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <div className={cn({ "border-b": layout === "fit" })}>
            <NoResults />
          </div>
        )}
      </div>
      {pagination && (
        <div className={cn({ "border-t": layout === "fill" })}>
          <Pagination
            canNextPage={table.getCanNextPage()}
            canPreviousPage={table.getCanPreviousPage()}
            nextPage={table.nextPage}
            previousPage={table.previousPage}
            count={count}
            pageIndex={pageIndex}
            pageCount={table.getPageCount()}
            pageSize={pageSize}
          />
        </div>
      )}
      {hasCommandBar && <></>}
    </div>
  );
};

type PaginationProps = {
  canNextPage: boolean;
  canPreviousPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
  count: number;
  pageIndex: number;
  pageCount: number;
  pageSize: number;
};

const Pagination = ({
  canNextPage,
  canPreviousPage,
  nextPage,
  previousPage,
  count,
  pageIndex,
  pageCount,
  pageSize,
}: PaginationProps) => {
  const translations = {
    of: "of",
    results: "results",
    pages: "pages",
    prev: "Prev",
    next: "Next",
  };

  const start = count === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, count);

  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground px-4 py-3 border-t">
      <div>
        {start} — {end} {translations.of} {count} {translations.results}
      </div>

      <div className="flex items-center gap-4">
        <span>
          {pageIndex + 1} {translations.of} {pageCount} {translations.pages}
        </span>

        <button
          className={cn("text-primary", {
            "opacity-50 cursor-not-allowed": !canPreviousPage,
          })}
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {translations.prev}
        </button>

        <button
          className={cn("text-primary", {
            "opacity-50 cursor-not-allowed": !canNextPage,
          })}
          onClick={nextPage}
          disabled={!canNextPage}
        >
          {translations.next}
        </button>
      </div>
    </div>
  );
};
