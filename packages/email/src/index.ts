// packages/email/src/sendOTPEmail.ts
import { getTransporter } from "./transporter";
import { getOTPTemplate } from "./templates/otp-template";

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
