import { cn } from "@/lib/utils";
import React from "react";

type TextProps = {
  size?: "xsmall" | "small" | "base" | "large" | "xlarge";
  weight?: "regular" | "plus";
  family?: "sans" | "mono";
  leading?: "normal" | "compact";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

const sizeClasses: Record<NonNullable<TextProps["size"]>, string> = {
  xsmall: "text-xs",
  small: "text-sm",
  base: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
};

const weightClasses: Record<NonNullable<TextProps["weight"]>, string> = {
  regular: "font-normal",
  plus: "font-semibold",
};

const familyClasses: Record<NonNullable<TextProps["family"]>, string> = {
  sans: "font-sans",
  mono: "font-mono",
};

const leadingClasses: Record<NonNullable<TextProps["leading"]>, string> = {
  normal: "leading-normal",
  compact: "leading-tight",
};

export const Text: React.FC<TextProps> = ({
  size = "base",
  weight = "regular",
  family = "sans",
  leading = "normal",
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        familyClasses[family],
        leadingClasses[leading],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
