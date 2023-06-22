import React from "react";
import { ReactComponent as ShopIcon } from "../../Assests/shopping-bag.svg";
import "./cartIcon.scss";
export default function CartIcon() {
  return (
    <div className="cartIconContainer">
      <ShopIcon className="cartIcon" />
      <span className="itemCount">0</span>
    </div>
  );
}
