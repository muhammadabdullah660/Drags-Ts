import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/categoriesPreview";
import Category from "../Category/category";
export default function Shop() {
  return (
    <Routes>
      <Route index path="/" element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
