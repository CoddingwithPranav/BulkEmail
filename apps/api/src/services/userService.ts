import prisma from '../config/database';
import logger from '../config/logger';

export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
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
      isAccountVerified: true,
      createdAt: true,
    },
  });
  if (!user) throw new Error('User not found');
  return user;
};

export const updateUserProfile = async (userId: number, data: any) => {
  const updated = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      firstName: true,
      lastName: true,
      organizationName: true,
      profileImage: true,
      accountType: true,
    },
  });
  logger.info('User profile updated', { userId });
  return updated;
};

export const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      role: true,
      accountType: true,
      isAccountVerified: true,
      createdAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });
};