import type { CategoryType } from "./CategoryType";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  images: Array<string>;
};

export type ProductToAddType = Omit<ProductType, "id" | "category"> & {
  categoryId: CategoryType["id"];
};

export type ProductToDeleteType = {
  id: number;
};

export type ProductToUpdateBodyType = Partial<ProductToAddType>;
