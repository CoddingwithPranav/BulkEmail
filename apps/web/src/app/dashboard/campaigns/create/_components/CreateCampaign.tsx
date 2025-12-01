// app/dashboard/campaigns/create/_components/CreateCampaign.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useCampaignCreateMutation } from "@/hooks/queries/campaigns.query";
import { useCategoryRecipientCountQuery } from "@/hooks/queries/categories.query";
import { useSMSPriceQuery } from "@/hooks/queries/price.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCampaignSchema } from "@repo/types";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import CampaignForm from "../../_components/CampaignsCardsForm";

export default function CreateCampaign() {
  const router = useRouter();

  const form = useForm({
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

  const categoryId = form.watch("categoryId");

  // Fetch recipient count
  const { data: countData, isLoading: loadingCount } = useCategoryRecipientCountQuery(categoryId);

  // Fetch current SMS price
  const { data: priceData } = useSMSPriceQuery();
  const pricePerSms = priceData?.pricePerSms || 0.85;

  const recipientCount = countData?.recipientCount || 0;
  const totalCost = recipientCount > 0 ? recipientCount * pricePerSms : 0;

  const { mutateAsync: createCampaign, isPending } = useCampaignCreateMutation();

  const onSubmit = async (values: any) => {
    if (recipientCount === 0) return;

    const payload = {
      ...values,
      totalRecipients: recipientCount,
      totalSmsCost: Number(totalCost.toFixed(2)),
    };

    try {
      const campaign = await createCampaign(payload);
      router.push(`/dashboard/campaigns/pay/${campaign.id}`);
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CampaignForm form={form} />

          {/* Live Cost Summary */}
          {categoryId && (
            <Card className="border-2 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-6 text-center">Campaign Cost Summary</h3>

                {loadingCount ? (
                  <div className="space-y-3">
                    <div className="h-6 bg-muted rounded w-3/4 mx-auto"></div>
                    <div className="h-10 bg-muted rounded w-1/2 mx-auto"></div>
                  </div>
                ) : recipientCount > 0 ? (
                  <div className="space-y-6 text-center">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Recipients</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {recipientCount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Price per SMS</p>
                        <p className="text-2xl font-bold">Rs. {pricePerSms.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total Cost</p>
                        <p className="text-3xl font-bold text-brand">
                          Rs. {totalCost.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Final amount will be confirmed after campaign creation
                    </p>
                  </div>
                ) : (
                  <p className="text-center text-orange-600 font-medium">
                    No contacts found in this category
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-8 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="brand"
              size="lg"
              disabled={isPending || recipientCount === 0 || loadingCount}
            >
              {isPending ? "Creating Campaign..." : "Create & Proceed to Payment"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}