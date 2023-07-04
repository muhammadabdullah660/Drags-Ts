import { CartIconContainer, ShopIcon, ItemCount } from "./cartIcon-style.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../Store/Cart/cartSelector";
import { setIsCartOpen } from "../../Store/Cart/cartActions.js";
export default function CartIcon() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShopIcon src="/Assests/shopping-bag.svg" alt="Shopping Bag" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
