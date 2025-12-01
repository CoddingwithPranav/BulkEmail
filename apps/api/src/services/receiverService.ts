import { dbClient } from "@repo/db/client";
import { GetMyReceiversQuery } from "@repo/types";

export const createReceiver = async (userId: string, data: any) => {
  return await dbClient.receiver.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const getReceivers = async (userId: string, query: GetMyReceiversQuery) => {
  const { page, limit, search } = query;
  const skip = (page - 1) * limit;

  const where: any = {
    userId,
    isDeleted: false,
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { phoneNumber: { contains: search } },
        { province: { contains: search, mode: "insensitive" } },
        { district: { contains: search, mode: "insensitive" } },
        { municipality: { contains: search, mode: "insensitive" } },
      ]
    })
  };

  const [receivers, total] = await dbClient.$transaction([
    dbClient.receiver.findMany({
      where,
      skip,
      take: parseInt(limit.toString()),
      orderBy: { createdAt: "desc" }
    }),
    dbClient.receiver.count({ where })
  ]);

  return {
    receivers,
    pagination: {
      currentPage: page,
      perPage: limit,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1
    }
  };
};

export const getReceiverById = async (id: string, userId: string) => {
  return await dbClient.receiver.findFirst({
    where: { id, userId, isDeleted: false },
  });
};

export const updateReceiver = async (id: string, userId: string, data: any) => {
  return await dbClient.receiver.update({
    where: { id, userId },
    data,
  });
};

export const deleteReceiver = async (id: string, userId: string) => {
  return await dbClient.receiver.update({
    where: { id, userId },
    data: { isDeleted: true },
  });
};
