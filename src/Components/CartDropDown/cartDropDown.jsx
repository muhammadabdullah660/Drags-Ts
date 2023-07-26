import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cartDropDown-style.jsx";
import Button from "../Button/button";
import CartItem from "../CartItem/cartItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store/Cart/cartSelector.ts";
export default function CartDropDown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  // console.log(cartItems);
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button onClick={navigateToCheckout} button="inverted">
          GO TO CHECKOUT
        </Button>
      </CartItemsContainer>
    </CartDropDownContainer>
  );
}
