import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkoutItem-style.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store/Cart/cartSelector";
import {
  addItemsIntoCart,
  clearItemsFromCart,
  deleteItemsFromCart,
} from "../../Store/Cart/cartActions";
export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, quantity, imageUrl } = cartItem;
  const clearItem = () => {
    dispatch(clearItemsFromCart(cartItems, cartItem));
  };
  const addItemIntoCart = () => {
    dispatch(addItemsIntoCart(cartItems, cartItem));
  };
  const deleteItemFromCart = () => {
    dispatch(deleteItemsFromCart(cartItems, cartItem));
  };
  return (
    <CheckoutItemContainer key={cartItem.id}>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={deleteItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemIntoCart}>&#10095;</Arrow>
      </Quantity>{" "}
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
