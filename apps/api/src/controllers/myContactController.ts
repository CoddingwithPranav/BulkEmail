// src/controllers/myContactController.ts
import { AuthRequest } from "../middleware/auth";
import { Response } from "express";
import * as myContactService from "../services/myContactService";
import logger from "@repo/config/logger";

export const createContact = async (req: AuthRequest, res: Response) => {
  try {
    const contact = await myContactService.createContact(req.user!.id, req.body);
    res.status(201).json({ success: true, data:  contact  });
  } catch (err: any) {
    logger.error("Create contact failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getContacts = async (req: AuthRequest, res: Response) => {
  try {
    const result = await myContactService.getUserContacts(req.user!.id, req.query as any);
    res.json({ success: true, data: result });
  } catch (err: any) {
    logger.error("Get contacts failed", { error: err.message });
    res.status(500).json({ success: false, message: "Failed to fetch contacts" });
  }
};

export const getContact = async (req: AuthRequest, res: Response) => {
  try {
    const contact = await myContactService.getContactById(req.params.id!, req.user!.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.json({ success: true, data: contact });
  } catch (err: any) {
    logger.error("Get contact failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateContact = async (req: AuthRequest, res: Response) => {
  try {
    const contact = await myContactService.updateContact(req.params.id!, req.user!.id, req.body);
    res.json({ success: true, message: "Contact updated", data:contact});
  } catch (err: any) {
    logger.error("Update contact failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteContact = async (req: AuthRequest, res: Response) => {
  try {
    await myContactService.deleteContact(req.params.id!, req.user!.id);
    res.json({ success: true, message: "Contact deleted" });
  } catch (err: any) {
    logger.error("Delete contact failed", { error: err.message });
    res.status(400).json({ success: false, message: err.message });
  }
};