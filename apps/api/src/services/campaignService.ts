import { dbClient } from "@repo/db/client";
import { emailSendingQueue } from "../jobs/queues";

interface PaginationOptions {
  page: number;
  limit: number;
  search?: string;
}

export const createCampaign = async (
  userId: string,
  data: {
    name: string;
    messageText: string;
    categoryId: string;
    province?: string;
    district?: string;
    municipality?: string;
    totalSmsCost?: number;
    paymentReceiptImage?: string;
  }
) => {
  const category = await dbClient.category.findUnique({
    where: { id: data.categoryId, userId },
  });

  if (!category) {
    throw new Error("Invalid category or access denied");
  }

  const recipientCount = await dbClient.my_Contact.count({
    where: {
      userId,
      categoryId: data.categoryId,
      isDeleted: false,
      phoneNumber: { not: "" },
    },
  });

  if (recipientCount === 0) {
    throw new Error("Selected category has no valid contacts");
  }

  return await dbClient.campaign.create({
    data: {
      ...data,
      userId,
      totalRecipients: recipientCount,
      submitDate: new Date(),
      status: "PENDING",
      deliveryStatus: "NOT_STARTED",
    },
  });
};

export const getUserCampaigns = async (userId: string, options: PaginationOptions) => {
  const { page, limit, search } = options;
  const skip = (page - 1) * limit;

  const where: any = {
    userId,
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { category: { name: { contains: search, mode: "insensitive" } } },
      ],
    }),
  };

  const [campaigns, total] = await dbClient.$transaction([
    dbClient.campaign.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        category: { select: { name: true } },
      },
    }),
    dbClient.campaign.count({ where }),
  ]);

  return {
    campaigns,
    pagination: {
      currentPage: page,
      perPage: limit,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1,
    },
  };
};

export const getCampaignById = async (campaignId: string, userId: string) => {
  return await dbClient.campaign.findFirst({
    where: { id: campaignId, userId },
    include: {
      category: { select: { name: true } },
    },
  });
};

export const updateCampaign = async (
  campaignId: string,
  userId: string,
  data: Partial<{
    name: string;
    messageText: string;
    categoryId: string;
    province?: string;
    district?: string;
    municipality?: string;
  }>
) => {
  // If category changed → recalculate recipients
  let recipientsNumber;
  if (data.categoryId) {
    const count = await dbClient.my_Contact.count({
      where: { categoryId: data.categoryId, userId, isDeleted: false },
    });
    recipientsNumber = count > 0 ? count : null;
  }

  return await dbClient.campaign.update({
    where: { id: campaignId, userId },
    data: {
      ...data,
      totalRecipients: recipientsNumber,
    },
    include: { category: { select: { name: true } } },
  });
};

export const deleteCampaign = async (campaignId: string, userId: string) => {
  const campaign = await dbClient.campaign.findFirst({
    where: { id: campaignId, userId },
  });

  if (!campaign) {
    throw new Error("Campaign not found");
  }

  await dbClient.campaign.delete({
    where: { id: campaignId },
  });
};


export const approveOrCancelCampaign = async (
  campaignId: string,
  action: "APPROVED" | "CANCELLED",
  reason?: string
) => {
  return await dbClient.campaign.update({
    where: { id: campaignId },
    data: { status: action },
  });
};

export const getAllCampaignsForAdmin = async () => {
  return await dbClient.campaign.findMany({
    orderBy: { submitDate: "desc" },
    include: {
      user: { select: { email: true, organizationName: true } },
      category: { select: { name: true } },
    },
  });
};

export const startCampaign = async (campaignId: string, userId: string) => {
    const campaign = await dbClient.campaign.findFirst({
        where: { id: campaignId, userId },
    });

    if (!campaign) {
        throw new Error("Campaign not found or access denied");
    }
    if (campaign.status !== "APPROVED") {
        throw new Error(`Campaign must be APPROVED to start. Current status: ${campaign.status}`);
    }
    if (campaign.deliveryStatus !== "NOT_STARTED") {
        throw new Error(`Campaign delivery already started or completed. Status: ${campaign.deliveryStatus}`);
    }

    await dbClient.campaign.update({
        where: { id: campaignId },
        data: { deliveryStatus: "IN_PROGRESS" },
    });

    await emailSendingQueue.add(
        'process-campaign',
        { campaignId, userId },
        {
            jobId: `process-campaign-${campaignId}-${Math.random()}`, // Idempotent
            attempts: 3,
            backoff: { type: 'exponential', delay: 5000 },
        }
    );

    return {
        message: "Campaign queued for processing. Emails will be sent in the background.",
        campaignId,
        recipientCount: campaign.totalRecipients,
    };
};
