export * from "./src/auth";
export * from "./src/campaign";
export * from "./src/file";
export * from "./src/quickSms";
export * from "./src/users";

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
