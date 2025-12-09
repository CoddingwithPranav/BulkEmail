// worker-email-processor/src/index.ts
import logger from "@repo/config/logger";
import redis from "@repo/config/redis"; // Assuming this path is correct
import { Worker } from "bullmq";
import { processEmailJob } from "./jobs/emailProcessor";

const EMAIL_QUEUE_NAME = "email-sending";

logger.info(`Email Worker Started, Listening to ${EMAIL_QUEUE_NAME}`);

const worker = new Worker(EMAIL_QUEUE_NAME, processEmailJob, {
  connection: redis,
  concurrency: 5, // Process 5 emails at a time (adjust based on rate limits/performance)
});

worker.on("completed", (job) =>
  logger.info("Email Job completed", { jobId: job.id, recipient: job.data.to })
);

worker.on("failed", (job, err) =>
  logger.error("Email Job failed", { jobId: job?.id, error: err.message, recipient: job?.data.to })
);