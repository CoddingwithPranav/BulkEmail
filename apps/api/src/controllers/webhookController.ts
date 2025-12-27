// src/controllers/webhook.controller.ts (or wherever you keep it)

import logger from "@repo/config/logger";
import { dbClient } from "@repo/db/client";
import { Request, Response } from "express";

export const webhookController = async (req: Request, res: Response) => {
    try {
        logger.info("Received SendGrid webhook payload", { body: req.body });

        let events: any[];
        try {
            events = JSON.parse(req.body);
        } catch (parseError) {
            logger.warn("Invalid JSON in SendGrid webhook");
            return res.status(400).send("Invalid JSON");
        }

        if (!Array.isArray(events) || events.length === 0) {
            return res.status(400).send("Invalid or empty payload");
        }

        // Map to collect stats per campaign
        const campaignStats = new Map<
            string,
            { delivered: number; bounced: number; processed: number }
        >();

        for (const event of events) {
            // Try top-level fields first (what you're seeing in logs)
            let campaignId = event.campaignId || event.campaign_id;

            // Fallback to custom_args if not found at top level
            if (!campaignId && event.custom_args) {
                campaignId = event.custom_args.campaignId || event.custom_args.campaign_id;
            }

            // Optional: also get contactId the same way
            let contactId = event.contactId || event.contact_id;
            if (!contactId && event.custom_args) {
                contactId = event.custom_args.contactId || event.custom_args.contact_id;
            }

            if (!campaignId) {
                continue; // Skip if still no campaignId
            }
            if (!campaignStats.has(campaignId)) {
                campaignStats.set(campaignId, { delivered: 0, bounced: 0, processed: 0 });
            }

            const stats = campaignStats.get(campaignId)!;

            // Count every final event as "processed"
            if (["delivered", "bounce", "dropped"].includes(event.event)) {
                stats.processed++;
            }

            switch (event.event) {
                case "delivered":
                    stats.delivered++;
                    break;
                case "bounce":
                case "dropped":
                    stats.bounced++;
                    break;
                // Optional: track opens/clicks later
                // case "open":
                //   stats.opened++;
                //   break;
            }
        }

        if (campaignStats.size === 0) {
            logger.info("No tracked campaigns in this webhook batch");
            return res.status(200).send("OK - No updates");
        }

        // Process each campaign: update counters + check if fully processed
        const updatePromises = Array.from(campaignStats.entries()).map(
            async ([campaignId, stats]) => {
                try {
                    // First: fetch current campaign state
                    const campaign = await dbClient.campaign.findUnique({
                        where: { id: campaignId },
                        select: {
                            totalRecipients: true,
                            totalDelivered: true,
                            totalBounced: true,
                            deliveryStatus: true,
                        },
                    });

                    if (!campaign) {
                        logger.warn("Campaign not found for webhook update", { campaignId });
                        return;
                    }

                    // Calculate new totals
                    const newDelivered = (campaign.totalDelivered || 0) + stats.delivered;
                    const newBounced = (campaign.totalBounced || 0) + stats.bounced;
                    const newProcessed = newDelivered + newBounced;

                    const totalRecipients = campaign.totalRecipients || 0;

                    // Determine if campaign is now fully processed
                    const isFullyProcessed = newProcessed >= totalRecipients;

                    // Update campaign with new stats and possibly mark as COMPLETED
                    await dbClient.campaign.update({
                        where: { id: campaignId },
                        data: {
                            totalDelivered: newDelivered,
                            totalBounced: newBounced,
                            // Only change status if currently IN_PROGRESS and now fully processed
                            deliveryStatus: campaign.deliveryStatus === "IN_PROGRESS" && isFullyProcessed
                                ? "COMPLETED"
                                : campaign.deliveryStatus,
                        },
                    });

                    logger.info("Updated campaign from webhook", {
                        campaignId,
                        addedDelivered: stats.delivered,
                        addedBounced: stats.bounced,
                        newTotalDelivered: newDelivered,
                        newTotalBounced: newBounced,
                        totalRecipients,
                        fullyProcessed: isFullyProcessed,
                        newStatus: isFullyProcessed ? "COMPLETED" : campaign.deliveryStatus,
                    });
                } catch (updateError) {
                    logger.error("Failed to update campaign in webhook", {
                        campaignId,
                        error: updateError,
                    });
                }
            }
        );

        await Promise.all(updatePromises);

        res.status(200).send("OK");
    } catch (error: any) {
        logger.error("Unhandled error in SendGrid webhook", { error: error.message });
        res.status(500).send("Internal Server Error");
    }
};