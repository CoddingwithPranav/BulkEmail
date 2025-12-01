import { dbClient } from "@repo/db/client";
import { CreateCategoriesInput, UpdateCategoriesInput } from "@repo/types";

export const createCategory = async (userId: string, data: any) => {
  return await dbClient.category.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const getCategories = async (userId: string, query: { page: number; limit: number; search?: string }) => {
  const { page, limit, search } = query;
  const skip = (page - 1) * limit;

  const where: any = {
    userId,
    isDeleted: false,
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ]
    })
  };

  const [categories, total] = await dbClient.$transaction([
    dbClient.category.findMany({
      where,
      skip,
      take: parseInt(limit.toString()),
      orderBy: { createdAt: "desc" },
    }),
    dbClient.category.count({ where })
  ]);

  return {
    categories,
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

export const getCategoryById = async (id: string, userId: string) => {
  return await dbClient.category.findFirst({
    where: { id, userId, isDeleted: false },
  });
};

export const updateCategory = async (id: string, data: UpdateCategoriesInput) => {
  return await dbClient.category.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id: string, userId: string) => {
  return await dbClient.category.update({
    where: { id, userId },
    data: { isDeleted: true },
  });
};
