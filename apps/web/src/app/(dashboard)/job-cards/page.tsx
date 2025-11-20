import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import JobCardTable from "./_components/JobCardTable";

export const metadata = {
  title: "Job Cards",
  description: "Create and manage job cards",
};

export default function JobCardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading className="font-semibold" level="h4">
            Job Cards
          </Heading>
          <p className="text-sm text-muted-foreground">
            Manage incoming job cards and schedule appointments
          </p>
        </div>
      </div>
      <Container className="p-0">
        <div className="p-4">
          <Heading level="h4">Job Cards</Heading>
        </div>
        <Suspense>
          <JobCardTable />
        </Suspense>
      </Container>
    </div>
  );
}
