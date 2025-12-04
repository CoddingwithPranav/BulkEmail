// hooks/useCampaignsTableColumns.ts or wherever you keep it
import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCampaignDeleteMutation } from "@/hooks/queries/campaigns.query";
import { Campaign } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash, CreditCard } from "lucide-react";
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
    columnHelper.accessor("name", {
      header: "Campaign Name",
      cell: ({ row }) => (
        <div className="font-medium text-foreground">{row.original.name}</div>
      ),
    }),

    columnHelper.accessor("totalRecipients", {
      header: "Recipients",
      cell: ({ row }) => (
        <div className="font-medium">
          {row.original.totalRecipients?.toLocaleString() || "-"}
        </div>
      ),
    }),

    columnHelper.accessor("totalSmsCost", {
      header: "Total Cost",
      cell: ({ row }) => (
        <div className="font-semibold text-brand">
          Rs. {row.original.totalSmsCost?.toFixed(2) || "0.00"}
        </div>
      ),
    }),

    columnHelper.accessor("status", {
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const isPaid = row.original.paid;

        return (
          <div className="flex items-center gap-2">
            <Badge
              variant={
                status === "APPROVED"
                  ? "default"
                  : status === "PENDING"
                  ? "outline"
                  : "secondary"
              }
              className="text-xs"
            >
              {status}
            </Badge>

            {!isPaid && status === "PENDING" && (
              <Badge variant="destructive" className="text-xs">
                Unpaid
              </Badge>
            )}
          </div>
        );
      },
    }),

    columnHelper.display({
      id: "delivery",
      header: "Delivery",
      cell: ({ row }) => {
        const delivered = row.original.totalDelivered || 0;
        const total = row.original.totalRecipients || 0;
        const rate = total > 0 ? Math.round((delivered / total) * 100) : 0;

        return (
          <div className="text-sm">
            <div className="font-medium">{delivered.toLocaleString()} delivered</div>
            <div className="text-muted-foreground">{rate}% success</div>
          </div>
        );
      },
    }),

    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const campaign = row.original;
        const isUnpaid = !campaign.paid && campaign.status === "PENDING";

        return (
          <div className="flex items-center gap-2 ">
            {/* Pay Now Button - Only if unpaid */}
            {isUnpaid && (
              <Button size="sm" className="gap-1.5" asChild>
                <Link href={`/dashboard/campaigns/pay/${campaign.id}`}>
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </Link>
              </Button>
            )}

            {/* Edit Button */}
            <Button asChild size="sm" variant="outline">
              <Link href={`/dashboard/campaigns/${campaign.id}`}>
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Link>
            </Button>

            {/* Delete Button */}
            <Button
              size="sm"
              variant="destructive"
              onClick={() => setDeleteId(campaign.id!)}
              disabled={deleteMutation.isPending}
            >
              <Trash className="w-4 h-4 mr-1" />
              Delete
            </Button>

            {/* Delete Confirmation Dialog */}
            <ConfirmDeleteDialog
              open={deleteId === campaign.id}
              onOpenChange={(open) => !open && setDeleteId(null)}
              onConfirm={() => handleDelete(campaign.id!)}
              isLoading={deleteMutation.isPending}
              title={`Delete "${campaign.name}"?`}
              description="This action cannot be undone. The campaign will be permanently removed."
            />
          </div>
        );
      },
    }),
  ];
};