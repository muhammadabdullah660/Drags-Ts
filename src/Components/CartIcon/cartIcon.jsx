import { useContext } from "react";
import "./cartIcon.scss";
import { CartContext } from "../../Contexts/cartcontext";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cartIconContainer" onClick={toggleCart}>
      <img
        src="/Assests/shopping-bag.svg"
        alt="Shopping Bag"
        className="cartIcon"
      />
      <span className="itemCount">0</span>
    </div>
  );
}
