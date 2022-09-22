import React from "react";
import { useState } from "react";

import "./Styles/Header.css";

const Header = ({ searchToggle, cartToggle }) => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const menuToggle = () => {
    setMobileMenu(!MobileMenu);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <i className="fas fa-utensils"></i> food
      </a>

      <nav className={MobileMenu ? "navbar" : "navbar active"}>
        <a href="#home" onClick={menuToggle}>
          home
        </a>
        <a href="#about" onClick={menuToggle}>
          about
        </a>
        <a href="#popular" onClick={menuToggle}>
          popular
        </a>
        <a href="#menu">menu</a>
        <a href="#order">order</a>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars" onClick={menuToggle}></div>
        <div
          id="search-btn"
          className="fas fa-search"
          onClick={searchToggle}
        ></div>
        <div
          id="cart-btn"
          className="fas fa-shopping-cart"
          onClick={cartToggle}
        ></div>
        <div id="login-btn" className="fas fa-user"></div>
      </div>
    </header>
  );
};

export default Header;
