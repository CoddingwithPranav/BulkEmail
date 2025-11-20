import { getNavGroupsByRole } from "@/hooks/use-nav-groups";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "../ui/sidebar";
import { MenuItem } from "./MenuItem";

export const MenuItems = async () => {
  const { navItems, businessNav } = await getNavGroupsByRole();
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {navItems.map((item) => {
            return <MenuItem key={item.name} item={item} />;
          })}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Business</SidebarGroupLabel>
        <SidebarMenu>
          {businessNav.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroup>
      {/* <SidebarGroup>
        <SidebarGroupLabel>System</SidebarGroupLabel>
        <SidebarMenu>
          {othersNav.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroup> */}
    </>
  );
};
