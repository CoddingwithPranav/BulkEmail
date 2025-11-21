// app/dashboard/campaigns/create/page.tsx
import { Container, Heading } from "@/components/common";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Megaphone } from "lucide-react";

export const metadata = {
  title: "Create Campaign",
};

export default function CreateCampaignPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/campaigns">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <Heading level="h4">Create New Campaign</Heading>
            <p className="text-sm text-muted-foreground">
              Design and launch a new marketing campaign
            </p>
          </div>
        </div>
      </div>

      <Container>
        <div className="py-12 text-center">
          <Megaphone className="w-16 h-16 mx-auto text-brand mb-4" />
          <h3 className="text-xl font-semibold mb-2">Campaign Builder Coming Soon</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            SMS, WhatsApp, and Email campaign builder with templates and scheduling will be available soon.
          </p>
        </div>
      </Container>
    </div>
  );
}