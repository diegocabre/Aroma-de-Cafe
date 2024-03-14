// /src/components/common/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../imgs/logo.png";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();
  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            <Navbar expand="lg">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="SHOP" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/souvenirs">
                      <p>Regalos</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/">
                      <p>Productos</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/3"></NavDropdown.Item>
                    <NavDropdown.Item href="/products/4"></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <NavLink exact to="/">
          <img className="logoimg" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="icons">
        <NavLink to="/register">
          <i className="registro fas fa-user-plus"></i>
        </NavLink>
        <NavLink to="/cart">
          <i className="carrito fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </NavLink>
      </div>
    </header>
  );
};

window.addEventListener("scroll", () => {
  const image = document.querySelector(".logoimg");
  if (window.scrollY > 0) {
    image.classList.add("scrolled");
  } else {
    image.classList.remove("scrolled");
  }
});

export default Header;
