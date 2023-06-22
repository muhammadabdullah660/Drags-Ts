import "./cartDropDown.scss";
import Button from "../Button/button";
import CartItem from "../CartItem/cartItem";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/cartcontext";
export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };
  // console.log(cartItems);
  return (
    <div className="cartDropDownContainer">
      <div className="cartItemsContainer">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
        <Button onClick={navigateToCheckout} button="inverted">
          GO TO CHECKOUT
        </Button>
      </div>
    </div>
  );
}
