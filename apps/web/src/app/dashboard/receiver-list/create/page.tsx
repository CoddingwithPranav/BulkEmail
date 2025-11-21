// app/dashboard/receiver-list/create/page.tsx
import { Container, Heading } from "@/components/common";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users } from "lucide-react";

export const metadata = {
  title: "Create Receiver List",
};

export default function CreateReceiverListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/receiver-list">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <Heading level="h3">Create New List</Heading>
          <p className="text-sm text-muted-foreground">
            Manually add receivers or import from existing data
          </p>
        </div>
      </div>

      <Container>
        <div className="py-16 text-center">
          <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-12 h-12 text-brand" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">Manual List Creation</h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Add receivers one by one or import from your contacts. Coming soon.
          </p>
          <Button variant="outline" size="lg" disabled>
            Feature in development
          </Button>
        </div>
      </Container>
    </div>
  );
}