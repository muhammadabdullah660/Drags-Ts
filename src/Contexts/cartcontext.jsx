import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
});
const addItemsToCart = (cartItems, item) => {
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
export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addIntoCart = (item) => {
    setCartItems(addItemsToCart(cartItems, item));
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addIntoCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
