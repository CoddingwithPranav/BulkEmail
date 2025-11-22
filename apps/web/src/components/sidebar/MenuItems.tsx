import { getNavGroupsByRole } from "@/hooks/use-nav-groups";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu } from "../ui/sidebar";
import { MenuItem } from "./MenuItem";

export const MenuItems = async () => {
  const { navItems } = await getNavGroupsByRole();
  console.log("Nav Items in MenuItems:", navItems);
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {navItems.map((item) => {
            return <MenuItem key={item.name} item={item} />;
          })}
        </SidebarMenu>
      </SidebarGroup>
      {/* <SidebarGroup>
        <SidebarGroupLabel>System</SidebarGroupLabel>
        <SidebarMenu>
          {navItems.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </SidebarMenu>
      </SidebarGroup> */}
    </>
  );
};
