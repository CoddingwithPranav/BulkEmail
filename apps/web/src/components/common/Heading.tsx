import { cn } from "@/lib/utils";
import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  className?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
};

export function Heading({
  level = "h2",
  children,
  className,
  ...props
}: HeadingProps) {
  const Tag = level;

  return (
    <Tag className={cn(headingStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
}
