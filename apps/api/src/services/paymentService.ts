import { dbClient } from "@repo/db/client";

export const createCampaignPayment = async (data: {
  userId: string;
  campaignId: string;
  amount: number; 
  paymentMethod: "esewa";
}): Promise<any> => {
  const amountInPaisa = Math.round(data.amount * 100);

  return await dbClient.$transaction(async (tx: any) => {
    const existing = await tx.campaignPayment.findUnique({
      where: { campaignId: data.campaignId },
    });

    // If already paid, keep the existing successful payment record.
    if (existing?.status === "paid") {
      return existing;
    }

    // eSewa requires unique transaction_uuid per attempt.
    if (existing) {
      await tx.campaignPayment.delete({ where: { id: existing.id } });
    }

    return await tx.campaignPayment.create({
      data: {
        userId: data.userId,
        campaignId: data.campaignId,
        amount: data.amount,
        amountInPaisa,
        paymentMethod: data.paymentMethod,
        status: "pending",
      },
    });
  });
};

export const findCampaignPaymentById = async (id: string): Promise<any> => {
  return await dbClient.campaignPayment.findUnique({ where: { id } });
};

export const findCampaignPaymentByCampaignId = async (campaignId: string): Promise<any> => {
  return await dbClient.campaignPayment.findUnique({ where: { campaignId } });
};

export const markCampaignPaymentAsPaid = async (
  campaignId: string,
  transactionId: string,
  transactionCode: string,
  gatewayData?: any
): Promise<any> => {
  return await dbClient.$transaction(async (tx: any) => {
    const payment = await tx.campaignPayment.update({
      where: { campaignId },
      data: {
        status: "paid",
        transactionId,
        transactionCode,
        gatewayData,
        paidAt: new Date(),
      },
    });

    await tx.campaign.update({
      where: { id: campaignId },
      data: { 
        paid: true,
        status:"APPROVED"
       },
    });

    return payment;
  });
};