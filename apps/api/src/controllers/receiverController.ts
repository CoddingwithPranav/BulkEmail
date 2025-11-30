import { dbClient } from "@repo/db/client";
import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import logger from "@repo/config/logger";

export const createReceiver = async (req: AuthRequest, res: Response) => {
  try {
    console.log("Creating receiver with data:", req.body);
    const receiver = await dbClient.receiver.create({
      data: {
        ...req.body,
        userId: req.user.id,
      },
    });

    logger.info("Receiver created", {
      receiverId: receiver.id,
      userId: req.user.id,
    });

    res.status(201).json({
      message: "Receiver created successfully",
      receiver,
    });
  } catch (err: any) {
    logger.error("Receiver creation failed", { error: err.message });
    res.status(400).json({ message: err.message });
  }
};

export const getMyReceivers = async (req: AuthRequest, res: Response) => {
  const query = req.query;

  const page = Number(query.page) || 1;
  const limit = Math.min(Number(query.limit) || 10, 100);
  const skip = (page - 1) * limit;
  const search = query.q as string | undefined;

  const whereClause: any = {
    userId: req.user.id,
    isDeleted: false,
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { phoneNumber: { contains: search } },
        { province: { contains: search, mode: "insensitive" } },
        { district: { contains: search, mode: "insensitive" } },
      ],
    }),
  };

  try {
    const [receivers, totalReceivers] = await dbClient.$transaction([
      dbClient.receiver.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        where: whereClause,
      }),
      dbClient.receiver.count({ where: whereClause }),
    ]);

    const totalPages = Math.ceil(totalReceivers / limit);

    res.json({
      status: "success",
      data: {
        receivers,
        count: totalReceivers,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: totalReceivers,
          perPage: limit,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
    });
  } catch (err) {
    logger.error("Failed to fetch receivers", { error: err });
    res.status(500).json({ message: "Failed to fetch receivers" });
  }
};

export const getAllReceivers = async (_req: Request, res: Response) => {
  try {
    const receivers = await dbClient.receiver.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({
      status: "success",
      data: { receivers },
    });
  } catch (err) {
    logger.error("Failed to fetch all receivers", { error: err });
    res.status(500).json({ message: "Failed to fetch receivers" });
  }
};

export const getReceiverById = async (req: AuthRequest, res: Response) => {
  try {
    const receiver = await dbClient.receiver.findFirst({
      where: { id: req.params.id, userId: req.user.id, isDeleted: false },
    });

    if (!receiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    res.json({ status: "success", data: receiver });
  } catch (err) {
    logger.error("Failed to fetch receiver by ID", { error: err });
    res.status(500).json({ message: "Failed to fetch receiver" });
  }
};

export const updateReceiver = async (req: AuthRequest, res: Response) => {
  console.log("Updating receiver with ID:", req.params.id, "and data:", req.body);
  try {
    const receiver = await dbClient.receiver.update({
      where: { id: req.params.id },
      data: req.body,
    });

    logger.info("Receiver updated", { receiverId: receiver.id });

    res.json({ message: "Receiver updated", receiver });
  } catch (err: any) {
    logger.error("Receiver update failed", { error: err.message });
    res.status(400).json({ message: err.message });
  }
};


export const deleteReceiver = async (req: AuthRequest, res: Response) => {
  console.log("Deleting receiver with ID:", req.params.id);
  await dbClient.receiver.delete({
    where: { id: req.params.id, userId: req.user.id },
  });
  logger.info("Receiver deleted", { receiverId: req.params.id });
  res.json({ message: "Receiver deleted" });
};


