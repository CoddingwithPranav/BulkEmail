"use client";

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Building,
  Car,
  CarFront,
  Receipt,
  Settings,
  User,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type MenuItemProps = {
  item: {
    name: string;
    href: string;
    icon: string;
    // Children?: MenuItemProps['item'][];
    Children?: MenuChildItem[];
    count?: number;
  };
};

type MenuChildItem = {
  name: string;
  href: string;
};

const iconMap = {
  BarChart,
  Car,
  Wrench,
  User,
  Building,
  Receipt,
  Settings,
  CarFront,
};

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const isActive =
    pathname === item.href ||
    (pathname.startsWith(item.href + "/") && item.href !== "/admin");

  const Icon = iconMap[item.icon as keyof typeof iconMap];

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (item.Children) {
      setOpen(!open);
    }
  };

  return (
    <>
      <SidebarMenuButton
        onClick={handleToggle}
        tooltip={item.name}
        className={cn(
          "w-full justify-start gap-3 cursor-pointer",
          collapsed && "justify-center",
          isActive && "bg-brand text-white hover:bg-brand/80 hover:text-white"
        )}
        asChild
      >
        <Link href={item.href}>
          <Icon className="h-4 w-4 " />
          {!collapsed && (
            <>
              <div className="flex flex-1 items-center justify-between">
                <span className="font-normal ">{item.name}</span>
                <div className="flex items-center gap-2">
                  {item.count !== undefined && (
                    <span className="rounded-full bg-white-100 px-2 py-0.5 text-xs font-semibold text-black-800">
                      {item.count}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </Link>
      </SidebarMenuButton>
    </>
  );
};
