import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";
import { hasAccess } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function VehicleSalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await getCurrentRole();

  if (!hasAccess(role, [SystemRole.ADMIN, SystemRole.DEALER])) {
    redirect("/not-authorized");
  }

  return <>{children}</>;
}
