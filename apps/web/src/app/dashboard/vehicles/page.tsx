import { Container, Heading } from "@/components/common";
import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";
import { Suspense } from "react";
import DealerVehiclesTable from "./_components/DealerVehiclesTable";
import SoldVehiclesTable from "./_components/SoldVehiclesTable";
import VehiclesTable from "./_components/VehiclesTable";

export const metadata = {
  title: "Job Cards",
  description: "Create and manage job cards",
};

export default async function JobCardsPage() {
  const role = await getCurrentRole();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading className="font-semibold" level="h4">
            Vehicles
          </Heading>
          <p className="text-sm text-muted-foreground">
            Manage incoming vehicles and schedule appointments
          </p>
        </div>
      </div>
      <Container className="p-0">
        <div className="p-4">
          <Heading level="h4">Vehicles</Heading>
        </div>
        <Suspense>
          {role === SystemRole.DEALER && <DealerVehiclesTable />}
          {role === SystemRole.EMPLOYEE && <SoldVehiclesTable />}
          {role === SystemRole.ADMIN && <VehiclesTable />}
        </Suspense>
      </Container>
    </div>
  );
}
