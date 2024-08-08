import type { DefineMethods } from 'aspida';
import type { ItemEntity, WishListEntity } from 'domain/task/model/wishList';

export type Methods = DefineMethods<{
  get: {
    resBody: WishListEntity[];
  };
  post: {
    reqBody: {
      name?: string;
      url?: string;
      wishListId?: number;
    };
    resBody: WishListEntity | ItemEntity;
  };
}>;
