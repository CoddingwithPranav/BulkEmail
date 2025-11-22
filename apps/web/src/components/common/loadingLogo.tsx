"use client";
import { cn } from "@/lib/utils";
import { Mountain, Send } from "lucide-react";

export function LoadingLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative">
        <Mountain className={cn(
          "text-brand animate-pulse",
          size === "sm" && "h-10 w-10",
          size === "md" && "h-16 w-16",
          size === "lg" && "h-24 w-24"
        )} />

        <Send className={cn(
          "absolute -bottom-2 -right-2 text-primary animate-blink",
          size === "sm" && "h-5 w-5",
          size === "md" && "h-7 w-7",
          size === "lg" && "h-10 w-10"
        )} />
      </div>
      <p className="mt-6 text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
}