import { useAuthStore } from "@/lib/store";
import { SystemRole } from "@repo/types";
import React from "react";

interface OnlyForProps {
  children: React.ReactNode;
  allowedRoles: SystemRole[];
}

export const OnlyFor: React.FC<OnlyForProps> = ({ children, allowedRoles }) => {
  const user = useAuthStore((state) => state.user);
  if (!user?.role || !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
};
