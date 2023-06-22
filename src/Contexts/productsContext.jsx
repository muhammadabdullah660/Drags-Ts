import { createContext, useState } from "react";
import Products from "../../src/shopData.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(Products);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
