import "./categoryPreview.scss";
import ProductCard from "../../Components/ProductCard/productCard";
import { Link } from "react-router-dom";

export default function CategoryPreview({ title, items }) {
  return (
    <div className="categoryPreviewContainer">
      <h2>
        <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
      </h2>
      <div className="categoryPreview">
        {items
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
