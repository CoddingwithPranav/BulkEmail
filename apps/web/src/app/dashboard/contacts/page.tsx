import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import CampaignsTable from "./_components/ContactTable";

export const metadata = {
  title: "Campaigns",
  description: "Manage and track marketing campaigns",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading level="h3" className="font-semibold">
            Contacts
          </Heading>
          <p className="text-sm text-muted-foreground mt-1">
            Yours contacts list
          </p>
        </div>
        <div>
          <Link href="/dashboard/contacts/upload">
            <Button variant="outline" className="mr-5">
              <Download className="mr-2 h-4 w-4" />
              Import Contacts
            </Button>
          </Link>
          <Link href="/dashboard/contacts/create">
            <Button variant="brand">
              <Plus className="mr-2 h-4 w-4" />
              New Contact
            </Button>
          </Link>
        </div>
      </div>

      <Container className="p-0 overflow-hidden">
        <CampaignsTable />
      </Container>
    </div>
  );
}
