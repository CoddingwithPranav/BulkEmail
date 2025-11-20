import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-full border bg-card text-card-foreground rounded-xl p-4 shadow-sm mb-6",
        className
      )}
    >
      {children}
    </div>
  );
};
