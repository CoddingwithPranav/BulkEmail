// src/services/priceService.ts
import { dbClient } from "@repo/db/client";
import logger from "@repo/config/logger";
import { CreatePriceInput } from "@repo/types";

export async function getCurrentPrice() {
  const pricing = await dbClient.emailPricing.findFirst({
    where: {
      isActive: true,
      effectiveFrom: { lte: new Date() },
      OR: [{ effectiveTo: null }, { effectiveTo: { gt: new Date() } }],
    },
    orderBy: { effectiveFrom: "desc" },
  });
  console.log("Current Pricing:", pricing);
  if (!pricing) {
    logger.warn("No active pricing found → using fallback 85 paisa");
    return {
      pricePerEmailPaisa: 85,
      pricePerEmailNPR: 0.85,
      currency: "NPR",
      source: "fallback" as const,
    };
  }

  return {
    id: pricing.id,
    pricePerEmailPaisa: pricing.pricePerEmailPaisa,
    pricePerEmailNPR: pricing.pricePerEmailPaisa / 100,
    currency: pricing.currency,
    effectiveFrom: pricing.effectiveFrom,
    effectiveTo: pricing.effectiveTo,
    source: "database" as const,
  };
}

export async function createPrice(data: CreatePriceInput) {
  // Deactivate all previous active prices
  await dbClient.emailPricing.updateMany({
    where: { isActive: true },
    data: { isActive: false },
  });

  const newPrice = await dbClient.emailPricing.create({
    data: {
      pricePerEmailPaisa: data.pricePerEmailPaisa,
      currency: data.currency || "NPR",
      effectiveFrom: new Date(data.effectiveFrom || new Date()),
      effectiveTo: data.effectiveTo ? new Date(data.effectiveTo) : null,
      isActive: true,
    },
  });

  logger.info("New Email price created", {
    priceId: newPrice.id,
    pricePerEmailPaisa: newPrice.pricePerEmailPaisa,
  });

  return newPrice;
}

export async function getPricingHistory(page = 1, limit = 20) {
  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    dbClient.emailPricing.findMany({
      skip,
      take: limit,
      orderBy: { effectiveFrom: "desc" },
      select: {
        id: true,
        pricePerEmailPaisa: true,
        currency: true,
        isActive: true,
        effectiveFrom: true,
        effectiveTo: true,
        createdAt: true,
        updatedAt: true,
      },
    }),
    dbClient.emailPricing.count(),
  ]);

  return {
    items: items.map((p) => ({
      ...p,
      pricePerEmailNPR: p.pricePerEmailPaisa / 100,
    })),
    pagination: {
      currentPage: page,
      perPage: limit,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1,
    },
  };
}