import Button from "../Button/button";
import "./productCard.scss";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button="inverted">Add to cart</Button>
    </div>
  );
}
