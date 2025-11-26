import { dbClient, User } from "@repo/db/client";
import { hashPassword, comparePassword } from "../utils/password";
import { generateOTP, hashOTP, compareOTP, isOTPExpired } from "../utils/otp";
import logger from "../config/logger";
import { sendOTPEmail } from "@repo/email";

export const register = async (data: any): Promise<User> => {
  const {
    email,
    password,
    phoneNumber,
    firstName,
    lastName,
    organizationName,
    accountType = "INDIVIDUAL",
    citizenshipNumber,
  } = data;

  if (email) {
    const existing = await dbClient.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email already registered");
  }
  if (phoneNumber) {
    const existing = await dbClient.user.findUnique({ where: { phoneNumber } });
    if (existing) throw new Error("Phone number already registered");
  }

  const hashedPassword = await hashPassword(password);

  const user = await dbClient.user.create({
    data: {
      email,
      phoneNumber,
      hashedPassword,
      firstName,
      lastName,
      organizationName,
      accountType,
      citizenshipNumber,
      role: "USER",
      isAccountVerified: false,
    },
  });

  const otp = generateOTP();
  const hashedOTP = await hashOTP(otp);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000); 

  await dbClient.user.update({
    where: { id: user.id },
    data: { otp: hashedOTP, otpExpires },
  });

  try {
    await sendOTPEmail(email!, otp);
  } catch (error) {
    logger.error("Failed to send OTP email", { error });
  }

  logger.info("User registered + OTP sent", { userId: user.id, email });
  return user;
};

export const verifyOTP = async (email: string, otp: string): Promise<User> => {
  const user = await dbClient.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  if (!user.otp || !user.otpExpires) throw new Error("No OTP found");
  if (isOTPExpired(user.otpExpires)) throw new Error("OTP has expired");
  if (!(await compareOTP(otp, user.otp))) throw new Error("Invalid OTP");

  const verifiedUser = await dbClient.user.update({
    where: { id: user.id },
    data: {
      isAccountVerified: true,
      otp: null,
      otpExpires: null,
    },
  });

  logger.info("Account verified", { userId: verifiedUser.id });
  return verifiedUser;
};

export const resendOTP = async (email: string): Promise<void> => {
  const user = await dbClient.user.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");
  if (user.isAccountVerified) throw new Error("Account already verified");

  const otp = generateOTP();
  const hashedOTP = await hashOTP(otp);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  await dbClient.user.update({
    where: { id: user.id },
    data: { otp: hashedOTP, otpExpires },
  });

  await sendOTPEmail(email, otp);
};

export const forgotPassword = async (email: string): Promise<void> => {
  const user = await dbClient.user.findUnique({ where: { email } });
  if (!user) {
    // Don't reveal if email exists
    return;
  }

  const otp = generateOTP();
  const hashedOTP = await hashOTP(otp);
  const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

  await dbClient.user.update({
    where: { id: user.id },
    data: { otp: hashedOTP, otpExpires },
  });

  await sendOTPEmail(email, otp);
};

// services/authService.ts
export const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<User> => {
  const user = await dbClient.user.findUnique({
    where: { id: userId },
    select: { id: true, hashedPassword: true, isAccountVerified: true }
  });

  if (!user) throw new Error("User not found");
  if (!user.isAccountVerified) throw new Error("Account not verified");

  // Verify old password
  const isMatch = await comparePassword(currentPassword, user.hashedPassword!);
  if (!isMatch) throw new Error("Current password is incorrect");

  // Optional: prevent reuse of old password
  const isSame = await comparePassword(newPassword, user.hashedPassword!);
  if (isSame) throw new Error("New password must be different");

  const hashedPassword = await hashPassword(newPassword);

  return dbClient.user.update({
    where: { id: userId },
    data: { hashedPassword },
  });
};


// services/authService.ts → add this function
export const resetPassword = async (email: string, otp: string, newPassword: string): Promise<void> => {
  const user = await dbClient.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid request");
  if (!user.otp || !user.otpExpires) throw new Error("No reset request found");
  if (isOTPExpired(user.otpExpires)) throw new Error("OTP expired");
  if (!(await compareOTP(otp, user.otp))) throw new Error("Invalid OTP");

  const hashedPassword = await hashPassword(newPassword);

  await dbClient.user.update({
    where: { id: user.id },
    data: {
      hashedPassword,
      otp: null,
      otpExpires: null,
    },
  });

  logger.info("Password reset successful", { email });
};

export const login = async (name: string, password: string): Promise<User> => {
  const user = await dbClient.user.findFirst({
    where: { OR: [{ email: name }, { phoneNumber: name }] },
  });

  if (!user || !user.hashedPassword) throw new Error("Invalid credentials");
  if (!user.isAccountVerified) throw new Error("Please verify your email before logging in");

  const isMatch = await comparePassword(password, user.hashedPassword);
  if (!isMatch) throw new Error("Invalid credentials");

  return user;
};