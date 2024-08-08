import type { ItemEntity, WishListEntity } from 'domain/task/model/wishList';
import {
  addItemToWishList,
  createWishList,
  getAllWishLists,
} from 'domain/wishList/useCase/wishListUseCase';
import { defineController } from './$relay';

type RequestBody = {
  name?: string;
  url?: string;
  wishListId?: number;
};

type ErrorResponse = {
  error: string;
};

const createList = async (name: string) => {
  try {
    const wishList = await createWishList(name);
    return { status: 201, body: wishList };
  } catch (error) {
    return { status: 500, body: { error: 'Failed to create wish list' } };
  }
};

const addItem = async (wishListId: number, url: string) => {
  try {
    const item = await addItemToWishList(wishListId, url);
    return { status: 201, body: item };
  } catch (error) {
    return { status: 500, body: { error: 'Failed to add item to wish list' } };
  }
};

export default defineController(() => ({
  get: async (): Promise<
    { status: 200; body: WishListEntity[] } | { status: 500; body: ErrorResponse }
  > => {
    try {
      const wishLists = await getAllWishLists();
      return { status: 200, body: wishLists };
    } catch (error) {
      return { status: 500, body: { error: 'Failed to fetch wish lists' } };
    }
  },
  post: async ({
    body,
  }: {
    body: RequestBody;
  }): Promise<
    | { status: 201; body: WishListEntity | ItemEntity }
    | { status: 400; body: ErrorResponse }
    | { status: 500; body: ErrorResponse }
  > => {
    const { name, url, wishListId } = body;

    if (name) {
      createList(name);
    }

    if (wishListId && url) {
      addItem(wishListId, url);
    }

    return { status: 400, body: { error: 'Invalid request' } };
  },
}));
