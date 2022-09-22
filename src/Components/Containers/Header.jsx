import React from "react";

import "./Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <i className="fas fa-utensils"></i> food
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#popular">popular</a>
        <a href="#menu">menu</a>
        <a href="#order">order</a>
      </nav>

      <div className="icons">
        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="search-btn" className="fas fa-search"></div>
        <div id="cart-btn" className="fas fa-shopping-cart"></div>
        <div id="login-btn" className="fas fa-user"></div>
      </div>
    </header>
  );
};

export default Header;
