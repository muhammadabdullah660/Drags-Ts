import { createContext, useReducer } from "react";
import { createAction } from "../utils/Reducer/reducer";
const addItems = (cartItems, item) => {
  console.log("cartItems", cartItems);
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
export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
  setIsCartOpen: () => null,
  setCartItems: () => null,
  setCartCount: () => null,
  addItemsIntoCart: () => null,
  deleteItemsFromCart: () => null,
  clearItemsFromCart: () => null,
});
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };

    default:
      throw new Error(`Unknown action type: ${type} in cartReducer`);
  }
};

export default function CartProvider({ children }) {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };
  // Add items to cart
  const addItemsIntoCart = (item) => {
    const newCartItems = addItems(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };
  // Delete items from cart
  const clearItemsFromCart = (item) => {
    const newCartItems = clearItems(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };
  const deleteItemsFromCart = (item) => {
    const newCartItems = deleteItems(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (value) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: value });
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsIntoCart,
    cartCount,
    deleteItemsFromCart,
    clearItemsFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
