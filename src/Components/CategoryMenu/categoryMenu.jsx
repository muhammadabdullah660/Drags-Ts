import React from "react";
import "./categoryMenu.scss";
import CategoriesItem from "../CategoryItem/categoriesItem.jsx";
export default function CategoryMenu({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoriesItem category={category} />
      ))}
    </div>
  );
}
