import { useContext } from "react";
import "./checkoutItem.scss";
import { CartContext } from "../../Contexts/cartcontext";

export default function CheckoutItem({ cartItem }) {
  const { clearItemsFromCart, addItemsIntoCart, deleteItemsFromCart } =
    useContext(CartContext);
  const { name, price, quantity, imageUrl } = cartItem;
  const clearItem = () => {
    clearItemsFromCart(cartItem);
  };
  const addItemIntoCart = () => {
    addItemsIntoCart(cartItem);
  };
  const deleteItemFromCart = () => {
    deleteItemsFromCart(cartItem);
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
