import { dbClient, User } from "@repo/db/client";

import logger from "../config/logger";
import { comparePassword, hashPassword } from "../utils/password";

export const register = async (data: any): Promise<User> => {
  const {
    email,
    phoneNumber,
    password,
    firstName,
    lastName,
    organizationName,
    accountType = "INDIVIDUAL",
    citizenshipNumber,
  } = data;

  // Duplicate check
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
    },
  });

  logger.info("New user registered", { userId: user.id });
  return user;
};

export const login = async (name: string, password: string): Promise<User> => {
  const user = await dbClient.user.findFirst({
    where: {
      OR: [{ email: name }, { phoneNumber: name }],
    },
  });

  if (!user || !user.hashedPassword) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await comparePassword(password, user.hashedPassword);
  if (!isMatch) throw new Error("Invalid credentials");

  return user;
};

export const findUserById = async (id: string): Promise<User | null> => {
  return dbClient.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      hashedPassword: true,
      firstName: true,
      lastName: true,
      organizationName: true,
      profileImage: true,
      accountType: true,
      role: true,
      isAccountVerified: true,
      createdAt: true,
      updatedAt: true,
      citizenshipNumber: true,
      citizenshipImage: true,
    },
  });
};
