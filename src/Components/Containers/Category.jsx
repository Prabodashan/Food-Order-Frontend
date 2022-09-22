import React from "react";
import "./Styles/Category.css";

import CategoryCard from "./CategoryCard";

import categoryImage1 from "../../Assets/cat-1.png";
import categoryImage2 from "../../Assets/cat-2.png";
import categoryImage3 from "../../Assets/cat-3.png";
import categoryImage4 from "../../Assets/cat-4.png";
import categoryImage5 from "../../Assets/cat-5.png";
import categoryImage6 from "../../Assets/cat-6.png";

const Category = () => {
  return (
    <section className="category">
      <CategoryCard img={categoryImage1} category="combo" />
      <CategoryCard img={categoryImage2} category="pizza" />
      <CategoryCard img={categoryImage3} category="burger" />
      <CategoryCard img={categoryImage4} category="chicken" />
      <CategoryCard img={categoryImage5} category="dinner" />
      <CategoryCard img={categoryImage6} category="coffee" />
    </section>
  );
};

export default Category;
