import "./category.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/productCard";
export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [categoryItems, setCategoryItems] = useState(categoriesMap[category]);
  useEffect(() => {
    setCategoryItems(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <div className="categoryContainer">
      {categoryItems &&
        categoryItems.map((item) => {
          return <ProductCard product={item} />;
        })}
    </div>
  );
}
