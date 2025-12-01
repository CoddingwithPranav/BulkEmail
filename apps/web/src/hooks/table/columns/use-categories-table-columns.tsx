import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { useDeleteCategoryMutation } from "@/hooks/queries/categories.query";
import { Categories } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const columnHelper = createColumnHelper<Categories>();

export const useCategoriesTableColumns = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useDeleteCategoryMutation();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => setDeleteId(null),
    });
  };

  return [
    columnHelper.display({
      id: "Name",
      header: " Name",
      cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
    }),
    columnHelper.display({
      id: "descriptions",
      header: "Descriptions",
      cell: ({ row }) => <div>{row.original.description}</div>,
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const categories = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/dashboard/categories/${categories.id}`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => setDeleteId(categories.id || null)}
            >
              <Trash className="w-4 h-4 mr-1" />
              Delete
            </Button>

            <ConfirmDeleteDialog
              open={deleteId === categories.id}
              onOpenChange={(open) => !open && setDeleteId(null)}
              onConfirm={() => handleDelete(categories.id || "")}
              isLoading={deleteMutation.isPending}
              title={`Delete "${categories.name}"?`}
              description="This category will be permanently deleted."
            />
          </div>
        );
      },
    }),
  ];
};
