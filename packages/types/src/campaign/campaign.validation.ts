
import { z } from "zod";
import {
  createCampaignSchema,
  updateCampaignSchema,
  approveCampaignSchema,
} from "./campaign.schema";

const paramsId = z.object({
  id: z.string().transform(Number).pipe(z.number().int().positive()),
});

export const createCampaignValidationSchema = z.object({ body: createCampaignSchema });

export const updateCampaignValidationSchema = z.object({
  body: updateCampaignSchema,
  params: paramsId,
});

export const approveCampaignValidationSchema = z.object({
  body: approveCampaignSchema,
  params: paramsId,
});