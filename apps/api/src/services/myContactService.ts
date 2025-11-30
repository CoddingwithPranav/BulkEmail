// src/services/myContactService.ts
import { dbClient } from "@repo/db/client";
import { GetMyContactsQuery } from "@repo/types";

export const createContact = async (
  userId: string,
  data: {
    firstName?: string ;
    lastName?: string ;
    province?: string ;
    district?: string ;
    municipality?: string ;
    phoneNumber: string;
    categoryId: string;
  }
) => {
  // Validate category belongs to user
  const category = await dbClient.category.findUnique({
    where: { id: data.categoryId, userId },
  });

  if (!category) throw new Error("Category not found or access denied");

  return await dbClient.my_Contact.create({
    data: {
      ...data,
      userId,
      phoneNumber: data.phoneNumber,
    },
  });
};

export const getUserContacts = async (userId: string, query: GetMyContactsQuery) => {
  const { page, limit, search, categoryId } = query;
  const skip = (page - 1) * limit;

  const where: any = {
    userId,
    isDeleted: false,
    ...(categoryId && { categoryId }),
    ...(search && {
      OR: [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { phoneNumber: { contains: search } },
        { province: { contains: search, mode: "insensitive" } },
      ],
    }),
  };
  console.log("Querying contacts with where clause:", where);

  const [contacts, total] = await dbClient.$transaction([
    dbClient.my_Contact.findMany({
      where,
      skip,
      take: parseInt(limit.toString()),
      orderBy: { createdAt: "desc" },
      include: {
        category: { select: { name: true } },
      },
    }),
    dbClient.my_Contact.count({ where }),
  ]);

  return {
    contacts,
    pagination: {
      currentPage: page,
      perPage: limit,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1,
    },
  };
};

export const getContactById = async (id: string, userId: string) => {
  return await dbClient.my_Contact.findFirst({
    where: { id, userId, isDeleted: false },
    include: { category: { select: { name: true } } },
  });
};

export const updateContact = async (
  id: string,
  userId: string,
  data: Partial<{
    firstName?: string;
    lastName?: string;
    province?: string;
    district?: string;
    municipality?: string;
    phoneNumber?: string;
    categoryId?: string;
  }>
) => {
  if (data.categoryId) {
    const category = await dbClient.category.findUnique({
      where: { id: data.categoryId, userId },
    });
    if (!category) throw new Error("Invalid category");
  }

  // Remove categoryId from data before updating
  const { categoryId, ...updateData } = data;

  return await dbClient.my_Contact.update({
    where: { id, userId },
    data: updateData,
    include: { category: { select: { name: true } } },
  });
};

export const deleteContact = async (id: string, userId: string) => {
  const contact = await dbClient.my_Contact.findFirst({
    where: { id, userId, isDeleted: false },
  });

  if (!contact) throw new Error("Contact not found");

  // Soft delete
  return await dbClient.my_Contact.update({
    where: { id },
    data: { isDeleted: true },
  });
};

export const bulkDeleteContacts = async (ids: string[], userId: string) => {
  return await dbClient.my_Contact.updateMany({
    where: { id: { in: ids }, userId },
    data: { isDeleted: true },
  });
};