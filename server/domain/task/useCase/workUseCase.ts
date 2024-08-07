import { PrismaClient } from '@prisma/client';
import type { WishListEntity } from '../model/work';

const prisma = new PrismaClient();

export const createWishList = async (name: string): Promise<WishListEntity> => {
  if (!name) {
    throw new Error('Name is required');
  }

  const wishList = await prisma.wishListEntity.create({
    data: {
      name,
      items: {
        create: [],
      },
    },
    include: {
      items: true,
    },
  });

  return wishList as WishListEntity;
};
