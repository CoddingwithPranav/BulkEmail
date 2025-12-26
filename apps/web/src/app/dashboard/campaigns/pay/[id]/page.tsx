"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  IndianRupee,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCampaignsQueryById } from "@/hooks/queries/campaigns.query";
import { useSMSPriceQuery } from "@/hooks/queries/price.query";
import { useInitiatePaymentMutation } from "@/hooks/queries/payments.query";
import { toast } from "sonner";
import Image from "next/image";

export default function PaymentPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: campaign, isLoading: campaignLoading, isError: campaignError } = useCampaignsQueryById(id);
  const { data: priceData } = useSMSPriceQuery();

  const initiatePaymentMutation = useInitiatePaymentMutation();

  const pricePerSms = priceData?.pricePerSms || 0.85;
  const totalAmount = campaign?.totalSmsCost || 0;
  const recipientCount = campaign?.totalRecipients || 0;

  const isAlreadyPaid = campaign?.paid === true;
  const isLoading = campaignLoading || initiatePaymentMutation.isPending;

  const handlePayment = (paymentMethod: "esewa") => {
    initiatePaymentMutation.mutate(
      {
        campaignId: id,
        amount: totalAmount,
        payment_method: paymentMethod,
      },
      {
        onSuccess: (data) => {
          if (data.paymentMethod === "esewa") {
            esewaCall(data.formData);
          }
        },
        onError: (error) => {
          console.error("Payment initiation failed:", error);
          toast.error("Failed to initiate payment. Please try again.");
        },
      }
    );
  };

  const esewaCall = (formData: Record<string, string>) => {
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form"; // Change to production URL later
    const form = document.createElement("form");
    form.method = "POST";
    form.action = path;

    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  if (campaignLoading) return <PaymentSkeleton />;
  if (campaignError || !campaign) return <ErrorState />;

  return (
    <>
      {/* Top Bar */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/campaigns" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Campaigns
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl py-12 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pay & Launch Campaign</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a payment method to pay{" "}
            <span className="font-bold text-brand">Rs. {totalAmount.toFixed(2)}</span>{" "}
            and launch your campaign to{" "}
            <strong>{recipientCount.toLocaleString()} recipients</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Payment Options Card */}
          <Card className="border-2 shadow-xl">
            <CardHeader className="flex items-center justify-center flex-col">
              <CardTitle className="text-2xl">Select Payment Method</CardTitle>
              <Image src="/images/esewa.png" alt="eSewa Logo" width={200} height={200} className="inline-block mr-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              {isAlreadyPaid ? (
                <Alert className="border-green-500/20 bg-green-500/5">
                  <AlertTitle className="text-green-700">Payment Confirmed ✓</AlertTitle>
                  <AlertDescription>
                    Your campaign has been paid and is being processed for delivery.
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="w-full h-16 text-lg font-semibold bg-green-600 hover:bg-green-700"
                    onClick={() => handlePayment("esewa")}
                    disabled={isLoading}
                  >
                    {isLoading && initiatePaymentMutation.variables?.payment_method === "esewa" ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                        Redirecting to eSewa...
                      </>
                    ) : (
                      <>
                        Pay with eSewa
                      </>
                    )}
                  </Button>


                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Secure payment powered by eSewa
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Campaign Summary */}
          <div className="space-y-6">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="h-7 w-7 text-brand" />
                  Campaign Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-7">
                <div>
                  <p className="text-sm text-muted-foreground">Campaign Name</p>
                  <p className="text-xl font-semibold mt-1">{campaign.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Recipients</p>
                    <p className="text-3xl font-bold text-primary">
                      {recipientCount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-2xl">
                    <IndianRupee className="h-10 w-10 text-brand mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Price per SMS</p>
                    <p className="text-3xl font-bold text-brand">
                      Rs. {pricePerSms.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="text-center py-8 bg-brand/10 rounded-2xl border-2 border-brand/20">
                  <p className="text-lg text-muted-foreground mb-3">Total Payable Amount</p>
                  <p className="text-5xl font-bold text-brand">
                    Rs. {totalAmount.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="py-2">
                    Campaign ID: <span className="font-mono ml-2">{id}</span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            After successful payment, you will be redirected back and your campaign will be launched automatically within minutes.
          </p>
        </div>
      </div>
    </>
  );
}

function PaymentSkeleton() {
  return (
    <div className="container mx-auto max-w-4xl py-20 space-y-12">
      <div className="text-center">
        <Skeleton className="h-10 w-96 mx-auto mb-4" />
        <Skeleton className="h-6 w-80 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-48 mx-auto" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Skeleton className="h-96 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="container mx-auto max-w-md py-20 text-center">
      <Alert variant="destructive">
        <AlertCircle className="h-6 w-6" />
        <AlertTitle>Campaign Not Found</AlertTitle>
        <AlertDescription>
          This campaign does not exist or has been removed.
        </AlertDescription>
      </Alert>
      <Button asChild className="mt-8">
        <Link href="/dashboard/campaigns">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Campaigns
        </Link>
      </Button>
    </div>
  );
}