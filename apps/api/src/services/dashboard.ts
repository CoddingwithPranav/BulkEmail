// src/services/dashboardService.ts
import { dbClient } from "@repo/db/client";
import { DashboardData } from "@repo/types";



export async function getDashboardData(userId: string): Promise<DashboardData> {
  const [
    categories,
    campaigns,
    totalContacts,
    totalInvalidContacts,
    totalFiles,
    paidAmountAggregate,
  ] = await Promise.all([
    // Categories with valid contact count
    dbClient.category.findMany({
      where: { userId, isDeleted: false },
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        _count: {
          select: {
            myContacts: { where: { isDeleted: false } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),

    // Recent campaigns
    dbClient.campaign.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        status: true,
        deliveryStatus: true,
        totalRecipients: true,
        totalDelivered: true,
        deliveryRate: true,
        totalCost: true,
        paid: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    }),

    // Valid contacts
    dbClient.my_Contact.count({
      where: { userId, isDeleted: false },
    }),

    // Invalid contacts
    dbClient.invalid_My_Contact.count({
      where: { userId, isDeleted: false },
    }),

    // Total uploaded files
    dbClient.files.count({
      where: { userId },
    }),

    // Total paid amount in paisa
    dbClient.campaignPayment.aggregate({
      where: { userId, status: "paid" },
      _sum: { amountInPaisa: true },
    }),
  ]);

  // Format categories
  const formattedCategories = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    recipientCount: cat._count.myContacts,
    createdAt: cat.createdAt,
  }));

  // Calculate derived stats
  const totalMessagesSent = campaigns.reduce((sum, c) => sum + c.totalDelivered, 0);

  const avgDeliveryRate =
    campaigns.length > 0
      ? campaigns.reduce((sum, c) => sum + (c.deliveryRate || 0), 0) / campaigns.length
      : 0;

  const totalPaidPaisa = paidAmountAggregate._sum.amountInPaisa || 0;
  const totalPaidNPR = Number((totalPaidPaisa / 100).toFixed(2));

  return {
    stats: {
      totalContacts,
      totalInvalidContacts,
      totalContactsAll: totalContacts + totalInvalidContacts,
      totalFilesUploaded: totalFiles,
      totalPaidNPR,
      totalMessagesSent,
      avgDeliveryRate: Number(avgDeliveryRate.toFixed(1)),
      activeCategories: formattedCategories.length,
    },
    categories: formattedCategories,
    campaigns: campaigns.map((c) => ({
      id: c.id,
      name: c.name,
      status: c.status,
      deliveryStatus: c.deliveryStatus,
      totalRecipients: c.totalRecipients,
      totalDelivered: c.totalDelivered,
      deliveryRate: c.deliveryRate ? Math.round(c.deliveryRate) : 0,
      totalCost: c.totalCost,
      paid: c.paid,
      createdAt: c.createdAt,
    })),
  };
}