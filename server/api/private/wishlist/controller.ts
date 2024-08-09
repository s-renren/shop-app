import { getAllWishLists } from 'domain/wishList/useCase/wishListUseCase';
import { prismaClient } from 'service/prismaClient';
import { defineController } from './$relay';

// type RequestBody = {
//   name: string;
// url?: string;
// wishListId?: number;
// };

// const addItem = async (wishListId: number, url: string) => {
//   try {
//     const item = await addItemToWishList(wishListId, url);
//     return { status: 201, body: item };
//   } catch (error) {
//     return { status: 500, body: { error: 'Failed to add item to wish list' } };
//   }
// };

export default defineController(() => ({
  get: async () => {
    try {
      const wishLists = await getAllWishLists();
      return { status: 200, body: wishLists };
    } catch (error) {
      return { status: 500, body: { error: 'Failed to fetch wish lists' } };
    }
  },
  post: async ({ body }) => {
    const name = body['name']
    const wishList = await prismaClient.wishList.create({
      data: { name },
    });
    return { status: 201, body: wishList };

    // if (wishListId && url) {
    //   const result = await addItem(wishListId, url);
    //   if (result.status === 201) return result;
    // }
  },
}));
