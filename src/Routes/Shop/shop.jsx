import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.js";
import { setCategoriesMap } from "../../Store/Categories/categoryAction.js";
import CategoriesPreview from "../CategoriesPreview/categoriesPreview";
import { selectCategoriesMap } from "../../Store/Categories/categorySelector.js";
import Category from "../Category/category";
export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments("categories");
      console.log(categoriesMap);
      dispatch(setCategoriesMap(categoriesMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index path="/" element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
