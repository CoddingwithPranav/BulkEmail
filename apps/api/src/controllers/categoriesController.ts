import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import * as categoriesService from "../services/categoriesService";
import logger from "@repo/config/logger";


export const createCategories = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });

    const category = await categoriesService.createCategory(req.user.id, req.body);

    res.status(201).json({
      message: "Category created successfully",
      category,
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};



export const getDropDownList = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });

    const categories = await categoriesService.getCategoryList(req.user.id);
    res.status(200).json({ status: "success", data: categories });
  } catch (err: any) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

export const getCategories = async (req: AuthRequest, res: Response) => {
  try {
    const result = await categoriesService.getCategories(req.user!.id, req.query as any);
    res.json({ success: true, data: result });
  } catch (err: any) {
    logger.error("Get receivers failed", { error: err.message });
    res.status(500).json({ success: false, message: "Failed to fetch receivers" });
  }
};

export const getCategoryById = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });
    if (!req.params.id) return res.status(400).json({ message: "Category ID is required" });

    const category = await categoriesService.getCategoryById(req.params.id, req.user.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    res.json({ status: "success", data: category });
  } catch (err: any) {
    res.status(500).json({ message: "Failed to fetch category" });
  }
};

export const updateCategory = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.params.id) return res.status(400).json({ message: "Category ID is required" });

    const category = await categoriesService.updateCategory(req.params.id, req.body);
    res.json({ message: "Category updated", category });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCategory = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });
    if (!req.params.id) return res.status(400).json({ message: "Category ID is required" });

    await categoriesService.deleteCategory(req.params.id, req.user.id);
    res.json({ message: "Category deleted" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
