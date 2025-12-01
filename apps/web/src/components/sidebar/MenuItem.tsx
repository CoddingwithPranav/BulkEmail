"use client";

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Home,
  Megaphone,
  Users,
  CreditCard,
  UserPlus,
  Settings,
  BarChart,
  Building,
  Car,
  CarFront,
  Receipt,
  User,
  Wrench,
  ContactRound,
  BaggageClaim
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuItemProps = {
  item: {
    name: string;
    href: string;
    icon: string;
    count?: number;
  };
};

const iconMap = {
  Home,
  Megaphone,
  Users,
  CreditCard,
  UserPlus,
  Settings,
  BarChart,
  Building,
  Car,
  CarFront,
  Receipt,
  ContactRound,
  User,
  Wrench,
  BaggageClaim
} as const;

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  const isActive =
    item.href === "/dashboard"
      ? pathname === item.href
      : pathname === item.href || pathname.startsWith(item.href + "/");

  const Icon = iconMap[item.icon as keyof typeof iconMap];

  return (
    <div className="relative group">
      <SidebarMenuButton
        asChild
        tooltip={{
          children: item.name,
          hidden: !collapsed,
        }}
        className={cn(
          "w-full h-10 justify-start gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
          collapsed && "justify-center",
          isActive
            ? "bg-brand text-white shadow-md ring-2 ring-brand/20 hover:bg-brand hover:text-white"
            : "hover:bg-accent hover:text-accent-foreground"
        )}
      >
        <Link href={item.href} className="flex items-center w-full">
          {Icon && (
            <Icon
              className={cn(
                "h-4.5 w-4.5 shrink-0",
                isActive && "text-white"
              )}
            />
          )}

          {!collapsed && (
            <div className="flex flex-1 items-center justify-between">
              <span className="truncate">{item.name}</span>

              {item.count !== undefined && (
                <span
                  className={cn(
                    "ml-auto rounded-full px-2 py-0.5 text-xs font-semibold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-accent/50 text-accent-foreground"
                  )}
                >
                  {item.count}
                </span>
              )}
            </div>
          )}
        </Link>
      </SidebarMenuButton>

      {/* Active Indicator Bar */}
      {isActive && (
        <div
          className={cn(
            "absolute inset-y-2 w-1 bg-white rounded-r-full",
            collapsed ? "-left-1" : "left-0"
          )}
        />
      )}
    </div>
  );
};