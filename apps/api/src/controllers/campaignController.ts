import { dbClient } from "@repo/db/client";
import { Request, Response } from "express";
import logger from "../config/logger";
import { AuthRequest } from "../middleware/auth";

export const createCampaign = async (req: AuthRequest, res: Response) => {
  const { fileId, manualReceivers, ...data } = req.body;

  try {
    const campaign = await dbClient.campaign.create({
      data: {
        ...data,
        userId: req.user.id,
        recipientsNumber: manualReceivers ? manualReceivers.length : undefined,
        submitDate: new Date(),
      },
    });

    logger.info("Campaign created", {
      campaignId: campaign.id,
      userId: req.user.id,
    });
    res
      .status(201)
      .json({ message: "Campaign submitted for approval", campaign });
  } catch (err: any) {
    logger.error("Campaign creation failed", { error: err.message });
    res.status(400).json({ message: err.message });
  }
};

export const getMyCampaigns = async (req: AuthRequest, res: Response) => {
  const query = req.query;

  // Default values
  const page = Number(query.page) || 1;
  const limit = Math.min(Number(query.limit) || 10, 100);
  const skip = (page - 1) * limit;
  const search = query.q as string | undefined;

  console.log("Pagination →", { page, limit, skip });

  const whereClause: any = {
    userId: req.user.id,
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { province: { contains: search, mode: "insensitive" } },
      ],
    }),
  };
  console.log("Where Clause →", whereClause);
  try {
    const [campaigns, totalCampaigns] = await dbClient.$transaction([
      dbClient.campaign.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        where: whereClause,
      }),
      dbClient.campaign.count({
        where: { userId: req.user.id },
      }),
    ]);

    const totalPages = Math.ceil(totalCampaigns / limit);

    res.json({
      status: "success",
      data: {
        campaigns,
        count: totalCampaigns,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalCampaigns,
          perPage: limit,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch campaigns",
    });
  }
};
export const getAllCampaigns = async (_req: Request, res: Response) => {
  const campaigns = await dbClient.campaign.findMany({
    include: { user: { select: { email: true, organizationName: true } } },
    orderBy: { submitDate: "desc" },
  });
  res.status(200).json({
    status: "success",
    data: {
      campaigns,
    },
  });
};

export const getCampaignById = async (req: AuthRequest, res: Response) => {
  console.log("Fetching campaign with ID:", req.params.id);
  const data = await dbClient.campaign.findFirst({
    where: { id: req.params.id, userId: req.user.id },
    include: { file: true },
  });
  if (!data) return res.status(404).json({ message: "Campaign not found" });
  res.json({
    status: "success",
    data,
  });
};

export const updateCampaign = async (req: AuthRequest, res: Response) => {
  console.log("Updating campaign with ID:", req.params.id, req.body);
  const campaign = await dbClient.campaign.update({
    where: { id: req.params.id, userId: req.user.id },
    data: req.body,
  });
  logger.info("Campaign updated", { campaignId: campaign.id });
  res.json({ message: "Campaign updated", campaign });
};

export const deleteCampaign = async (req: AuthRequest, res: Response) => {
  await dbClient.campaign.delete({
    where: { id: req.params.id, userId: req.user.id },
  });
  logger.info("Campaign deleted", { campaignId: req.params.id });
  res.json({ message: "Campaign deleted" });
};

export const approveOrCancelCampaign = async (
  req: AuthRequest,
  res: Response
) => {
  const { action, reason } = req.body;
  const campaign = await dbClient.campaign.update({
    where: { id: req.params.id },
    data: { status: action },
  });

  logger.warn("Campaign status changed", {
    campaignId: campaign.id,
    newStatus: action,
    reason,
    by: req.user.id,
  });

  res.json({ message: `Campaign ${action.toLowerCase()}`, campaign });
};
