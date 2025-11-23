import { SystemRole } from '@repo/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hasAccess = (role: SystemRole, allowedRoles: SystemRole[]) => {
  return allowedRoles.includes(role);
};
