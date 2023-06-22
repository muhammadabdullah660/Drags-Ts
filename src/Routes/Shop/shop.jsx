import { useContext } from "react";
import { ProductsContext } from "../../Contexts/productsContext";
import ProductCard from "../../Components/ProductCard/productCard";
import "./shop.scss";
export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
