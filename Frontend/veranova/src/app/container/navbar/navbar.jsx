"use client";
import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onCarClick, cartCount }) => (
  <nav className="navbar">
    <div className="navbar-logo">VeraNova</div>
    <ul className="navbar-links">
      <li><a href="/">Inicio</a></li>
      <li>
        <button onClick={onCarClick} className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
