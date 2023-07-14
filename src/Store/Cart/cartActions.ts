import { CART_ACTION_TYPES, CartItem } from "./cartActionTypes";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/Reducer/reducer";
import { CategoryItem } from "../Categories/categoryActionTypes";

const addItems = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  const existingItems = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

const deleteItems = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  const existingItems = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItems && existingItems.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  //delete the item from cart
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
const clearItems = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  //clear the item from cart
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
const emptyItems = (): CartItem[] => {
  return [];
};

export type SetIsCartOpenAction = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItemsAction = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItemsAction => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
  }
);

export const setIsCartOpen = withMatcher(
  (isCartOpen: boolean): SetIsCartOpenAction => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
  }
);
export const addItemsIntoCart = withMatcher(
  (cartItems: CartItem[], item: CategoryItem) => {
    const newCartItems = addItems(cartItems, item);
    return setCartItems(newCartItems);
  }
);
// Delete items from cart
export const clearItemsFromCart = withMatcher(
  (cartItems: CartItem[], item: CategoryItem) => {
    const newCartItems = clearItems(cartItems, item);
    return setCartItems(newCartItems);
  }
);
export const deleteItemsFromCart = withMatcher(
  (cartItems: CartItem[], item: CategoryItem) => {
    const newCartItems = deleteItems(cartItems, item);
    return setCartItems(newCartItems);
  }
);
export const emptyItemsFromCart = withMatcher(() => {
  const newCartItems = emptyItems();
  return setCartItems(newCartItems);
});
