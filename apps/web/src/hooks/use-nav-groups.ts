"use server";

import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@repo/types";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "Home" },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: "Megaphone" },
  { name: "Contacts", href: "/dashboard/contacts", icon: "ContactRound" },
  { name: "Receiver List", href: "/dashboard/receiver-list", icon: "Users" }, 
{ name: "Categories", href: "/dashboard/categories", icon: "BaggageClaim" }
];

const adminItems = [
   { name: "Guest Payments", href: "/dashboard/guest-payments", icon: "CreditCard" },
]
const superAdminItems = [
   { name: "User Management", href: "/dashboard/user-management", icon: "UserPlus" },
   { name: "System Settings", href: "/dashboard/system-settings", icon: "Settings" },
]


export const getNavGroupsByRole = async () => {
  const role = await getCurrentRole();
  console.log("Current Role in use-nav-groups:", role);

  if (!role) {
    return { navItems: [], businessNav: [], othersNav: [] };
  }
  

  switch (role) {
    case SystemRole.USER:
      return {
        navItems: navItems,
        othersNav: [],
      };
    case SystemRole.ADMIN:
      return {
        navItems: [...navItems, ...adminItems],
        othersNav: [],
      };
    case SystemRole.SUPER_ADMIN:
      return {
        navItems:[...navItems,...adminItems, ...superAdminItems],
        othersNav:[],
      };
    default:
      return { navItems: [], businessNav: [], othersNav: [] };
  }
};
