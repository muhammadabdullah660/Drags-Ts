import React from "react";
import { CategoryMenuContainer } from "./categoryMenu-style.jsx";
import CategoriesItem from "../CategoryItem/categoriesItem.jsx";
export default function CategoryMenu({ categories }) {
  return (
    <CategoryMenuContainer>
      {categories.map((category) => (
        <CategoriesItem category={category} />
      ))}
    </CategoryMenuContainer>
  );
}
