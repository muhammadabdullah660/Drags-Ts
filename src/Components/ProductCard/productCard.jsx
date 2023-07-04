import Button from "../Button/button";
import { buttonType } from "../Button/button";
import "./productCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store/Cart/cartSelector";
import { addItemsIntoCart } from "../../Store/Cart/cartActions";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  //console.log("cartItems", cartItems);
  const addProductToCart = () => {
    dispatch(addItemsIntoCart(cartItems, product));
  };
  return (
    <div className="productCardContainer">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button button={buttonType.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
}
