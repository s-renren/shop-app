export type WishListEntity = {
  id: number;
  name: string;
  items: ItemEntity[];
};

export type ItemEntity = {
  id: number;
  url: string;
  wishListId: number;
};
