import { useAppDispatch } from "./useAppDispatch";
import { incrementCartQuantityAndSave } from "../components/cart/cartActions";

const useIncrementCartQuantity = (itemId: number) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementCartQuantityAndSave(itemId));
  };

  return increment;
};

export { useIncrementCartQuantity };
