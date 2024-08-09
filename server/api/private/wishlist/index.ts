import type { DefineMethods } from 'aspida';
import type { HoshiimoListEntity, WishListEntity } from 'domain/wishList/model/wishList';

export type Methods = DefineMethods<{
  get: {
    resBody: WishListEntity[];
  };
  post: {
    reqBody: {
      name: string;
      // url?: string;
      // wishListId?: number;
    };
    resBody: HoshiimoListEntity;
    // | ItemEntity;
  };
}>;
