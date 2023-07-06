import CategoryPreview from "../../Components/CategoryPreview/categoryPreview";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/Categories/categorySelector";
import { useSelector } from "react-redux";
import Spinner from "../../Components/Spinner/spinner";
export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const categoryItems = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} items={categoryItems} />
          );
        })
      )}
    </>
  );
}
