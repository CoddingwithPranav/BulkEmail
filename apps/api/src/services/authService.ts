import prisma from "../config/database";

import logger from "../config/logger";
import { comparePassword, hashPassword } from "../utils/password";

export const register = async (data: any) => {
  const {
    email,
    phoneNumber,
    password,
    isGuest = false,
    firstName,
    lastName,
    organizationName,
    accountType = "INDIVIDUAL",
    citizenshipNumber,
  } = data;

  // Duplicate check
  if (email) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email already registered");
  }
  if (phoneNumber) {
    const existing = await prisma.user.findUnique({ where: { phoneNumber } });
    if (existing) throw new Error("Phone number already registered");
  }

  const hashedPassword = isGuest ? null : await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      phoneNumber,
      hashedPassword,
      firstName,
      lastName,
      organizationName,
      accountType,
      citizenshipNumber,
      isGuest,
      role: isGuest ? "GUEST" : "USER",
    },
  });

  logger.info("New user registered", { userId: user.id, isGuest });
  return user;
};

export const login = async (identifier: string, password: string) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phoneNumber: identifier }],
    },
  });

  if (!user || user.isGuest || !user.hashedPassword) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await comparePassword(password, user.hashedPassword);
  if (!isMatch) throw new Error("Invalid credentials");

  return user;
};

export const findUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      firstName: true,
      lastName: true,
      organizationName: true,
      profileImage: true,
      accountType: true,
      role: true,
      isAccountVerified: true,
      createdAt: true,
    },
  });
};
