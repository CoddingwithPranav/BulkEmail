export * from "./src/auth";
export * from "./src/campaign";
export * from "./src/file";
export * from "./src/quickSms";
export * from "./src/receiver";
export * from "./src/users";
export * from "./src/categories";
export * from "./src/myContact";
export * from "./src/price";

export type InitialResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  pagination?: {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
};
export type BaseQueryParams = {
  q?: string | null;
  page?: number | null;
  limit?: number | null;
  i?: string | null;
};

export enum SystemRole {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPERADMIN",
  USER = "USER",
}

export * from "zod";
export interface DashboardData {
  stats: {
    totalContacts: number;
    totalInvalidContacts: number;
    totalContactsAll: number;
    totalFilesUploaded: number;
    totalPaidNPR: number;
    totalMessagesSent: number;
    avgDeliveryRate: number;
    activeCategories: number;
  };
  categories: Array<{
    id: string;
    name: string;
    description: string | null;
    recipientCount: number;
    createdAt: Date;
  }>;
  campaigns: Array<{
    id: string;
    name: string;
    status: string;
    deliveryStatus: string;
    totalRecipients: number | null;
    totalDelivered: number;
    deliveryRate: number | null;
    totalCost: number | null;
    paid: boolean;
    createdAt: Date;
  }>;
}