import { Container, Heading } from "@/components/common";

import { Button } from "@/components/ui/button";
import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import ServiceRequestsTable from "./_components/ServiceRequestsTable";

export const metadata = {
  title: "Service Requests",
  description: "Create and manage service requests",
};

const ServiceRequestsPage = async () => {
  const role = await getCurrentRole();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading className="font-semibold" level="h4">
            Service Requests
          </Heading>
          <p className="text-sm text-muted-foreground">
            Manage incoming service requests and schedule appointments
          </p>
        </div>
        {role === SystemRole.EMPLOYEE && (
          <div className="flex items-center justify-center gap-x-2">
            <Link
              href="/service-requests/create"
              className="flex gap-2 items-center"
            >
              <Button variant={"brand"} className="cursor-pointer">
                <Plus className="mr-2 h-4 w-4" />
                Create Service Request
              </Button>
            </Link>
          </div>
        )}
      </div>
      <Container className="p-0">
        <div className="p-4">
          <Heading level="h4">Service Requests</Heading>
        </div>
        <Suspense>
          <ServiceRequestsTable />
        </Suspense>
      </Container>
    </div>
  );
};

export default ServiceRequestsPage;
