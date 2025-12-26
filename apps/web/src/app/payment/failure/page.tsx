import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowLeft,
  Home,
  AlertCircle,
  CreditCard,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function PaymentFailurePage() {
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

      <div className="container mx-auto max-w-2xl py-20 px-4 text-center">
        {/* Failure Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-8">
          <XCircle className="h-14 w-14 text-red-600" />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Payment Failed
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto">
          Unfortunately, your payment could not be processed at this time. Your campaign has not been launched.
        </p>

        {/* Possible Reasons Card */}
        <Card className="mb-10 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-700">
              <AlertCircle className="h-6 w-6" />
              Possible Reasons
            </CardTitle>
            <CardDescription>
              Common issues that may cause payment failure:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-left text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Insufficient balance in your eSewa account
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Incorrect PIN or OTP entered
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Network or gateway timeout
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 mt-1">•</span>
                Daily transaction limit exceeded
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Alert */}
        <Alert className="border-red-200 bg-red-50 text-left mb-10">
          <CreditCard className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800">No charges were made</AlertTitle>
          <AlertDescription className="text-red-700">
            Your account has not been charged. You can safely try paying again.
          </AlertDescription>
        </Alert>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold">
            <Link href="/dashboard/campaigns">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Campaigns
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-lg font-semibold">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Home
            </Link>
          </Button>
        </div>

        {/* Support Note */}
        <p className="text-sm text-muted-foreground mt-12">
          Still having issues? Contact support at{" "}
          <a href="mailto:support@yourcompany.com" className="text-brand underline">
            support@yourcompany.com
          </a>{" "}
          or call <strong>+977 980-0000000</strong>
        </p>
      </div>
    </>
  );
}