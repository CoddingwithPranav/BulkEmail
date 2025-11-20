import { Container, Heading } from "@/components/common";
import { Suspense } from "react";
import ServiceTable from "./_components/DealersTable";

export const metadata = {
  title: "Dealers",
  description: "Create and manage service requests",
};

const DealersPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading className="font-semibold" level="h4">
            Dealers
          </Heading>
          <p className="text-sm text-muted-foreground">
            Manage and track all the dealers
          </p>
        </div>
        {/* <div className="flex items-center justify-center gap-x-2">
          <Link href="/customers/create" className="flex gap-2 items-center">
            <Button variant={"brand"} className="cursor-pointer">
              <Plus className="mr-2 h-4 w-4" />
              Create Dealer
            </Button>
          </Link>
        </div> */}
      </div>
      <Container className="p-0">
        <div className="p-4">
          <Heading level="h4">Dealers</Heading>
        </div>
        <Suspense>
          <ServiceTable />
        </Suspense>
      </Container>
    </div>
  );
};

export default DealersPage;
