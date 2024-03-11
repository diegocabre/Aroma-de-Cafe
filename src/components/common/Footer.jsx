import React from "react";
import logo from "../imgs/logo.jpg";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <NavLink exact to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink exact to="/"><i className="fa fa-home"></i></NavLink>
            </li>
            <li>
              <NavLink exact to="/products"><i className="fa fa-shopping-bag"></i></NavLink>
            </li>
            <li>
              <NavLink exact to="/cart"><i className="fa fa-shopping-cart"></i></NavLink>
            </li>
            <li>
              <NavLink exact to="/login"><i className="fa fa-user"></i></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
