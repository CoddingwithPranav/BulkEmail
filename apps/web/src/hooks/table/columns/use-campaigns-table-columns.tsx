import { ConfirmDeleteDialog } from "@/components/common/ConfirmDeleteDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCampaignDeleteMutation, useCampaignStartMutation } from "@/hooks/queries/campaigns.query";
import { Campaign } from "@repo/types";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Trash, CreditCard, Play, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const columnHelper = createColumnHelper<Campaign>();

export const useCampaignsTableColumns = () => {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useCampaignDeleteMutation();
  const startMutation = useCampaignStartMutation();

  const handleStart = (id: string) => {
    startMutation.mutate(id);
  };

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

        const deliveryStatus = row.original.deliveryStatus;

        return (
          <div className="text-sm">
            <div className="font-medium">{delivered.toLocaleString()} delivered</div>
            <div className="text-muted-foreground">{rate}% success</div>

            {/* Optional: Show delivery status badge below */}
            {deliveryStatus && deliveryStatus !== "NOT_STARTED" && (
              <div className="mt-1">
                {deliveryStatus === "IN_PROGRESS" && (
                  <Badge variant="secondary" className="text-xs flex items-center gap-1 w-fit">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Running
                  </Badge>
                )}
                {deliveryStatus === "COMPLETED" && (
                  <Badge variant="default" className="text-xs bg-green-600">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>
            )}
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
        const isApproved = campaign.status === "APPROVED";
        const deliveryStatus = campaign.deliveryStatus || "NOT_STARTED";

        const canStart =
          isApproved && !isUnpaid && deliveryStatus === "NOT_STARTED";

        const isRunning = deliveryStatus === "IN_PROGRESS";
        const isCompleted = deliveryStatus === "COMPLETED";

        return (
          <div className="flex items-center gap-2">
            {/* Pay Now - Only if unpaid pending */}
            {isUnpaid && (
              <Button size="sm" className="gap-1.5" asChild>
                <Link href={`/dashboard/campaigns/pay/${campaign.id}`}>
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </Link>
              </Button>
            )}

            {/* Start Campaign Button - Only when allowed */}
            {canStart && (
              <Button
                size="sm"
                onClick={() => handleStart(campaign.id!)}
                className="gap-1.5 bg-primary hover:bg-primary/90 text-white"
                disabled={startMutation.isPending}
              >
                <Play className="w-4 h-4" />
                Start Campaign
              </Button>
            )}

            {/* Running State */}
            {isRunning && (
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <span>Running...</span>
              </div>
            )}

            {/* Completed State */}
            {isCompleted && (
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span>Completed</span>
              </div>
            )}

            {/* Edit Button - Allow edit only if not started or completed */}
            {deliveryStatus === "NOT_STARTED" && (
              <Button asChild size="sm" variant="outline">
                <Link href={`/dashboard/campaigns/${campaign.id}`}>
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
              </Button>
            )}

            {/* Delete Button - Only if not started */}
            {deliveryStatus === "NOT_STARTED" && (
              <Button
                size="sm"
                variant="destructive"
                onClick={() => setDeleteId(campaign.id!)}
                disabled={deleteMutation.isPending}
              >
                <Trash className="w-4 h-4 mr-1" />
                Delete
              </Button>
            )}

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