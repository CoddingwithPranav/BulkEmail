import { dbClient } from "@repo/db/client";
import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import logger from "@repo/config/logger";

// export const getMyProfile = (req: AuthRequest, res: Response) => {
//   res.json({ user: req.user });
// };


export const getMyProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await dbClient.user.findUnique({
      where: { id: req.user.id },
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

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Failed to load profile" });
  }
};


export const updateMyProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await dbClient.user.update({
      where: { id: req.user.id },
      data: req.body,
      select: {
        id: true,
        email: true,
        phoneNumber: true,
        firstName: true,
        lastName: true,
        organizationName: true,
        profileImage: true,
      },
    });
    logger.info("User updated own profile", { userId: user.id });
    res.json({ message: "Profile updated", user });
  } catch (err: any) {
    logger.error("Update profile failed", { error: err.message });
    res.status(400).json({ message: "Update failed" });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await dbClient.user.findMany({
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      role: true,
      createdAt: true,
      isAccountVerified: true,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json({ users });
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await dbClient.user.findUnique({
    where: { id: req.params.id },
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      role: true,
      accountType: true,
      createdAt: true,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user });
};

export const updateUserRole = async (req: Request, res: Response) => {
  const { role } = req.body;
  const user = await dbClient.user.update({
    where: { id: req.params.id },
    data: { role },
  });
  logger.warn("User role changed", {
    targetUserId: user.id,
    newRole: role,
    by: (req as AuthRequest).user.id,
  });
  res.json({ message: "Role updated", user });
};

export const deleteUser = async (req: Request, res: Response) => {
  await dbClient.user.delete({ where: { id: req.params.id } });
  logger.warn("User deleted", {
    deletedUserId: req.params.id,
    by: (req as AuthRequest).user.id,
  });
  res.json({ message: "User deleted" });
};
