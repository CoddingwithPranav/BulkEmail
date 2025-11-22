export type InitialResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  count?: number;
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


