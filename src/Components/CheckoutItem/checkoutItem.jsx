import "./checkoutItem.scss";
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
    <div className="checkoutItemContainer" key={cartItem.id}>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={deleteItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemIntoCart}>
          &#10095;
        </div>
      </span>{" "}
      <span className="price">{price}</span>
      <div className="removeButton" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
}
