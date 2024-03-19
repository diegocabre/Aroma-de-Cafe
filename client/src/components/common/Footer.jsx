import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contacto">
          <NavLink exact to="/">
            <Button className="boton" variant="light">
              <h2>Contacto</h2>
            </Button>
          </NavLink>
        </div>
        <div className="redes">
          <a href="">
            <i class="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-whatsapp fa-2x"></i>
          </a>
        </div>
        <div className="direccion">
          <p>Calle falsa 123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
