// src/hooks/table/my-contacts-columns.ts
import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { useDeleteMyContactMutation } from "@/hooks/queries/myContact.query";
import { MyContact } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Mail, Phone, Trash, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const columnHelper = createColumnHelper<MyContact>();

export const useMyContactsTableColumns = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useDeleteMyContactMutation();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => setDeleteId(null),
    });
  };

  return [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: ({ row }) => {
        const contact = row.original;
        const fullName = [contact.firstName, contact.lastName]
          .filter(Boolean)
          .join(" ");
        return (
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">
              {fullName || contact.phoneNumber}
            </span>
          </div>
        );
      },
    }),

    columnHelper.accessor("email", {
      header: "Email",
      cell: ({ row }) => (
        <div className="flex items-center gap-2 font-mono">
          <Mail className="h-4 w-4 text-muted-foreground" />
          {row.original.email}
        </div>
      ),
    }),

    columnHelper.display({
      id: "location",
      header: "Location",
      cell: ({ row }) => {
        const { province, district, municipality } = row.original;
        const parts = [province, district, municipality].filter(Boolean);
        return parts.length > 0 ? (
          <span className="text-sm text-muted-foreground">{parts.join(", ")}</span>
        ) : (
          <span className="text-muted-foreground/60">—</span>
        );
      },
    }),

    columnHelper.accessor("category.name", {
      header: "Category",
      cell: ({ row }) => (
        <span className="text-sm">
          {row.original.category?.name || "Uncategorized"}
        </span>
      ),
    }),

    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const contact = row.original;
        return (
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/dashboard/contacts/${contact.id}`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => setDeleteId(contact.id!)}
            >
              <Trash className="w-4 h-4" />
            </Button>

            <ConfirmDeleteDialog
              open={deleteId === contact.id}
              onOpenChange={(open) => !open && setDeleteId(null)}
              onConfirm={() => handleDelete(contact.id!)}
              isLoading={deleteMutation.isPending}
              title="Delete Contact?"
              description={`Are you sure you want to delete ${
                [contact.firstName, contact.lastName].filter(Boolean).join(" ") ||
                contact.phoneNumber
              }? This action cannot be undone.`}
            />
          </div>
        );
      },
    }),
  ];
};