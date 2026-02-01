// worker-email-processor/src/index.ts

import logger from "@repo/config/logger";
import redis from "@repo/config/redis";
import { Worker } from "bullmq";
import { processEmailJob } from "./jobs/emailProcessor";
import { processCampaignJob } from "./jobs/processCampaignJob"; // New import

const EMAIL_QUEUE_NAME = "email-sending";

// Global error handlers
process.on('uncaughtException', (error) => {
    console.error('UNCAUGHT EXCEPTION:', error);
    logger.error('Uncaught Exception:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('UNHANDLED REJECTION:', reason);
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

console.log(`Email Worker Starting, Listening to ${EMAIL_QUEUE_NAME}...`);
logger.info(`Email Worker Started, Listening to ${EMAIL_QUEUE_NAME}`);

try {
  console.log("Creating Email Worker instance...");
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

  console.log("Email Worker initialized and ready");
  logger.info("Worker initialized and ready");
} catch (error) {
  console.error("Failed to initialize email worker:", error);
  logger.error("Failed to initialize email worker:", error);
  process.exit(1);
}