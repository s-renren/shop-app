// model/work.ts
import type { Items as PrismaItems, WishListEntity as PrismaWishListEntity } from '@prisma/client';

export type Items = PrismaItems;

export type WishListEntity = PrismaWishListEntity & {
  items: Items[];
};
