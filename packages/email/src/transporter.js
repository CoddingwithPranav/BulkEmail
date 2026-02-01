"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMailgunDomain = exports.getMailgunClient = void 0;
// packages/email/src/transporter.ts
const form_data_1 = __importDefault(require("form-data"));
const mailgun_js_1 = __importDefault(require("mailgun.js"));
let mailgunClient = null;
//TODO: fix why env not working
const getMailgunClient = () => {
    if (!mailgunClient) {
        if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
            console.warn("MAILGUN_API_KEY or MAILGUN_DOMAIN missing → emails disabled");
            return null;
        }
        const mailgun = new mailgun_js_1.default(form_data_1.default);
        mailgunClient = mailgun.client({
            username: "api",
            key: process.env.MAILGUN_API_KEY,
        });
    }
    return mailgunClient;
};
exports.getMailgunClient = getMailgunClient;
const getMailgunDomain = () => {
    return process.env.MAILGUN_DOMAIN || "";
};
exports.getMailgunDomain = getMailgunDomain;
