import redis from "@repo/config/redis";
import { Queue, QueueEvents } from "bullmq";

export const fileProcessingQueue = new Queue("file-processing", {
  connection: redis,
});

export const fileProcessingQueueEvents = new QueueEvents("file-processing", {
  connection: redis,
});
export const emailSendingQueue = new Queue("email-sending", {
    connection: redis,
    defaultJobOptions: {
        attempts: 3, // Retry failed emails
        backoff: {
            type: 'exponential',
            delay: 1000,
        },
    },
});