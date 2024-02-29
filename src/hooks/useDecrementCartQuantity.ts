import { useAppDispatch } from "./useAppDispatch";
import { decrementCartQuantity } from "../redux/slices/cartSlice";

const useDecrementCartQuantity = (itemId: number) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    dispatch(decrementCartQuantity(itemId));
  };

  return decrement;
};

export { useDecrementCartQuantity };
