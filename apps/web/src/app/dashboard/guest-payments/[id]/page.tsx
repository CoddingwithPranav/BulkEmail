// app/dashboard/guest-payments/[id]/page.tsx
import { Container, Heading } from "@/components/common";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, User, Phone, CreditCard, CheckCircle2 } from "lucide-react";

const payment = {
  id: 101,
  guestName: "Ram Bahadur Thapa",
  guestPhone: "+977 9841234567",
  amount: 12500,
  method: "eSewa",
  date: "November 20, 2025",
  status: "completed",
};

export default function GuestPaymentDetailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/guest-payments">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <Heading level="h3">Payment #{payment.id}</Heading>
          <p className="text-sm text-muted-foreground">From guest user</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Container className="p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-brand" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Guest Name</p>
                <p className="text-xl font-semibold">{payment.guestName}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone Number</p>
                <p className="text-xl font-semibold">{payment.guestPhone}</p>
              </div>
            </div>
          </div>
        </Container>

        <Container className="p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Amount Paid</p>
                <p className="text-3xl font-bold">NPR 12,500</p>
              </div>
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Payment Method</span>
                <span className="font-medium">eSewa</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-600">Paid</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium">Nov 20, 2025, 2:34 PM</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <CreditCard className="w-16 h-16 mx-auto mb-4 text-brand opacity-50" />
          <p className="text-lg font-medium">Payment receipt image will appear here</p>
          <Button variant="outline" className="mt-4">
            Download Receipt
          </Button>
        </div>
      </Container>
    </div>
  );
}