import React from "react";
import "./Styles/ShoppingCart.css";

import Cart from "./Cart";

import menuImg1 from "../../Assets/menu-1.png";
import menuImg2 from "../../Assets/menu-2.png";
import menuImg3 from "../../Assets/menu-3.png";
import menuImg4 from "../../Assets/menu-4.png";
import menuImg5 from "../../Assets/menu-5.png";

const ShoppingCart = ({ toggle }) => {
  return (
    <section
      className={
        toggle === "app"
          ? "shopping-cart-container full"
          : "shopping-cart-container"
      }
    >
      <div className="products-container">
        <h3 className="title">My Cart</h3>

        <div className="box-container">
          <Cart
            img={menuImg1}
            name="delicious food"
            quantity="2"
            price="40.00"
          />
          <Cart
            img={menuImg2}
            name="delicious food"
            quantity="2"
            price="40.00"
          />
          <Cart
            img={menuImg3}
            name="delicious food"
            quantity="2"
            price="40.00"
          />
          <Cart
            img={menuImg4}
            name="delicious food"
            quantity="2"
            price="40.00"
          />
          <Cart
            img={menuImg5}
            name="delicious food"
            quantity="2"
            price="40.00"
          />
        </div>
      </div>

      <div className="cart-total">
        <h3 className="title"> cart total </h3>

        <div className="box">
          <h3 className="subtotal">
            subtotal : <span>$200</span>
          </h3>
          <h3 className="total">
            total : <span>$200</span>
          </h3>

          <a href="#btn" className="btn">
            proceed to checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
