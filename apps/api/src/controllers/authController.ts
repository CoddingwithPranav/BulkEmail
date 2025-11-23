import { Request, Response } from "express";
import prisma from "../config/database";
import logger from "../config/logger";
import { AuthRequest } from "../middleware/auth";
import { login, register } from "../services/authService";
import { cookieOptions } from "../utils/cookieOptions";
import { signToken } from "../utils/jwt";
import { hashPassword } from "../utils/password";

export const registerController = async (req: Request, res: Response) => {
  try {
    console.log("Registering user with data:", req.body);
    const user = await register(req.body);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie("jwt", token, cookieOptions);
    logger.info("User registered", { userId: user.id, email: user.email });

    res.status(201).json({
      message: "Registration successful",
      data: {
        user: {
          id: user.id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          isGuest: user.isGuest,
        },
      },
    });
  } catch (err: any) {
    logger.error("Registration failed", { error: err.message });
    res.status(400).json({ message: err.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await login(name, password);
    const token = signToken({ id: user.id, role: user.role });

    res.cookie("jwt", token, cookieOptions);
    logger.info("User logged in", { userId: user.id });

    res.json({
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
        },
        token: { accessToken: token },
      },
    });
  } catch (err: any) {
    logger.warn("Login failed", { name: req.body.name });
    res.status(401).json({ message: err.message });
  }
};

export const logout = (_req: Request, res: Response) => {
  res.clearCookie("jwt", cookieOptions);
  res.json({ message: "Logged out successfully" });
};

export const getMe = (req: AuthRequest, res: Response) => {
  res.json({ user: req.user });
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.hashedPassword = await hashPassword(updates.password);
      delete updates.password;
    }

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: updates,
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
      },
    });

    logger.info("Profile updated", { userId: user.id });
    res.json({ message: "Profile updated", user });
  } catch (err: any) {
    logger.error("Profile update failed", {
      userId: req.user.id,
      error: err.message,
    });
    res.status(400).json({ message: err.message });
  }
};
