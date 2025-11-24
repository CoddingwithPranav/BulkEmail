import { dbClient } from "@repo/db/client";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  {
    const token = req.cookies?.jwt;

    if (!token) {
      return res.status(401).json({ message: "Not authorized - no token" });
    }

    try {
      const decoded = verifyToken(token) as { id: string };
      const user = await dbClient.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          email: true,
          phoneNumber: true,
          role: true,
          isAccountVerified: true,
        },
      });

      if (!user) {
        return res.status(401).json({ message: "User no longer exists" });
      }

      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  }
};
