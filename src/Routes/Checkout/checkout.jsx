import "./checkout.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../Components/CheckoutItem/checkoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Store/Cart/cartSelector";
export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
