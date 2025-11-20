"use client";

import { DataTable } from "@/components/datatable";
import { Button } from "@/components/ui/button";
import { useDataTable } from "@/hooks/table/use-data-table";
import { createColumnHelper } from "@tanstack/react-table";
import { Building2, Edit, Eye, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const PAGE_SIZE = 10;

const DEALERS_DATA = [
  {
    id: "MGK001",
    dealer: "MG Motors Kochi Central",
    location: { city: "Kochi", state: "Kerala" },
    contact: { name: "Rajesh Kumar", phone: "+91 9876543210" },
    capacity: { used: 32, total: 50 },
    rating: 4.8,
    status: "active",
  },
  {
    id: "MGT001",
    dealer: "MG Motors Trivandrum",
    location: { city: "Trivandrum", state: "Kerala" },
    contact: { name: "Priya Nair", phone: "+91 9876543211" },
    capacity: { used: 28, total: 40 },
    rating: 4.6,
    status: "active",
  },
  {
    id: "MGC001",
    dealer: "MG Motors Calicut",
    location: { city: "Calicut", state: "Kerala" },
    contact: { name: "Mohammed Ali", phone: "+91 9876543212" },
    capacity: { used: 0, total: 30 },
    rating: 4.4,
    status: "inactive",
  },
];

const columnHelper = createColumnHelper<(typeof DEALERS_DATA)[0]>();

const getStatusBadgeClass = (status: string) => {
  const base =
    "text-[12px] px-2 py-[2px] rounded-md font-medium capitalize tracking-wide";
  switch (status) {
    case "active":
      return `${base} bg-green-600 text-white`;
    case "inactive":
      return `${base} bg-muted text-foreground`;
    default:
      return `${base} bg-gray-200 text-gray-800`;
  }
};

const useDealersColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: "dealer",
        header: "Dealer",
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="flex items-center gap-1 font-medium text-foreground">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              {row.original.dealer}
            </div>
            <div className="text-xs text-muted-foreground">
              {row.original.id}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: "location",
        header: "Location",
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="flex items-center gap-1 font-medium text-foreground">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              {row.original.location.city}
            </div>
            <div className="text-xs text-muted-foreground">
              {row.original.location.state}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: "contact",
        header: "Contact",
        cell: ({ row }) => (
          <div className="text-sm">
            <div className="font-medium text-foreground">
              {row.original.contact.name}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Phone className="w-3.5 h-3.5" />
              {row.original.contact.phone}
            </div>
          </div>
        ),
      }),
      columnHelper.display({
        id: "capacity",
        header: "Capacity",
        cell: ({ row }) => {
          const { used, total } = row.original.capacity;
          const percent = total > 0 ? Math.round((used / total) * 100) : 0;
          return (
            <div className="text-sm text-foreground">
              <div className="font-medium">
                <span
                  className={used === 0 ? "text-green-600" : "text-orange-600"}
                >
                  {used}/{total}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {percent}% utilized
              </div>
            </div>
          );
        },
      }),
      columnHelper.accessor("rating", {
        header: "Rating",
        cell: ({ getValue }) => (
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <span className="font-medium text-foreground">
              {getValue().toFixed(1)}
            </span>
            <Star className="w-4 h-4 fill-yellow-500" />
          </div>
        ),
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: ({ getValue }) => (
          <span className={getStatusBadgeClass(getValue())}>{getValue()}</span>
        ),
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Link href={`/dealers/${row.original.id}`}>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                <Eye className="w-4 h-4 mr-1" /> View
              </Button>
            </Link>
            <Link href={`/dealers/${row.original.id}/edit`}>
              <Button
                variant="secondary"
                size="sm"
                className="text-xs px-2 py-1"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Button>
            </Link>
          </div>
        ),
      }),
    ],
    []
  );
};

const DealersTable = () => {
  const columns = useDealersColumns();
  const searchParams = useSearchParams();

  const queryObject = {
    q: searchParams.get("q") || undefined,
    limit: PAGE_SIZE,
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
  };

  const { table } = useDataTable({
    data: DEALERS_DATA,
    columns,
    count: DEALERS_DATA.length,
    enablePagination: true,
    pageSize: PAGE_SIZE,
    getRowId: (row) => row.id,
  });

  return (
    <DataTable
      table={table}
      columns={columns}
      count={DEALERS_DATA.length}
      pageSize={PAGE_SIZE}
      isLoading={false}
      queryObject={queryObject}
      pagination
      search
    />
  );
};

export default DealersTable;
