import { CartContext } from "../../Contexts/cartcontext";
import "./checkout.scss";
import { useContext } from "react";
export default function Checkout() {
  const { cartItems, addIntoCart, deleteItemsFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>hey!</h1>
      <div>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <span>{cartItem.price}</span>
            <br />
            <span>{cartItem.quantity}</span>
            <br />
            <button onClick={() => addIntoCart(cartItem)}>Add</button>
            <button onClick={() => deleteItemsFromCart(cartItem)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
