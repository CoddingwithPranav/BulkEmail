"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  createCampaignSchema,       
  type CreateCampaignInput,     
} from "@repo/types";

import { useCampaignCreateMutation } from "@/hooks/queries/campaigns.query";
import CampaignForm from "../../_components/CampaignsCardsForm";

export default function CreateCampaign() {
  const router = useRouter();

  const form = useForm<CreateCampaignInput>({
    resolver: zodResolver(createCampaignSchema),
    defaultValues: {
      name: "",
      messageText: "",
      district: undefined,
      municipality: undefined,
    },
  });

  const { mutateAsync: createCampaign, isPending } = useCampaignCreateMutation();


  const onSubmit = async (values: CreateCampaignInput) => {
    try {
      await createCampaign(values);
      form.reset();
      router.push("/dashboard/campaigns");
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Create New Campaign</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CampaignForm form={form} />

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isPending}
            >
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