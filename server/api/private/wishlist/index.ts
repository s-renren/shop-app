import type { DefineMethods } from 'aspida';

type WishList = {
  id: number;
  name: string;
  items: Item[];
};

type Item = {
  id: number;
  url: string;
  wishListId: number;
};

type HoshiimoList = {
  id: number;
  name: string;
};

export type Methods = DefineMethods<{
  get: {
    resBody: WishList[];
  };
  post: {
    reqBody: {
      name: string;
      // url?: string;
      // wishListId?: number;
    };
    resBody: HoshiimoList;
    // | ItemEntity;
  };
}>;
