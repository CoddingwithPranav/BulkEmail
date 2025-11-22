import { Request, Response } from "express";
import prisma from "../config/database";
import logger from "../config/logger";
import { AuthRequest } from "../middleware/auth";

export const createCampaign = async (req: AuthRequest, res: Response) => {
  const { fileId, manualReceivers, ...data } = req.body;

  try {
    // Handle manual receivers
    let receiversData: any[] = [];
    if (manualReceivers && manualReceivers.length > 0) {
      const tempFile = await prisma.files.create({
        data: {
          userId: req.user.id,
          name: "Manual Entry",
          type: "CSV",
          uploadStatus: "UPLOADED",
          numberOfReceivers: manualReceivers.length,
        },
      });
      receiversData = manualReceivers.map((r: any) => ({
        ...r,
        fileId: tempFile.id,
      }));
      await prisma.receiver.createMany({ data: receiversData });
      data.fileId = tempFile.id;
    }

    const campaign = await prisma.campaign.create({
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
  const [campaigns, totalCampaigns] = await prisma.$transaction([
        prisma.campaign.findMany({
          skip: 0,
          take: 10,
          orderBy: {
            createdAt: 'desc',
          },
          where: { userId: req.user.id },
        }),
      prisma.campaign.count({
        where: { userId: req.user.id },
      }),
    ]);

  res.json({
    status: "success",
    data: {
      campaigns,
      count: totalCampaigns
    },
  });
};

export const getAllCampaigns = async (_req: Request, res: Response) => {
  const campaigns = await prisma.campaign.findMany({
    include: { user: { select: { email: true, organizationName: true } } },
    orderBy: { submitDate: "desc" },
    count: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      campaigns,
    },
  });
};

export const getCampaignById = async (req: AuthRequest, res: Response) => {
  const data = await prisma.campaign.findFirst({
    where: { id: Number(req.params.id), userId: req.user.id },
    include: { file: true },
  });
  if (!data) return res.status(404).json({ message: "Campaign not found" });
  res.json({ 
    status: "success",
    data
   });
};

export const updateCampaign = async (req: AuthRequest, res: Response) => {
  const campaign = await prisma.campaign.update({
    where: { id: Number(req.params.id), userId: req.user.id },
    data: req.body,
  });
  logger.info("Campaign updated", { campaignId: campaign.id });
  res.json({ message: "Campaign updated", campaign });
};

export const deleteCampaign = async (req: AuthRequest, res: Response) => {
  await prisma.campaign.delete({
    where: { id: Number(req.params.id), userId: req.user.id },
  });
  logger.info("Campaign deleted", { campaignId: req.params.id });
  res.json({ message: "Campaign deleted" });
};

export const approveOrCancelCampaign = async (
  req: AuthRequest,
  res: Response
) => {
  const { action, reason } = req.body;
  const campaign = await prisma.campaign.update({
    where: { id: Number(req.params.id) },
    data: { status: action, isEmailSent: true },
  });

  logger.warn("Campaign status changed", {
    campaignId: campaign.id,
    newStatus: action,
    reason,
    by: req.user.id,
  });

  res.json({ message: `Campaign ${action.toLowerCase()}`, campaign });
};
