import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AdminHeader } from "@/components/header";
import { AdminSidebar } from "@/components/sidebar";

export default async function AdminProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getCurrentUser();
  // if (!user) redirect("/login");

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AdminSidebar />
        <SidebarInset className="w-[calc(100%-256px)]">
          <div className="flex flex-col w-full flex-1 h-full">
            <AdminHeader />
            <div className="flex-1 w-full overflow-y-auto py-2 px-4">
              {children}
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
