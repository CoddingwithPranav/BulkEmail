import { Button } from "@/components/ui/button";
import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";
import { hasAccess } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import CreateServiceRequest from "./_components/CreateServiceRequest";

export default async function ServiceCreatePage() {
  const role = await getCurrentRole();

  if (!hasAccess(role, [SystemRole.EMPLOYEE])) {
    redirect("/not-authorized");
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Create Service Request</h1>
          <p className="text-sm text-muted-foreground">
            Record a new Service Request
          </p>
        </div>

        <Link href="/service-requests" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <CreateServiceRequest />
    </div>
  );
}
