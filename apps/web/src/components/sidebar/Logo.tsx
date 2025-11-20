"use client";

import { useSidebar } from "@/components/ui/sidebar";
import svgPaths from "./svg-1bn79l4scx";

export function Logo() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <div
      className={`flex items-center gap-3 ${
        collapsed ? "justify-center" : "justify-start"
      }`}
    >
      <div className="h-9 w-12 shrink-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 70 60"
        >
          <rect fill="transparent" height="60" width="70" />
          <path d={svgPaths.p392ad500} fill="var(--fill-0, #CD1316)" />
          <path d={svgPaths.p3596c500} fill="var(--fill-0, #CD1316)" />
          <path d={svgPaths.p292cf200} fill="var(--fill-0, #CD1316)" />
        </svg>
      </div>
      {!collapsed && (
        <div className="text-sidebar-foreground">
          <h1 className="font-semibold text-base">MG Motors</h1>
          <p className="text-xs text-muted-foreground">Service Center</p>
        </div>
      )}
    </div>
  );
}
