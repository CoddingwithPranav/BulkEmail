// app/dashboard/receiver-list/[id]/page.tsx
import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users, Phone, MapPin, FileText } from "lucide-react";

export const metadata = {
  title: "Receiver List Details",
};

// Dummy data for demo
const listDetails = {
  id: 1,
  name: "diwali_customers_2025.csv",
  uploadedAt: new Date("2025-11-01"),
  totalReceivers: 2847,
  validReceivers: 2832,
  invalidNumbers: 15,
};

export default function ReceiverListDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/receiver-list">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <Heading level="h3">{listDetails.name}</Heading>
          <p className="text-sm text-muted-foreground">
            Uploaded on {listDetails.uploadedAt.toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Container className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-brand/10 rounded-lg">
              <Users className="w-6 h-6 text-brand" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Receivers</p>
              <p className="text-2xl font-bold">{listDetails.totalReceivers.toLocaleString()}</p>
            </div>
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Valid Numbers</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {listDetails.validReceivers.toLocaleString()}
              </p>
            </div>
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Invalid</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {listDetails.invalidNumbers}
              </p>
            </div>
          </div>
        </Container>

        <Container className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {((listDetails.validReceivers / listDetails.totalReceivers) * 100).toFixed(1)}%
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="p-0">
        <div className="p-6 border-b">
          <Heading level="h5">All Receivers</Heading>
        </div>
        <div className="p-8 text-center text-muted-foreground">
          <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Receiver table with pagination, search, and filters coming soon...</p>
        </div>
      </Container>
    </div>
  );
}