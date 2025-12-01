"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useCampaignCreateMutation } from "@/hooks/queries/campaigns.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Campaign, createCampaignSchema } from "@repo/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import CampaignForm from "../../_components/CampaignsCardsForm";

export default function CreateCampaign() {
  const router = useRouter();

  const form = useForm<Campaign>({
    resolver: zodResolver(createCampaignSchema),
    defaultValues: {
      name: "",
      messageText: "",
      categoryId: "",
      province: undefined,
      district: undefined,
      municipality: undefined,
    },
  });

  const { mutateAsync: createCampaign, isPending } = useCampaignCreateMutation();

  const onSubmit = async (values: Campaign) => {
    try {
      await createCampaign(values);
      router.push("/dashboard/campaigns");
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  return (
    <div className="mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CampaignForm form={form} />

          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button type="button" variant="outline" onClick={() => router.back()} disabled={isPending}>
              Cancel
            </Button>
            <Button type="submit" variant="brand" disabled={isPending}>
              {isPending ? "Creating..." : "Create Campaign"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}