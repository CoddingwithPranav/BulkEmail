import { Job, Queue } from "bullmq";
import { dbClient } from "@repo/db/client";
import logger from "@repo/config/logger";
import { redis } from "@repo/config";

interface ProcessCampaignJobData {
    campaignId: string;
    userId: string;
}
 const emailSendingQueue = new Queue("email-sending", {
    connection: redis,
    defaultJobOptions: {
        attempts: 3, // Retry failed emails
        backoff: {
            type: 'exponential',
            delay: 1000,
        },
    },
});

export const processCampaignJob = async (job: Job<ProcessCampaignJobData>) => {
    const { campaignId, userId } = job.data;

    logger.info("Starting campaign processing", { campaignId });

    const campaign = await dbClient.campaign.findFirst({
        where: { id: campaignId, userId },
        include: { category: true },
    });

    if (!campaign) {
        throw new Error("Campaign not found during processing");
    }

    const recipients = await dbClient.my_Contact.findMany({
        where: {
            userId,
            categoryId: campaign.categoryId,
            isDeleted: false,
            email: { not: "" }, 
            phoneNumber: { not: "" },
            ...(campaign.province && { province: campaign.province }),
            ...(campaign.district && { district: campaign.district }),
            ...(campaign.municipality && { municipality: campaign.municipality }),
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        },
    });

    if (recipients.length === 0) {
        await dbClient.campaign.update({
            where: { id: campaignId },
            data: {
                deliveryStatus: "COMPLETED",
                totalRecipients: 0,
            },
        });
        logger.info("Campaign has no email recipients", { campaignId });
        return;
    }
    await dbClient.campaign.update({
        where: { id: campaignId },
        data: { totalRecipients: recipients.length },
    });

    const emailJobs = recipients.map((recipient) =>
        emailSendingQueue.add(
            'send-campaign-email',
            {
                to: recipient.email!,
                subject: campaign.name, 
                text: campaign.messageText,
                html: campaign.messageText, // TODO:Replace with proper HTML template later
                campaignId,
                contactId: recipient.id,
            },
            {
                jobId: `campaign-${campaignId}-contact-${recipient.id}-${Math.random()}`, // Unique
                attempts: 5,
                backoff: { type: 'exponential', delay: 2000 },
            }
        )
    );

    await Promise.all(emailJobs);

    logger.info("All email jobs enqueued for campaign", {
        campaignId,
        recipientCount: recipients.length,
    });

};