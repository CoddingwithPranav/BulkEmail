import { dbClient } from "@repo/db/client";
import { CreateCategoriesInput, UpdateCategoriesInput } from "../../../../packages/types/src/categories/categories.schema";

export const categoriesService = {  async createCategory(data: CreateCategoriesInput, userId: string) {
    return await dbClient.category.create({
      data: {
        ...data,
        userId,
      },
    });
  },

  async getAllCategories() {
    return await dbClient.category.findMany({
      orderBy: { createdAt: "desc" },
    });
  },


  async getMyCategories(params: {
    userId: string;
    page: number;
    limit: number;
    search?: string;
  }) {
    const { userId, page, limit, search } = params;

    const skip = (page - 1) * limit;

    const whereClause: any = {
      userId,
      isDeleted: false,
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    const [categories, totalItems] = await dbClient.$transaction([
      dbClient.category.findMany({
        skip,
        take: limit,
        where: whereClause,
        orderBy: { createdAt: "desc" },
      }),
      dbClient.category.count({ where: whereClause }),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      categories,
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  },

  async getCategoryById(id: string, userId: string) {
    return await dbClient.category.findFirst({
      where: { id, userId, isDeleted: false },
    });
  },

  async updateCategory(id: string, data: UpdateCategoriesInput) {
    return await dbClient.category.update({
      where: { id },
      data,
    });
  },

  async deleteCategory(id: string, userId: string) {
    return await dbClient.category.update({
      where: { id, userId },
      data: { isDeleted: true },
    });
  }
};
