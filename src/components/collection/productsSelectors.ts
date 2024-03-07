import { AppState } from "../../app/store";

// export const;

export const selectProductById = (state: AppState, id: number) => {
  return state.products.products.find((product) => product.id === id);
};

export const selectPricesByIds = (state: AppState, ids: number[]) => {
  return ids.reduce((acc, id) => {
    const product = state.products.products.find(
      (product) => product.id === id
    );
    if (product) {
      acc.set(product.id, product.price);
    }
    return acc;
  }, new Map<number, number>());
};
