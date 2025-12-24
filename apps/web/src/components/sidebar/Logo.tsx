"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Mountain, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <Link href="/" className="cursor-pointer" >
    <div
      className={`flex items-center gap-3 ${
        collapsed ? "justify-center" : "justify-start"
      }`}
    >
      <div className="h-9 w-12 shrink-0">
           <div className="flex items-center justify-center">
             <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
          </div>
      </div>
      {!collapsed && (
        <div className="text-sidebar-foreground h-full pr-5">
          <h1 className="font-semibold text-base "> BulkEmail</h1>
        </div>
      )}
    </div>
    </Link>     
  );
}
