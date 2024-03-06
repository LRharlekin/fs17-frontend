import { Divider, List } from "@mui/material";
import CartListItem from "./CartListItem";
import CartListFooter from "./CartListFooter";

type CartListProps = {
  cartItems: { id: number; quantity: number }[];
};

const CartList = ({ cartItems }: CartListProps) => {
  return (
    <>
      <List sx={{ my: 1 }}>
        {cartItems.map(({ id, quantity }, index) => {
          if (index === 0) {
            return (
              <CartListItem
                key={`cart-item-${index + 1}`}
                itemId={id}
                quantity={quantity}
              />
            );
          } else {
            return (
              <>
                <Divider />
                <CartListItem
                  key={`cart-item-${index + 1}`}
                  itemId={id}
                  quantity={quantity}
                />
              </>
            );
          }
        })}
        <CartListFooter cartItems={cartItems} />
      </List>
    </>
  );
};

export default CartList;
