export type Items = {
  id: number;
  description: string;
};

export type WishListEntity = {
  name: string;
  items: Items[];
};
