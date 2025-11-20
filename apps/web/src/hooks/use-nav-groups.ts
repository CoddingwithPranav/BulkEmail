"use server";

import { getCurrentRole } from "@/lib/data/cookies";
import { SystemRole } from "@/lib/types";

const navItems = [
  { name: "Dashboard", href: "/", icon: "BarChart" },
  { name: "Service Requests", href: "/service-requests", icon: "Car" },
  { name: "Job Cards", href: "/job-cards", icon: "Wrench" },
];

const businessNav = [
  { name: "Vehicle Sales", href: "/vehicle-sales", icon: "Car" },
  { name: "Vehicles", href: "/vehicles", icon: "CarFront" },
  { name: "Customers", href: "/customers", icon: "User" },
  // { name: "Dealers", href: "/dealers", icon: "Building" },
  { name: "Invoices", href: "/invoices", icon: "Receipt", count: 12 },
];

const othersNav = [{ name: "Settings", href: "/settings", icon: "Settings" }];

export const getNavGroupsByRole = async () => {
  const role = await getCurrentRole();

  if (!role) {
    return { navItems: [], businessNav: [], othersNav: [] };
  }

  switch (role) {
    case SystemRole.DEALER:
      return {
        navItems: navItems.filter((item) => item.name === "Dashboard"),
        businessNav: businessNav.filter((item) =>
          ["Vehicle Sales", "Customers", "Vehicle"].includes(item.name)
        ),
        othersNav: [],
      };
    case SystemRole.EMPLOYEE:
      return {
        navItems: navItems.filter((item) =>
          ["Dashboard", "Service Requests", "Job Cards"].includes(item.name)
        ),
        businessNav: businessNav.filter((item) =>
          ["Vehicles", "Invoices"].includes(item.name)
        ),
        othersNav: [],
      };
    case SystemRole.ADMIN:
      return {
        navItems,
        businessNav: businessNav.filter(
          (item) => !["Vehicle Sales", "Invoices"].includes(item.name)
        ),
        othersNav,
      };
    default:
      return { navItems: [], businessNav: [], othersNav: [] };
  }
};
