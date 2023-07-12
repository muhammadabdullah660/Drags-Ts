import { CART_ACTION_TYPES } from "./cartActionTypes";
import { createAction } from "../../utils/Reducer/reducer";

const addItems = (cartItems, item) => {
  //console.log("cartItems", cartItems);
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
const deleteItems = (cartItems, item) => {
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
const clearItems = (cartItems, item) => {
  //clear the item from cart
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
const emptyItems = () => {
  return [];
};
export const setIsCartOpen = (isCartOpen) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
};
export const addItemsIntoCart = (cartItems, item) => {
  const newCartItems = addItems(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
// Delete items from cart
export const clearItemsFromCart = (cartItems, item) => {
  const newCartItems = clearItems(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteItemsFromCart = (cartItems, item) => {
  const newCartItems = deleteItems(cartItems, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const emptyItemsFromCart = () => {
  const newCartItems = emptyItems();
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
