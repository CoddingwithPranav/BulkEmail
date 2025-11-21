import { Container, Heading } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import ServiceTable from "./_components/VehicleSalesTable";

export const metadata = {
  title: "Service Requests",
  description: "Create and manage service requests",
};

const VehicleSalesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading className="font-semibold" level="h4">
            Vehicle Sales
          </Heading>
          <p className="text-sm text-muted-foreground">
            Manage and track all the vehicle sales
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <Link
            href="/vehicle-sales/create"
            className="flex gap-2 items-center"
          >
            <Button variant={"brand"} className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Create Vehicle Sales
            </Button>
          </Link>
        </div>
      </div>
      <Container className="p-0">
        <div className="p-4">
          <Heading level="h4">Vehicle Sales</Heading>
        </div>
        <Suspense>
          <ServiceTable />
        </Suspense>
      </Container>
    </div>
  );
};

export default VehicleSalesPage;
