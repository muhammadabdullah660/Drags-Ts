import {
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
} from "./cartItem-style.jsx";
export default function CartItem(cartItem) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <span>{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
}
