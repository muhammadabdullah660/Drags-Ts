import { CategoryContainer, Title } from "./category-style.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/productCard.jsx";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/spinner.jsx";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/Categories/categorySelector.js";
type CategoryRouteParams = {
  category: string;
};
export default function Category() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const [categoryItems, setCategoryItems] = useState(categoriesMap[category]);
  useEffect(() => {
    setCategoryItems(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {categoryItems &&
            categoryItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
}
