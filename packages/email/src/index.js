"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBulkEmail = exports.sendOTPEmail = void 0;
const sgMail = require('@sendgrid/mail');
const transporter_1 = require("./transporter");
const otp_template_1 = require("./templates/otp-template");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ debug: true }); // debug: true for more info
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const USE_SENDGRID = process.env.EMAIL_PROVIDER === 'sendgrid';
const SENDGRID_FROM = process.env.SENDGRID_FROM_EMAIL;
const MAILGUN_FROM = process.env.MAILGUN_FROM_EMAIL || 'noreply@bulkemail.com';
const sendOTPEmail = async (to, otp) => {
    console.log("Preparing to send OTP email to:", to);
    try {
        if (USE_SENDGRID) {
            const msg = {
                to,
                from: SENDGRID_FROM,
                subject: 'Your Verification Code',
                text: `Your verification code is ${otp}. Valid for 10 minutes.`,
                html: (0, otp_template_1.getOTPTemplate)(otp),
            };
            console.log("Sending OTP email with SendGrid:", msg);
            const info = await sgMail.send(msg);
            console.log("OTP Email Sent (SendGrid) →", info);
            return info;
        }
        else {
            const emailData = {
                from: `Bulk Email <${MAILGUN_FROM}>`,
                to,
                subject: "Your Bulk Email Verification Code",
                text: `Your verification code is ${otp}. Valid for 10 minutes. Welcome to Bulk Email - Professional Email Marketing Platform.`,
                html: (0, otp_template_1.getOTPTemplate)(otp),
            };
            const client = (0, transporter_1.getMailgunClient)();
            const domain = (0, transporter_1.getMailgunDomain)();
            if (!client || !domain) {
                console.log("EMAIL (mock - OTP):", emailData.subject, "→", to);
                return { messageId: "mock-123" };
            }
            console.log("Sending OTP email with Mailgun:", emailData);
            const info = await client.messages.create(domain, emailData);
            console.log("OTP Email Sent (Mailgun) →", info.id);
            return info;
        }
    }
    catch (error) {
        console.error("Failed to send OTP email:", error.message);
        if (error.response?.body) {
            console.error("Response body:", error.response.body);
        }
        throw error;
    }
};
exports.sendOTPEmail = sendOTPEmail;
const sendBulkEmail = async ({ to, subject, text, html, campaignId, contactId }) => {
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
        }
        else {
            const emailData = {
                from: `Bulk Email <${MAILGUN_FROM}>`,
                to,
                subject,
                text,
                html,
            };
            const client = (0, transporter_1.getMailgunClient)();
            const domain = (0, transporter_1.getMailgunDomain)();
            if (!client || !domain) {
                console.log("EMAIL (mock - Bulk):", emailData.subject, "→", to);
                return { messageId: "mock-123" };
            }
            console.log("Sending bulk email with Mailgun:", emailData);
            const info = await client.messages.create(domain, emailData);
            console.log("Bulk Email Sent (Mailgun) →", info.id);
            return info;
        }
    }
    catch (error) {
        console.error("Failed to send bulk email:", error.message);
        if (error.response?.body) {
            console.error("Response body:", error.response.body);
        }
        throw error;
    }
};
exports.sendBulkEmail = sendBulkEmail;
