import { Job } from "bullmq";
import logger from "@repo/config/logger";
import { sendBulkEmail } from "@repo/email";
interface EmailJobData {
    to: string;
    subject: string;
    text: string;
    html: string;
    campaignId: string;
    contactId: string; 
}


export const processEmailJob = async (job: Job) => {
    const data = job.data as EmailJobData;

    if (!data.to || !data.subject || !data.text) {
        throw new Error("Invalid email job data: missing recipient, subject, or body.");
    }
    
    logger.info("Processing email job", { jobId: job.id, recipient: data.to, subject: data.subject });

    await sendBulkEmail(data);

    logger.info("Email job completed successfully", { jobId: job.id, recipient: data.to });
};