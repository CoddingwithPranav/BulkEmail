import { z } from "zod";
import {
  approveCampaignSchema,
  createCampaignSchema,
  updateCampaignSchema,
} from "./campaign.schema";

const paramsId = z.object({
  id: z.string().uuid(),
});

export const createCampaignValidationSchema = z.object({
  body: createCampaignSchema,
});

export const updateCampaignValidationSchema = z.object({
  body: updateCampaignSchema,
  params: paramsId,
});

export const approveCampaignValidationSchema = z.object({
  body: approveCampaignSchema,
  params: paramsId,
});
