import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Plus } from "lucide-react";
import GuestPaymentsTable from "./_components/GuestPaymentsTable";

export const metadata = {
  title: "Guest Payments",
  description: "Manage payments from guest (non-registered) users",
};

export default function GuestPaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading level="h3" className="font-semibold">
            Guest Payments
          </Heading>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage payments made by temporary guest accounts
          </p>
        </div>

        <Link href="/dashboard/guest-payments/create">
          <Button variant="brand">
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Container className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Payments</p>
              <p className="text-2xl font-bold">87</p>
            </div>
            <CreditCard className="w-10 h-10 text-brand opacity-20" />
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">This Month</p>
              <p className="text-2xl font-bold text-green-600">NPR 842,000</p>
            </div>
            <div className="text-3xl">Up arrow</div>
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending Approval</p>
              <p className="text-2xl font-bold text-orange-600">12</p>
            </div>
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <p className="text-2xl font-bold text-blue-600">94.2%</p>
            </div>
            <div className="text-3xl">Chart icon</div>
          </div>
        </Container>
      </div>

      <Container className="p-0">
        <div className="p-6 border-b">
          <Heading level="h5">Recent Guest Payments</Heading>
        </div>
        <Suspense fallback={<div className="p-12 text-center">Loading payments...</div>}>
          <GuestPaymentsTable />
        </Suspense>
      </Container>
    </div>
  );
}