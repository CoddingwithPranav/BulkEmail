const sgMail = require('@sendgrid/mail');
import { getMailgunClient, getMailgunDomain } from "./transporter";
import { getOTPTemplate } from "./templates/otp-template";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
interface BulkEmailData {
    to: string;
    subject: string;
    text: string;
    html: string;
}

const USE_SENDGRID = process.env.EMAIL_PROVIDER === 'sendgrid' ;
const SENDGRID_FROM = process.env.SENDGRID_FROM_EMAIL  ;
const MAILGUN_FROM = process.env.MAILGUN_FROM_EMAIL || 'noreply@bulkemail.com';

export const sendOTPEmail = async (to: string, otp: string) => {
    console.log("📧 Preparing to send OTP email to:", to);
    try {
        if (USE_SENDGRID) {
            const msg = {
                to,
                from: SENDGRID_FROM,
                subject: 'Your Verification Code',
                text: `Your verification code is ${otp}. Valid for 10 minutes.`,
                html: getOTPTemplate(otp),
            };

            console.log("Sending OTP email with SendGrid:", msg);
            const info = await sgMail.send(msg);
            console.log("OTP Email Sent (SendGrid) →", info);
            return info;
        } else {
            const emailData = {
                from: `Bulk Email <${MAILGUN_FROM}>`,
                to,
                subject: "Your Bulk Email Verification Code",
                text: `Your verification code is ${otp}. Valid for 10 minutes. Welcome to Bulk Email - Professional Email Marketing Platform.`,
                html: getOTPTemplate(otp),
            };

            const client = getMailgunClient();
            const domain = getMailgunDomain();

            if (!client || !domain) {
                console.log("EMAIL (mock - OTP):", emailData.subject, "→", to);
                return { messageId: "mock-123" };
            }

            console.log("Sending OTP email with Mailgun:", emailData);
            const info = await client.messages.create(domain, emailData);
            console.log("OTP Email Sent (Mailgun) →", info.id);
            return info;
        }
    } catch (error: any) {
        console.error("Failed to send OTP email:", error.message);
        if (error.response?.body) {
            console.error("Response body:", error.response.body);
        }
        throw error;
    }
};

export const sendBulkEmail = async ({ to, subject, text, html, campaignId, contactId }: BulkEmailData & { campaignId: string; contactId: string }) => {
   console.log("Preparing to send bulk email to:", to);
    try {
        if (USE_SENDGRID) {
            const msg = {
                to,
                from: SENDGRID_FROM,
                subject,
                text,
                html,
                custom_args: {
                  campaignId: campaignId,
                  contactId: contactId, // optional, for future per-contact tracking
                },
            };

            console.log("Sending bulk email with SendGrid:", msg);
            const info = await sgMail.send(msg);
            console.log("Bulk Email Sent (SendGrid) →", info);
            return info;
        } else {
            const emailData = {
                from: `Bulk Email <${MAILGUN_FROM}>`,
                to,
                subject,
                text,
                html,
            };

            const client = getMailgunClient();
            const domain = getMailgunDomain();

            if (!client || !domain) {
                console.log("EMAIL (mock - Bulk):", emailData.subject, "→", to);
                return { messageId: "mock-123" };
            }

            console.log("Sending bulk email with Mailgun:", emailData);
            const info = await client.messages.create(domain, emailData);
            console.log("Bulk Email Sent (Mailgun) →", info.id);
            return info;
        }
    } catch (error: any) {
        console.error("Failed to send bulk email:", error.message);
        if (error.response?.body) {
            console.error("Response body:", error.response.body);
        }
        throw error;
    }
};
