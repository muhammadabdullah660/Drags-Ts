import { CartContext } from "../../Contexts/cartcontext";
import "./checkout.scss";
import { useContext } from "react";
import CheckoutItem from "../../Components/CheckoutItem/checkoutItem";
export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkoutContainer">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
}
