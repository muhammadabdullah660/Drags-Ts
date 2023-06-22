import "./cartDropDown.scss";
import Button from "../Button/button";

export default function CartDropDown() {
  return (
    <div className="cartDropDownContainer">
      <div className="cartItemsContainer">
        <Button button="inverted">GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}
