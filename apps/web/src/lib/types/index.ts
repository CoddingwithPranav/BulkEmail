import { CreateCampaignInput } from "../schemas/campaigns.schema";

export type InitalResponse<T> = {
  success: boolean;
  message: string;
  data: T;
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

export type CampaignsResponse = InitalResponse<{
  campaigns: CreateCampaignInput[];
  count: number;
}>;

export type Campaign ={
  id: string;
  name: string;
  type: string;
  recipients: number;
  sentDate: string | null;
  budget: number;
  conversions: number;
  status: "completed" | "sent" | "scheduled"; 
}
