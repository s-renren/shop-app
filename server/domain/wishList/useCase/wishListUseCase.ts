import type { Item, WishList } from '@prisma/client';
import type { WishListEntity } from 'domain/task/model/wishList';
import { prismaClient } from 'service/prismaClient';

export const createWishList = async (name: string): Promise<WishList> => {
  return await prismaClient.wishList.create({
    data: { name },
  });
};

export const addItemToWishList = async (wishListId: number, url: string): Promise<Item> => {
  return await prismaClient.item.create({
    data: {
      url,
      wishListId,
    },
  });
};

export const getAllWishLists = async (): Promise<WishListEntity[]> => {
  return prismaClient.wishList
    .findMany({
      include: {
        items: true, // Prismaの設定で`items`が正しく取得されるようにする
      },
    })
    .then((wishLists) =>
      wishLists.map((wishList) => ({
        id: wishList.id,
        name: wishList.name,
        items: wishList.items.map((item) => ({
          id: item.id,
          url: item.url,
          wishListId: item.wishListId,
        })),
      })),
    );
};
