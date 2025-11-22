"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  useJobcardsQueryById,
  useJobCardUpdateMutation,
} from "@/hooks/queries/jobcards.query";
import {
  CreateJobCardsFormData,
} from "@/lib/schemas/jobcards.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CreateCampaignInput, createCampaignSchema, UpdateCampaignInput } from "@/lib/schemas/campaigns.schema";
import CampaignsCardsForm from "../../_components/CampaignsCardsForm";
import { useCampaignsQueryById } from "@/hooks/queries/campaigns.query";

const EditCampaigns = ({ id }: { id: string }) => {
  const router = useRouter();
  const form = useForm<CreateCampaignInput>({
    resolver: zodResolver(createCampaignSchema),
    defaultValues: {
      name: "",
      messageText: "",
      province: "",
      district: "",
      municipality: "",
      manualReceivers: [],
      paymentReceiptImage: "",
    },
  });

  const { mutateAsync: updateJobCardAsync, isPending } =
    useJobCardUpdateMutation(id);

  const onSubmit = async (values: CreateCampaignInput) => {
    try {
      const payload = {
        name: values.name,
        messageText: values.messageText,
        province: values.province,
        district: values.district,
        municipality: values.municipality,
        manualReceivers: values.manualReceivers,
        paymentReceiptImage: values.paymentReceiptImage,
      };
      await updateJobCardAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isSuccess } = useCampaignsQueryById(id);

  useEffect(() => {
    if (isSuccess && data) {
      const campaign = data;

      form.reset({
        name: campaign.name,
        // messageText: campaign.messageText,
        // province: campaign.province || "",
        // district: campaign.district || "",
        // municipality: campaign.municipality || "",
        // manualReceivers: campaign.manualReceivers || [],
        // paymentReceiptImage: campaign.paymentReceiptImage || "",
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
