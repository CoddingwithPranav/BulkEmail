console.log("[WORKER] Loading modules...");
import logger from "@repo/config/logger";
import redis from "@repo/config/redis";
import { Worker } from "bullmq";
import { processFileJob } from "./jobs/fileProcessor";
console.log("[WORKER] Modules loaded successfully");

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

console.log("File Processing Worker Starting...");
logger.info("File Processing Worker Started");

try {
  console.log("Creating Worker instance...");
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

  console.log("Worker initialized and ready");
  logger.info("Worker initialized and ready");
} catch (error) {
  console.error("Failed to initialize worker:", error);
  logger.error("Failed to initialize worker:", error);
  process.exit(1);
}
