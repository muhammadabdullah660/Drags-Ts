import Button from "../Button/button";
import "./productCard.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cartcontext";
export default function ProductCard({ product }) {
  const { addIntoCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    addIntoCart(product);
  };
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
}
