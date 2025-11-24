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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import CampaignsCardsForm from "../../_components/CampaignsCardsForm";

const EditCampaigns = ({ id }: { id: string }) => {
  const router = useRouter();
  const form = useForm<Campaign>({
    resolver: zodResolver(createCampaignSchema),
    defaultValues: {
      name: "",
      messageText: "",
      province: "",
      district: "",
      municipality: "",
    },
  });

  const { mutateAsync: updateCampaignAsync, isPending } =
    useCampaignUpdateMutation(id);

  const onSubmit = async (values: Campaign) => {
    try {
      const payload = {
        name: values.name,
        messageText: values.messageText,
        province: values.province,
        district: values.district,
        municipality: values.municipality,
      };
      await updateCampaignAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isSuccess } = useCampaignsQueryById(id);

  useEffect(() => {
    console.log("Fetched campaign data:", data);
    if (isSuccess && data) {
      const campaign = data;
      console.log("Populating form with campaign data:", campaign);

      form.reset({
        name: campaign.name,
        messageText: campaign.messageText,
        province: campaign.province || "",
        district: campaign.district || "",
        municipality: campaign.municipality || "",
      });
    }
  }, [data, isSuccess, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CampaignsCardsForm form={form}>
          <Button variant={"brand"} type="submit">
            {isPending ? "Updating..." : "Update"}
          </Button>
        </CampaignsCardsForm>
      </form>
    </Form>
  );
};

export default EditCampaigns;
