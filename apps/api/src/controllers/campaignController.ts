// src/controllers/campaignController.ts
import { AuthRequest } from "../middleware/auth";
import { Response } from "express";
import * as campaignService from "../services/campaignService";
import logger from "@repo/config/logger";

export const createCampaign = async (req: AuthRequest, res: Response) => {
  try {
    const campaign = await campaignService.createCampaign(req.user!.id, req.body);
    res.status(201).json({
      success: true,
      message: "Campaign submitted for approval",
      data:  campaign ,
    });
  } catch (err: any) {
    logger.error("Create campaign failed", { error: err.message, userId: req.user?.id });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getMyCampaigns = async (req: AuthRequest, res: Response) => {
  try {
    const result = await campaignService.getUserCampaigns(req.user!.id, {
      page: Number(req.query.page) || 1,
      limit: Math.min(Number(req.query.limit) || 10, 100),
      search: req.query.q as string,
    });
    res.json({ success: true,pagination: result.pagination, data: result.campaigns  });
  } catch (err: any) {
    res.status(500).json({ success: false, message: "Failed to fetch campaigns" });
  }
};

export const getCampaignById = async (req: AuthRequest, res: Response) => {
  try {
    const campaign = await campaignService.getCampaignById(req.params.id!, req.user!.id);
    if (!campaign) {
      return res.status(404).json({ success: false, message: "Campaign not found" });
    }
    res.json({ success: true, data:  campaign  });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateCampaign = async (req: AuthRequest, res: Response) => {
  try {
    const campaign = await campaignService.updateCampaign(req.params.id!, req.user!.id, req.body);
    res.json({ success: true, message: "Campaign updated", data: campaign  });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteCampaign = async (req: AuthRequest, res: Response) => {
  try {
    await campaignService.deleteCampaign(req.params.id!, req.user!.id);
    res.json({ success: true, message: "Campaign deleted successfully" });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const approveOrCancelCampaign = async (req: AuthRequest, res: Response) => {
  try {
    const { action, reason } = req.body;
    const campaign = await campaignService.approveOrCancelCampaign(req.params.id!, action, reason);
    logger.warn("Campaign status changed", { campaignId: campaign.id, action, by: req.user!.id });
    res.json({ success: true, message: `Campaign ${action.toLowerCase()}`, data:  campaign  });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllCampaigns = async (_req: AuthRequest, res: Response) => {
  try {
    const campaigns = await campaignService.getAllCampaignsForAdmin();
    res.json({ success: true, data: campaigns  });
  } catch (err: any) {
    res.status(500).json({ success: false, message: "Failed to fetch campaigns" });
  }
};