import { Preview, CategoryPreviewContainer } from "./categoryPreview-style.jsx";
import ProductCard from "../../Components/ProductCard/productCard";
import { Link } from "react-router-dom";

export default function CategoryPreview({ title, items }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {items
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}
