"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMemo, useState } from "react";

import { DataTable } from "@/components/datatable";
import { useJobCardDeleteAssignPartsMutation } from "@/hooks/queries/jobcards.query";
import { useDataTable } from "@/hooks/table/use-data-table";
import { JobComplaint, JobComplaintPart } from "@/lib/types/job";
import { createColumnHelper } from "@tanstack/react-table";
import { EyeIcon, Trash2 } from "lucide-react";
import { AssignParts, UpdateParts } from "./Parts";

const PAGE_SIZE = 10;

const columnHelper = createColumnHelper<JobComplaintPart>();

const usePartTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.accessor("itCode", {
        header: "Item Code",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "itId",
        header: "Item Id",
        cell: ({ row }) => row.original.itemMaster?.itId,
      }),
      columnHelper.display({
        id: "itName",
        header: "Item Name",
        cell: ({ row }) => row.original.itemMaster?.itName,
      }),
      columnHelper.accessor("unit", {
        header: "Unit",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("qty", {
        header: "Qty",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("rate", {
        header: "Rate",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );
};

const DeletePart = ({ row }: { row: JobComplaintPart }) => {
  const { mutateAsync } = useJobCardDeleteAssignPartsMutation(
    row.complaintConsId
  );

  const handleDelete = async () => {
    await mutateAsync();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button type="button" size="sm" variant="destructive">
          <Trash2 className="w-4 h-4" /> <span className="sr-only">Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete part?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              size="sm"
              className="text-xs px-2 py-1 bg-brand hover:bg-brand/90 cursor-pointer"
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4 mr-1" /> Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const useColumns = () => {
  const base = usePartTableColumns();

  return [
    ...base,
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <UpdateParts row={row.original} />
          <DeletePart row={row.original} />
        </div>
      ),
    }),
  ];
};

const ViewParts = ({ row }: { row: JobComplaint }) => {
  const parts = row?.parts ?? [];
  const partsCount = parts?.length ?? 0;
  const [open, setOpen] = useState(false);

  const columns = useColumns();

  const { table } = useDataTable({
    data: parts,
    columns,
    count: partsCount,
    enablePagination: true,
    pageSize: PAGE_SIZE,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <EyeIcon className="w-4 h-4 mr-1" /> View Parts
        </Button>
      </DialogTrigger>

      <DialogContent className="min-w-3xl max-w-4xl gap-0">
        <DialogHeader>
          <DialogTitle>View Parts</DialogTitle>
        </DialogHeader>
        <div className="flex justify-end">
          <AssignParts row={row} />
        </div>
        <DataTable
          table={table}
          columns={columns}
          count={partsCount}
          pageSize={PAGE_SIZE}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ViewParts;
