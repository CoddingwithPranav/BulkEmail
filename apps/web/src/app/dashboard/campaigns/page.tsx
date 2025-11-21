import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CampaignsTable from "./_components/CampaignsTable";

export const metadata = {
  title: "Campaigns",
  description: "Manage and track marketing campaigns",
};

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading level="h3" className="font-semibold">
            Campaigns
          </Heading>
          <p className="text-sm text-muted-foreground mt-1">
            Create and monitor SMS, WhatsApp, and Email campaigns
          </p>
        </div>

        <Link href="/dashboard/campaigns/create">
          <Button variant="brand">
            <Plus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </Link>
      </div>

      <Container className="p-0 overflow-hidden">
        <Suspense fallback={<div className="p-8 text-center">Loading campaigns...</div>}>
          <CampaignsTable />
        </Suspense>
      </Container>
    </div>
  );
}