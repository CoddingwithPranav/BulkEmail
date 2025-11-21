"use client";

import { useSidebar } from "@/components/ui/sidebar";
import svgPaths from "./svg-1bn79l4scx";
import { Mountain, Send } from "lucide-react";
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
           <div className="container mx-auto flex h-16 items-center justify-between">
            <div className="relative mb-5 ml-2">
              <Mountain className="h-8 w-8 text-brand rotate-12 group-hover:rotate-6 transition-transform" />
              <Send className="h-5 w-5 text-primary absolute -bottom-1 -right-1" />
            </div>
          </div>
      </div>
      {!collapsed && (
        <div className="text-sidebar-foreground h-full mt-3">
          <h1 className="font-semibold text-base">Message Nepal</h1>
        </div>
      )}
    </div>
    </Link>     
  );
}
