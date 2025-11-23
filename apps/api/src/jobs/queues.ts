import redis from "@repo/config/redis";
import { Queue } from "bullmq";

export const fileProcessingQueue = new Queue("file-processing", {
  connection: redis,
});
