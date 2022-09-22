import React from "react";

const CategoryCard = ({ img, category }) => {
  return (
    <a href="#b" className="box">
      <img src={img} alt="" />
      <h3>{category}</h3>
    </a>
  );
};

export default CategoryCard;
