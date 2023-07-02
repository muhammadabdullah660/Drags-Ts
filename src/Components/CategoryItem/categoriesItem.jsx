import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoryItemBody,
  CategoryItemContainer,
  BackgroundImageContainer,
} from "./categoriesItem-style.jsx";
export default function CategoriesItem({ category }) {
  const { title, imageUrl, id, routeName } = category;
  const navigate = useNavigate();
  const onNavigate = () => navigate(routeName);
  return (
    <CategoryItemContainer key={id} onClick={onNavigate}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CategoryItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CategoryItemBody>
    </CategoryItemContainer>
  );
}
