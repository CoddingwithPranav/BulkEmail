import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";
import { hasAccess } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function CustomersRequestsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await getCurrentRole();

   if (!hasAccess(role, [SystemRole.ADMIN, SystemRole.USER, SystemRole.SUPER_ADMIN])) {
    redirect("/not-authorized");
  }

  return <>{children}</>;
}
