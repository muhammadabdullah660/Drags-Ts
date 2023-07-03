import CategoryPreview from "../../Components/CategoryPreview/categoryPreview";
import { selectCategoriesMap } from "../../Store/Categories/categorySelector";
import { useSelector } from "react-redux";
export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
