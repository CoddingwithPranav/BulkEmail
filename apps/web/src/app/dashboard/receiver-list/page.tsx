// app/dashboard/receiver-list/page.tsx
import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import ReceiverListTable from "./_components/ReceiverListTable";

export const metadata = {
  title: "Receiver List",
  description: "Manage your contact lists and uploaded receivers",
};

export default function ReceiverListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading level="h3" className="font-semibold">
            Receiver Lists
          </Heading>
          <p className="text-sm text-muted-foreground mt-1">
            Upload and manage contact lists for SMS campaigns
          </p>
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard/receiver-list/upload">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload New List
            </Button>
          </Link>
          <Link href="/dashboard/receiver-list/create">
            <Button variant="brand">
              <Plus className="mr-2 h-4 w-4" />
              Create List
            </Button>
          </Link>
        </div>
      </div>

      <Container className="p-0">
        <Suspense fallback={<div className="p-12 text-center">Loading receiver lists...</div>}>
          <ReceiverListTable />
        </Suspense>
      </Container>
    </div>
  );
}