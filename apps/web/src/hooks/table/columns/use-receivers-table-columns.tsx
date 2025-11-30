import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { useReceiverDeleteMutation } from "@/hooks/queries/reveivers.query";
import { Receiver } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const columnHelper = createColumnHelper<Receiver>();

export const useReceiversTableColumns = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useReceiverDeleteMutation();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => setDeleteId(null),
    });
  };

  return [
    columnHelper.display({
      id: "firstName",
      header: "First Name",
      cell: ({ row }) => <div className="font-medium">{row.original.firstName}</div>,
    }),
    columnHelper.display({
      id: "lastName",
      header: "Last Name",
      cell: ({ row }) => <div>{row.original.lastName}</div>,
    }),
    columnHelper.display({
      id: "province",
      header: "Province",
      cell: ({ row }) => <div>{row.original.province || "-"}</div>,
    }),
    columnHelper.display({
      id: "district",
      header: "District",
      cell: ({ row }) => <div>{row.original.district || "-"}</div>,
    }),
    columnHelper.display({
      id: "municipality",
      header: "Municipality",
      cell: ({ row }) => <div>{row.original.municipality || "-"}</div>,
    }),
    columnHelper.display({
      id: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <div>{row.original.phoneNumber}</div>,
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const receiver = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/dashboard/receivers/${receiver.id}`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => setDeleteId(receiver.id || null)}
            >
              <Trash className="w-4 h-4 mr-1" />
              Delete
            </Button>

            <ConfirmDeleteDialog
              open={deleteId === receiver.id}
              onOpenChange={(open) => !open && setDeleteId(null)}
              onConfirm={() => handleDelete(receiver.id || "")}
              isLoading={deleteMutation.isPending}
              title={`Delete "${receiver.firstName} ${receiver.lastName}"?`}
              description="This receiver will be permanently deleted."
            />
          </div>
        );
      },
    }),
  ];
};
