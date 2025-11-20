import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SystemRole } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hasAccess = (role: SystemRole, allowedRoles: SystemRole[]) => {
  return allowedRoles.includes(role);
};
