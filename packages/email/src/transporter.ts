// packages/email/src/transporter.ts
import FormData from "form-data";
import Mailgun from "mailgun.js";

let mailgunClient: any = null;

export const getMailgunClient = () => {
  if (!mailgunClient) {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.warn("MAILGUN_API_KEY or MAILGUN_DOMAIN missing → emails disabled");
      return null;
    }
    
    const mailgun = new Mailgun(FormData);
    mailgunClient = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });
  }
  return mailgunClient;
};

export const getMailgunDomain = () => {
  return process.env.MAILGUN_DOMAIN || "";
};