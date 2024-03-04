import { useAppDispatch } from "./useAppDispatch";
import { decrementCartQuantity } from "../components/cart/cartSlice";

const useDecrementCartQuantity = (itemId: number) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    dispatch(decrementCartQuantity(itemId));
  };

  return decrement;
};

export { useDecrementCartQuantity };
