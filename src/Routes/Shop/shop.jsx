import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import CategoryPreview from "../../Components/CategoryPreview/categoryPreview";
import "./shop.scss";
export default function Shop() {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const categoryItems = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} items={categoryItems} />
        );
      })}
    </>
  );
}
