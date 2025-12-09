// packages/email/src/sendOTPEmail.ts
import { getTransporter } from "./transporter";
import { getOTPTemplate } from "./templates/otp-template";
interface BulkEmailData {
    to: string;
    subject: string;
    text: string;
    html: string;
}

export const sendOTPEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: {
      name: "MessagerNepal",
      address: process.env.GMAIL_USER!,
    },
    to,
    subject: "Your MessagerNepal Verification Code",
    text: `Your verification code is ${otp}. Valid for 10 minutes.`,
    html: getOTPTemplate(otp),
  };
  
  try {
    const transporter = getTransporter();
    const info = await transporter?.sendMail(mailOptions);
    console.log("OTP Email Sent →", info.messageId);
    return info;
  } catch (error: any) {
    console.error("Failed to send OTP email:", error.message);
    throw error;
  }
};


export const sendBulkEmail = async ({ to, subject, text, html }: BulkEmailData) => {
    const mailOptions = {
        from: {
            name: "MessagerNepal",
            address: process.env.GMAIL_USER!,
        },
        to,
        subject,
        text,
        html,
    };
    
    try {
        const transporter = getTransporter();
        const info = await transporter?.sendMail(mailOptions);
        return info;
    } catch (error: any) {
      console.error("Failed to send bulk email:", error.message);
        throw error;
    }
};