import { useAppDispatch } from "./useAppDispatch";
import { incrementCartQuantity } from "../redux/slices/cartSlice";

const useIncrementCartQuantity = (itemId: number) => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(incrementCartQuantity(itemId));
  };

  return increment;
};

export { useIncrementCartQuantity };
