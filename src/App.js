import { useState, useEffect } from "react";
function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mens" },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        {categories.map((category) => {
          return (
            <div className="col-md-4 category-body-container">
              <div></div>
              <h3>{category.title}</h3>
              <p>Shop Now</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
