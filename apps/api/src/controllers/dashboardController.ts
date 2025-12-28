// src/controllers/dashboardController.ts
import { Request, Response } from "express";
import { getDashboardData } from "../services/dashboard";

export async function getDashboard(req: Request, res: Response) {
  try {
    const userId = (req as any).user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const data = await getDashboardData(userId);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("DashboardController Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
      ...(process.env.NODE_ENV === "development" && {
        error: (error as Error).message,
      }),
    });
  }
}