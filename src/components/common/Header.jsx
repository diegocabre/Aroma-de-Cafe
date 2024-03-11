// /src/components/common/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../imgs/logo.jpg";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li>
            <Navbar expand="lg">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavDropdown title="SHOP" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/products/1">
                        <p>Café Brasil</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/products/2">
                        <p>Café Francés</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/products/3"></NavDropdown.Item>
                      <NavDropdown.Item href="/products/4"></NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <NavLink exact to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="icons">
{/*         <NavLink to="/login">
          <i className="fas fa-user"></i>
        </NavLink> */}
        <NavLink to="/register">
          <i className="fas fa-user-plus"></i>
        </NavLink>
        <NavLink to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
