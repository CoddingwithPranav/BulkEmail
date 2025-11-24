"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, MessageSquare, Shield } from "lucide-react";

export default function GuestPaymentPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="rounded-full bg-blue-100 dark:bg-amber-900/30 p-3">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-amber-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Messanger Nepal
            </h1>
            <p className="text-muted-foreground mt-2">
              Complete your guest payment to send your messages.
            </p>
          </div>

          {/* Main Card */}
          <Card className="border shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Scan to Pay</CardTitle>
              <CardDescription>
                Use eSewa, Khalti, IME Pay, or any QR-supported wallet
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* QR Code */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-inner border-2 border-dashed border-gray-200">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaveAJx5eVzwpkjAEDcADLBbJLMs_Qw8o9MTaR4mA7aMDj-Q3apfVCmXWVnlTjFoQnJydcMBhjb8t7oW_cbTjjEz4DFeswup0CUExu-gCpLvGlFe-LkCqU_YCCCM5lA8_znA6jZSLlZ5pPAiJ6fE3t3N2PNB1EB0AzYHgOM9RXQQIbnIpOE-mq6mXUevOdTfd1o9hrpfXuxmz0RNDfEdZLvq8EeqfLjW5oKprLF8suk1yJso8bc8YnB3d5fPpEXNOz8ffDCPIf964"
                    alt="Payment QR Code"
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>

              <Separator />

              {/* Payment Summary */}
              <div className="space-y-4 bg-muted/50 rounded-xl p-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total SMS Cost
                  </span>
                  <span className="text-2xl font-bold">Rs. 150.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total Receivers
                  </span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    100
                  </Badge>
                </div>
              </div>

              {/* Security Note */}
              <div className="flex gap-3 items-start bg-blue-50 dark:bg-amber-900/20 border border-blue-200 dark:border-amber-800/50 rounded-lg p-4">
                <Shield className="h-5 w-5 text-blue-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Your SMS campaign will be processed{" "}
                  <strong>immediately</strong> after payment confirmation. For
                  support, contact us at support@nepalsms.com
                </p>
              </div>

              {/* Action Button */}
              <Button
                size="lg"
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary dark:bg-amber-500 dark:hover:bg-amber-600"
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />I have paid
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Want scheduling, templates & history?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-amber-500 hover:underline"
                >
                  Create a free account →
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="mt-8 text-center text-xs text-muted-foreground">
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
            <p className="mt-2">© 2025 NepalSMS. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}
