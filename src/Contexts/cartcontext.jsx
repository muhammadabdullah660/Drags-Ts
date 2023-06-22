import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  addIntoCart: () => null,
  deleteItemsFromCart: () => null,
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

export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // Update cart count
  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(cartCount);
  }, [cartItems]);
  // Add items to cart
  const addIntoCart = (item) => {
    setCartItems(addItemsToCart(cartItems, item));
  };
  // Delete items from cart
  const deleteItemsFromCart = (item) => {
    setCartItems(deleteItems(cartItems, item));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addIntoCart,
    cartCount,
    deleteItemsFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
