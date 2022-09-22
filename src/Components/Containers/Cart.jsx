import React from "react";

import "./Styles/Cart.css";

const Cart = ({ img, name, quantity, price }) => {
  return (
    <div className="cart">
      <i className="fas fa-times"></i>
      <img src={img} alt="" />
      <div className="content">
        <h3>{name}</h3>
        <span> quantity : </span>
        <input type="number" name="" value={quantity} id="" />
        <br />
        <span> price : </span>
        <span className="price"> ${price} </span>
      </div>
    </div>
  );
};

export default Cart;
