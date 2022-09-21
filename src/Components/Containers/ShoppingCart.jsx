import React from "react";
import "./Styles/ShoppingCart.css";

import menuImg1 from "../../Assets/menu-1.png";
import menuImg2 from "../../Assets/menu-2.png";
import menuImg3 from "../../Assets/menu-3.png";
import menuImg4 from "../../Assets/menu-4.png";
import menuImg5 from "../../Assets/menu-5.png";
import Cart from "./Cart";

const ShoppingCart = () => {
  return (
    <section class="shopping-cart-container">
      <div class="products-container">
        <h3 class="title">My Cart</h3>

        <div class="box-container">
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

      <div class="cart-total">
        <h3 class="title"> cart total </h3>

        <div class="box">
          <h3 class="subtotal">
            subtotal : <span>$200</span>
          </h3>
          <h3 class="total">
            total : <span>$200</span>
          </h3>

          <a href="#btn" class="btn">
            proceed to checkout
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
