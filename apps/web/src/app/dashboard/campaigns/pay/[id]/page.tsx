"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle2,
  ArrowLeft,
  Phone,
  Mail,
  QrCode,
  Users,
  MessageSquare,
  IndianRupee,
  AlertCircle,
  Check
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCampaignsQueryById } from "@/hooks/queries/campaigns.query";
import { useSMSPriceQuery } from "@/hooks/queries/price.query";
import { useCampaignUpdatePaidStatusMutation } from "@/hooks/queries/campaigns.query";

export default function PaymentPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: campaign, isLoading, isError } = useCampaignsQueryById(id);
  const { data: priceData } = useSMSPriceQuery();

  const updatePaidMutation = useCampaignUpdatePaidStatusMutation(id);

  const pricePerSms = priceData?.pricePerSms || 0.85;
  const totalAmount = campaign?.totalSmsCost || 0;
  const recipientCount = campaign?.totalRecipients || 0;

  const qrImageUrl = "/images/qr.png"; 

  const handleIHavePaid = () => {
    updatePaidMutation.mutate(undefined, {
      onSuccess: () => {
      },
      onError: () => {
      },
    });
  };

  if (isLoading) return <PaymentSkeleton />;
  if (isError || !campaign) return <ErrorState />;

  const isAlreadyPaid = campaign.paid === true;

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Pay & Launch Campaign</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scan the QR code using <strong>Khalti, eSewa, IME Pay</strong> or any banking app to pay{" "}
            <span className="font-bold text-brand">Rs. {totalAmount.toFixed(2)}</span> and reach{" "}
            <strong>{recipientCount.toLocaleString()} recipients</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* QR Code Card */}
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <QrCode className="h-8 w-8 text-brand" />
                <CardTitle className="text-2xl">Scan to Pay</CardTitle>
              </div>
              <CardDescription className="text-base">
                Use any mobile banking app
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="flex justify-center">
                <div className="p-6 bg-card rounded-3xl shadow-2xl border-8 border-border">
                  <Image
                    src={qrImageUrl}
                    alt={`Pay Rs. ${totalAmount.toFixed(2)}`}
                    width={320}
                    height={320}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-brand">
                  Rs. {totalAmount.toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Pay exactly this amount
                </p>
              </div>

              {/* I Have Paid Button */}
              {isAlreadyPaid ? (
                <Alert className="border-primary/20 bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <AlertDescription className="text-foreground">
                    Payment already confirmed. Your campaign is being processed.
                  </AlertDescription>
                </Alert>
              ) : (
                <Button
                  size="lg"
                  className="w-full h-14 text-lg font-semibold"
                  onClick={handleIHavePaid}
                  disabled={updatePaidMutation.isPending}
                >
                  {updatePaidMutation.isPending ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      I Have Paid
                    </>
                  )}
                </Button>
              )}

              {/* Success Message after click */}
              {updatePaidMutation.isSuccess && !isAlreadyPaid && (
                <Alert className="border-primary/20 bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <AlertDescription className="text-foreground">
                    Thank you! Payment reported. Admin will verify and launch your campaign within <strong>5–30 minutes</strong>.
                  </AlertDescription>
                </Alert>
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
                  <p className="text-lg text-muted-foreground mb-3">Total Amount</p>
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

            {/* Support */}
            <Card className="bg-muted/50 border">
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">+977 980-0000000</p>
                    <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">support@yourcompany.com</p>
                    <p className="text-sm text-muted-foreground">Email Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            After payment, click <strong>"I Have Paid"</strong>. Our team will verify and broadcast your SMS shortly.
          </p>
        </div>
      </div>
    </>
  );
}

// Skeleton & Error unchanged
function PaymentSkeleton() {
  return (
    <div className="container mx-auto max-w-4xl py-20 space-y-12">
      <div className="text-center">
        <Skeleton className="h-20 w-20 rounded-full mx-auto mb-6" />
        <Skeleton className="h-10 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <Skeleton className="h-96 rounded-3xl" />
        <div className="space-y-6">
          <Skeleton className="h-80 rounded-3xl" />
          <Skeleton className="h-48 rounded-3xl" />
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