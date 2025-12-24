// packages/email/src/sendOTPEmail.ts
import { getMailgunClient, getMailgunDomain } from "./transporter";
import { getOTPTemplate } from "./templates/otp-template";

interface BulkEmailData {
    to: string;
    subject: string;
    text: string;
    html: string;
}

export const sendOTPEmail = async (to: string, otp: string) => {
  const from = process.env.MAILGUN_FROM_EMAIL || "noreply@bulkemail.com";
  
  const emailData = {
    from: `Bulk Email <${from}>`,
    to,
    subject: "Your Bulk Email Verification Code",
    text: `Your verification code is ${otp}. Valid for 10 minutes. Welcome to Bulk Email - Professional Email Marketing Platform.`,
    html: getOTPTemplate(otp),
  };
  
  try {
    const client = getMailgunClient();
    const domain = getMailgunDomain();
    
    if (!client || !domain) {
      console.log("EMAIL (mock):", emailData.subject, "→", to);
      return { messageId: "mock-123" };
    }
    
    const info = await client.messages.create(domain, emailData);
    console.log("OTP Email Sent →", info.id);
    return info;
  } catch (error: any) {
    console.error("Failed to send OTP email:", error.message);
    throw error;
  }
};

export const sendBulkEmail = async ({ to, subject, text, html }: BulkEmailData) => {
    const from = process.env.MAILGUN_FROM_EMAIL || "noreply@bulkemail.com";
    
    const emailData = {
        from: `Bulk Email <${from}>`,
        to,
        subject,
        text,
        html,
    };
    
    try {
        const client = getMailgunClient();
        const domain = getMailgunDomain();
        
        if (!client || !domain) {
          console.log("EMAIL (mock):", emailData.subject, "→", to);
          return { messageId: "mock-123" };
        }
        
        const info = await client.messages.create(domain, emailData);
        console.log("Bulk Email Sent →", info.id);
        return info;
    } catch (error: any) {
      console.error("Failed to send bulk email:", error.message);
        throw error;
    }
};