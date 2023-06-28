import { useContext } from "react";
import { CartIconContainer, ShopIcon, ItemCount } from "./cartIcon-style.jsx";
import { CartContext } from "../../Contexts/cartcontext";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShopIcon src="/Assests/shopping-bag.svg" alt="Shopping Bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
