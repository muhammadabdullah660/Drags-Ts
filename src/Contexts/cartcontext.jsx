import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartCount: 0,
  setCartCount: () => null,
  addItemsIntoCart: () => null,
  deleteItemsFromCart: () => null,
  clearItemsFromCart: () => null,
  cartTotal: 0,
});
const addItems = (cartItems, item) => {
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
export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  // Update cart count
  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(cartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  // Add items to cart
  const addItemsIntoCart = (item) => {
    setCartItems(addItems(cartItems, item));
  };
  // Delete items from cart
  const clearItemsFromCart = (item) => {
    setCartItems(clearItems(cartItems, item));
  };
  const deleteItemsFromCart = (item) => {
    setCartItems(deleteItems(cartItems, item));
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
