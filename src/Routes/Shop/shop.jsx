import { useContext } from "react";
import { ProductsContext } from "../../Contexts/productsContext";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1 key={product.id}>{product.name}</h1>
        </div>
      ))}
    </div>
  );
}
