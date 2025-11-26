// packages/email/src/transporter.ts
import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

export const getTransporter = () => {
  if (!transporter) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {  //TO Know if env variables are missing
      console.warn("GMAIL_USER or GMAIL_APP_PASSWORD missing → emails disabled");
      transporter = {
        sendMail: async (mailOptions: any) => {
          console.log("EMAIL (mock):", mailOptions.subject, "→", mailOptions.to);
          return { messageId: "mock-123" };
        },
      } as any;
    } else {
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
    }
  }
  return transporter;
};