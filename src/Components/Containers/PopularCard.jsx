import React from "react";
import "./Styles/PopularCard.css";

const PopularCard = ({ img, name, rating, ratingCount, price, discount }) => {
  return (
    <div className="box">
      <i className="fas fa-heart" />
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <span> ({ratingCount}) </span>
        </div>
        <div className="price">
          ${(price * (100 - discount)) / 100} <span>${price}</span>
        </div>
        <button className="btn">add to cart</button>
      </div>
    </div>
  );
};

export default PopularCard;
