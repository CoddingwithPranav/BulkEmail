"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  useCampaignsQueryById,
  useCampaignUpdateMutation,
} from "@/hooks/queries/campaigns.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Campaign, createCampaignSchema } from "@repo/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import CampaignsCardsForm from "../../_components/CampaignsCardsForm";
import { toast } from "sonner";
import { queryClient } from "@/lib/query-client";

export default function EditCampaigns({ id }: { id: string }) {
  const router = useRouter();

  const { data: campaign, isLoading, isSuccess } = useCampaignsQueryById(id);
  const { mutateAsync: updateCampaign, isPending } = useCampaignUpdateMutation(id);

  const formValues = campaign
    ? {
        name: campaign.name ?? "",
        subject: campaign.subject ?? "",
        emailBody: campaign.emailBody ?? "", 
        province: campaign.province ?? "",
        district: campaign.district ?? "",
        municipality: campaign.municipality ?? "",
        categoryId: campaign.categoryId ?? "",
      }
    : undefined;

  const form = useForm<Campaign>({
    resolver: zodResolver(createCampaignSchema),
    values: formValues,
  });

  const onSubmit = async (values: Campaign) => {
    try {
      await updateCampaign(values);

      await queryClient.invalidateQueries({
        queryKey: ["campaigns"],
      });

      router.back();
    } catch (error: any) {
      toast.error(error?.message || "Failed to update campaign");
      console.error("Update Error:", error);
    }
  };

  // Loader UI
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Loading campaign...</p>
      </div>
    );
  }

  // If no campaign found
  if (!campaign) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Campaign not found</p>
        <Button variant="outline" onClick={() => router.back()} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CampaignsCardsForm form={form} />

          <div className="flex justify-end gap-4 pt-8 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button type="submit" variant="brand" disabled={isPending}>
              {isPending ? "Updating..." : "Update Campaign"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
