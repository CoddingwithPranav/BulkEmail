// app/dashboard/campaigns/pay/[id]/page.tsx
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
  Wallet, 
  Users, 
  MessageSquare,
  IndianRupee,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCampaignsQueryById } from "@/hooks/queries/campaigns.query";
import { useSMSPriceQuery } from "@/hooks/queries/price.query";

export default function PaymentPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: campaign, isLoading, isError, error } = useCampaignsQueryById(id);
  const { data: priceData } = useSMSPriceQuery();

  const pricePerSms = priceData?.pricePerSms || 0.85;
  const totalAmount = campaign?.totalSmsCost || 0;
  const recipientCount = campaign?.totalRecipients || 0;

  // QR Code with real amount
  const qrData = `khaltipay://pay?amt=${totalAmount.toFixed(2)}&id=YOUR_MERCHANT_ID&ref=${id}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(qrData)}`;

  const khaltiUrl = `https://khalti.com/pay/?amount=${Math.round(totalAmount * 100)}&merchant=YOUR_MERCHANT_CODE&return_url=${encodeURIComponent("/dashboard/campaigns")}`;
  const esewaUrl = `https://esewa.com.np/#/pay?amt=${totalAmount.toFixed(2)}&pid=YOUR_ESEWA_ID&ref=${id}`;

  if (isLoading) return <PaymentSkeleton />;
  if (isError || !campaign) return <ErrorState />;

  return (
    <>
      {/* Top Bar with Back Button */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link href="/dashboard/campaigns">
              <ArrowLeft className="h-4 w-4" />
              Back to Campaigns
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl py-10 px-4">
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Campaign Ready for Launch!</h1>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
            Complete payment to send your message to <strong>{recipientCount.toLocaleString()} recipients</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: QR Code & Payment Buttons */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center gap-3 mx-auto">
                <QrCode className="h-8 w-8 text-brand" />
                <CardTitle className="text-2xl">Scan & Pay Instantly</CardTitle>
              </div>
              <CardDescription className="text-base mt-2">
                Use <strong>Khalti</strong>, <strong>eSewa</strong>, <strong>IME Pay</strong>, or any banking app
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-3xl shadow-2xl border-8 border-gray-100 dark:border-gray-800">
                  <Image
                    src={qrImageUrl}
                    alt="Scan to pay with Khalti/eSewa"
                    width={300}
                    height={300}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full text-lg h-14 font-medium" asChild>
                  <Link href={khaltiUrl} target="_blank" rel="noopener">
                    <Wallet className="mr-3 h-6 w-6" />
                    Pay with Khalti
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full text-lg h-14" asChild>
                  <Link href={esewaUrl} target="_blank" rel="noopener">
                    <span className="text-green-600 text-2xl font-bold mr-2">e</span>
                    Sewa Pay
                  </Link>
                </Button>
              </div>

              <div className="text-center">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Campaign activates in 2–5 minutes after payment
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Right: Summary */}
          <div className="space-y-6">
            {/* Campaign Summary */}
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="h-7 w-7 text-brand" />
                  Campaign Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground">Campaign Name</p>
                  <p className="text-xl font-semibold mt-1">{campaign.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 py-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Recipients</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {recipientCount.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                    <IndianRupee className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Price per SMS</p>
                    <p className="text-3xl font-bold">Rs. {pricePerSms.toFixed(2)}</p>
                  </div>
                </div>

                <div className="text-center py-8 bg-gradient-to-r from-brand/10 via-purple-50 to-pink-50 dark:from-brand/20 dark:via-purple-950/30 dark:to-pink-950/20 rounded-2xl border-2 border-brand/20">
                  <p className="text-lg text-muted-foreground mb-2">Total Amount to Pay</p>
                  <p className="text-5xl font-bold text-brand">
                    Rs. {totalAmount.toFixed(2)}
                  </p>
                </div>

                <Badge variant="outline" className="w-full py-3 text-base justify-center">
                  Campaign ID: <span className="font-mono ml-2">{id}</span>
                </Badge>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">24/7 Support Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">+977 980-0000000</p>
                    <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
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
      </div>
    </>
  );
}

// Loading & Error States (unchanged but improved)
function PaymentSkeleton() {
  return (
    <div className="container mx-auto max-w-5xl py-20">
      <div className="space-y-8">
        <Skeleton className="h-20 w-20 rounded-full mx-auto" />
        <Skeleton className="h-10 w-96 mx-auto" />
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <Skeleton className="h-96 rounded-2xl" />
          <div className="space-y-8">
            <Skeleton className="h-64 rounded-2xl mb-6" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="container mx-auto max-w-md py-20 text-center">
      <Alert variant="destructive" className="mx-auto">
        <AlertCircle className="h-6 w-6" />
        <AlertTitle>Campaign Not Found</AlertTitle>
        <AlertDescription>
          The campaign you're looking for doesn't exist or has been removed.
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