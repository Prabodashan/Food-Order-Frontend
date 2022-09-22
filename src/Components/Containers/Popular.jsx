import React from "react";
import "./Styles/Popular.css";

import PopularCard from "./PopularCard";

import popularFood1 from "../../Assets/food-1.png";
import popularFood2 from "../../Assets/food-2.png";
import popularFood3 from "../../Assets/food-3.png";
import popularFood4 from "../../Assets/food-4.png";
import popularFood5 from "../../Assets/food-5.png";
import popularFood6 from "../../Assets/food-6.png";
import popularFood7 from "../../Assets/food-7.png";
import popularFood8 from "../../Assets/food-8.png";

const Popular = () => {
  return (
    <section className="popular" id="popular">
      <div className="heading">
        <span>popular food</span>
        <h3>our special dishes</h3>
      </div>

      <div className="box-container">
        <PopularCard
          img={popularFood1}
          name="delicious food"
          rating="4.5"
          ratingCount="50"
          price="50"
          discount="20"
        />
        <PopularCard
          img={popularFood2}
          name="delicious food"
          rating="4.5"
          ratingCount="36"
          price="60"
          discount="20"
        />
        <PopularCard
          img={popularFood3}
          name="delicious food"
          rating="4.5"
          ratingCount="46"
          price="40"
          discount="20"
        />
        <PopularCard
          img={popularFood4}
          name="delicious food"
          rating="4.5"
          ratingCount="50"
          price="60"
          discount="20"
        />
        <PopularCard
          img={popularFood5}
          name="delicious food"
          rating="4.5"
          ratingCount="80"
          price="40"
          discount="20"
        />
        <PopularCard
          img={popularFood6}
          name="delicious food"
          rating="4.5"
          ratingCount="90"
          price="60"
          discount="20"
        />
        <PopularCard
          img={popularFood7}
          name="delicious food"
          rating="4.5"
          ratingCount="40"
          price="80"
          discount="20"
        />
        <PopularCard
          img={popularFood8}
          name="delicious food"
          rating="4.5"
          ratingCount="25"
          price="60"
          discount="20"
        />
      </div>
    </section>
  );
};

export default Popular;
