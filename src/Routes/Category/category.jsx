import "./category.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/productCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/Categories/categorySelector";
export default function Category() {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
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
