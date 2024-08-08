import type { Item, WishList } from '@prisma/client';
import { prismaClient } from 'service/prismaClient';

export const WishListQury = {
  createWishList: async (
    name: string,
    items: { description: string; url: string }[],
  ): Promise<WishList & { items: Item[] }> => {
    const wishList = await prismaClient.wishList.create({
      data: {
        name,
        items: {
          create: items.map(({ description, url }) => ({
            description,
            url,
          })),
        },
      },
      include: {
        items: true,
      },
    });
    return wishList;
  },

  getAllWishLists: async (): Promise<(WishList & { items: Item[] })[]> => {
    return await prismaClient.wishList.findMany({
      include: {
        items: true,
      },
    });
  },
};
