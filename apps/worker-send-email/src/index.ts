// worker-email-processor/src/index.ts

import logger from "@repo/config/logger";
import redis from "@repo/config/redis";
import { Worker } from "bullmq";
import { processEmailJob } from "./jobs/emailProcessor";
import { processCampaignJob } from "./jobs/processCampaignJob"; // New import

const EMAIL_QUEUE_NAME = "email-sending";

logger.info(`Email Worker Started, Listening to ${EMAIL_QUEUE_NAME}`);

const worker = new Worker(
    EMAIL_QUEUE_NAME,
    async (job) => {
        if (job.name === 'send-campaign-email') {
            return await processEmailJob(job);
        }
        if (job.name === 'process-campaign') {
            return await processCampaignJob(job);
        }
        throw new Error(`Unknown job type: ${job.name}`);
    },
    {
        connection: redis,
        concurrency: 10, 
    }
);

worker.on("completed", (job) => {
    logger.info("Job completed", { jobId: job.id, name: job.name });
});

worker.on("failed", (job, err) => {
    logger.error("Job failed", {
        jobId: job?.id,
        name: job?.name,
        error: err.message,
    });
});