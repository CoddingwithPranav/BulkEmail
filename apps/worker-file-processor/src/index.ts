import logger from "@repo/config/logger";
import redis from "@repo/config/redis";
import { Worker } from "bullmq";
import { processFileJob } from "./jobs/fileProcessor";

logger.info("File Processing Worker Started");

const worker = new Worker("file-processing", processFileJob, {
  connection: redis,
  concurrency: 10,
});

worker.on("completed", (job) =>
  logger.info("Job completed", { jobId: job.id })
);
worker.on("failed", (job, err) =>
  logger.error("Job failed", { jobId: job?.id, error: err.message })
);
