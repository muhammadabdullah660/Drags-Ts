import "./cartItem.scss";
export default function CartItem(cartItem) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cartItemContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="itemDetails">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
