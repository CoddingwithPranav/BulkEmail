export * from "./src/campaign";
export * from "./src/auth";
export * from "./src/quickSms";
export * from "./src/file";
export * from "./src/users";


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


