import React from "react";
import "./categoriesItem.scss";
export default function CategoriesItem({ category }) {
  const { title, imageUrl, id } = category;
  return (
    <div key={id} className="categoryItemContainer">
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="categorItemBody">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
