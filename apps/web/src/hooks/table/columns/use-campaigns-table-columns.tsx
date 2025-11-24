import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { useCampaignDeleteMutation } from "@/hooks/queries/campaigns.query";
import { Campaign } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const columnHelper = createColumnHelper<Campaign>();

export const useCampaignsTableColumns = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useCampaignDeleteMutation();

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id, {
      onSuccess: () => setDeleteId(null),
    });
  };

  return [
    columnHelper.display({
      id: "name",
      header: "Name",
      cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
    }),
    columnHelper.display({
      id: "totalCost",
      header: "Total Cost",
      cell: ({ row }) => <div>Rs. {row.original.totalSmsCost}</div>,
    }),
    columnHelper.display({
      id: "province",
      header: "Province",
      cell: ({ row }) => <div>{row.original.province || "-"}</div>,
    }),
    columnHelper.display({
      id: "deliveryRate",
      header: "Delivery Rate",
      cell: ({ row }) => <div>{row.original.deliveryRate}%</div>,
    }),
    columnHelper.display({
      id: "deliveredNumber",
      header: "Delivered",
      cell: ({ row }) => <div>{row.original.deliveredNumber}</div>,
    }),
    columnHelper.display({
      id: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
            row.original.status === "APPROVED"
              ? "bg-green-100 text-green-800"
              : row.original.status === "PENDING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.original.status}
        </span>
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const campaign = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href={`/dashboard/campaigns/${campaign.id}`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => setDeleteId(campaign.id || null)}
            >
              <Trash className="w-4 h-4 mr-1" />
              Delete
            </Button>

            <ConfirmDeleteDialog
              open={deleteId === campaign.id}
              onOpenChange={(open) => !open && setDeleteId(null)}
              onConfirm={() => handleDelete(campaign.id || "")}
              isLoading={deleteMutation.isPending}
              title={`Delete "${campaign.name}"?`}
              description="This campaign will be permanently deleted."
            />
          </div>
        );
      },
    }),
  ];
};
