import { createSelector } from "reselect";
import { CartState } from "./cartReducer";
import { RootState } from "../store";
const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
