import type { Items, WishList } from '@prisma/client';
import { WishListQury } from '../repository/wishListQuery';

export const wishListUseCase = {
  createWishList: async (name: string, items: string[]): Promise<WishList & { items: Items[] }> => {
    return await WishListQury.createWishList(name, items);
  },
  getAllWishLists: async (): Promise<(WishList & { items: Items[] })[]> => {
    return await WishListQury.getAllWishLists();
  },
};
