import type { CategoryType } from "./CategoryType";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  images: Array<string>;
};
