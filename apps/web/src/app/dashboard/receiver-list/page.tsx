// app/dashboard/receiver-list/page.tsx
import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
        </div>

        <div className="flex ">
          <Link href="/dashboard/receiver-list/create">
            <Button variant="brand">
              <Plus className="mr-1 h-4 w-4" />
              Create Receiver
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