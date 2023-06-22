import { useContext } from "react";
import { ReactComponent as ShopIcon } from "../../Assests/shopping-bag.svg";
import "./cartIcon.scss";
import { CartContext } from "../../Contexts/cartcontext";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cartIconContainer" onClick={toggleCart}>
      <ShopIcon className="cartIcon" />
      <span className="itemCount">0</span>
    </div>
  );
}
