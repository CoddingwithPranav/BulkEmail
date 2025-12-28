import { getEmailPrice } from "./api/price";

// lib/pricing.ts
export const PAISA_PER_RUPEE = 100;

export function paisaToRupees(paisa: number): number {
  return paisa / PAISA_PER_RUPEE;
}

export function rupeesToPaisa(rupees: number | string): number {
  return Math.round(Number(rupees) * PAISA_PER_RUPEE);
}

// Calculate total cost
export async function calculateCampaignCost(recipients: number) {
  const pricePaisa = await getEmailPrice();
  const totalPaisa = recipients * pricePaisa.pricePerEmailPaisa;
  const totalRupees = paisaToRupees(totalPaisa);

  return {
    pricePerEmail: paisaToRupees(pricePaisa.pricePerEmailPaisa),
    totalAmount: totalRupees,
    totalPaisa,
    recipients,
    currency: "NPR" as const,
  };
}