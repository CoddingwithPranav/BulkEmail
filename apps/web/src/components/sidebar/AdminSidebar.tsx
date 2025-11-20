import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Logo } from './Logo';
import { MenuItems } from './MenuItems';

export const AdminSidebar = () => {
  return (
    <Sidebar className="lg:w-64" collapsible="icon">
      <SidebarHeader className="border-b h-16">
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        {' '}
        <MenuItems />
      </SidebarContent>

      {/* <SidebarFooter className="flex py-4">
        <div className="flex items-start">
          <SidebarDropdownMenu />
        </div>
      </SidebarFooter> */}

      <SidebarRail />
    </Sidebar>
  );
};
