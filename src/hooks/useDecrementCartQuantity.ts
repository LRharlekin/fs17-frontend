import { useAppDispatch } from "./useAppDispatch";
import { decrementCartQuantityAndSave } from "../components/cart/cartActions";

const useDecrementCartQuantity = (itemId: number) => {
  const dispatch = useAppDispatch();

  const decrement = () => {
    dispatch(decrementCartQuantityAndSave(itemId));
  };

  return decrement;
};

export { useDecrementCartQuantity };
