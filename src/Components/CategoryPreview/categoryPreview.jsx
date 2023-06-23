import "./categoryPreview.scss";
import ProductCard from "../../Components/ProductCard/productCard";
export default function CategoryPreview({ title, items }) {
  return (
    <div className="categoryPreviewContainer">
      <h2>
        <span className="title">{title}</span>
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
