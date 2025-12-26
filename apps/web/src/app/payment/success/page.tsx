import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowLeft,
  Home,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
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

      <div className="container mx-auto max-w-3xl py-20 px-4 text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-green-100 mb-8">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Payment Successful!
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Thank you! Your payment has been confirmed. Your SMS campaign is now paid and will be launched automatically within <strong>5–30 minutes</strong>.
        </p>

        {/* Success Alert */}
        <Alert className="border-green-200 bg-green-50 text-left mb-10 max-w-2xl mx-auto">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800">Campaign Activated</AlertTitle>
          <AlertDescription className="text-green-700">
            You will receive a notification once your messages start delivering. You can track progress in your dashboard.
          </AlertDescription>
        </Alert>

        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold bg-brand hover:bg-brand/90">
            <Link href="/dashboard/campaigns">
              <MessageSquare className="mr-2 h-5 w-5" />
              View My Campaigns
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-lg font-semibold">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Home
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-muted-foreground mt-12">
          Questions? Reach us at{" "}
          <a href="mailto:support@yourcompany.com" className="text-brand underline">
            support@yourcompany.com
          </a>{" "}
          or call <strong>+977 980-0000000</strong>
        </p>
      </div>
    </>
  );
}