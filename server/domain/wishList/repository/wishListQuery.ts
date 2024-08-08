import type { Items, WishList } from '@prisma/client';
import { prismaClient } from 'service/prismaClient';

export const WishListQury = {
  createWishList: async (name: string, items: string[]): Promise<WishList & { items: Items[] }> => {
    const WishList = await prismaClient.wishList.create({
      data: {
        name,
        items: {
          create: items.map((description) => ({ description })),
        },
      },
      include: {
        items: true,
      },
    });
    return WishList;
  },
  getAllWishLists: async (): Promise<(WishList & { items: Items[] })[]> => {
    return await prismaClient.wishList.findMany({
      include: {
        items: true,
      },
    });
  },
};
