import Button from "../Button/button";
import { buttonType } from "../Button/button";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard-style.jsx";
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
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button button={buttonType.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCartContainer>
  );
}
