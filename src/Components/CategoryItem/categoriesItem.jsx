import React from "react";
import {
  CategoryItemBody,
  CategoryItemContainer,
  BackgroundImageContainer,
} from "./categoriesItem-style.jsx";
export default function CategoriesItem({ category }) {
  const { title, imageUrl, id } = category;
  return (
    <CategoryItemContainer key={id}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
}
