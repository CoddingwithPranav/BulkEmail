import redis from "@repo/config/redis";
import { Queue, QueueEvents } from "bullmq";

// Queue for adding jobs
export const fileProcessingQueue = new Queue("file-processing", {
  connection: redis,
});

// QueueEvents for listening to progress/completed/failed (shared globally)
export const fileProcessingQueueEvents = new QueueEvents("file-processing", {
  connection: redis,
});
