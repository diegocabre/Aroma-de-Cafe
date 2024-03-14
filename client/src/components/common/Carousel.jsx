import Carousel from "react-bootstrap/Carousel";
import React from "react";
import imagen1 from "../imgs/sumatra.png";
import imagen2 from "../imgs/jungle.png";
import imagen3 from "../imgs/etiopia.png";
import "./Carousel.css";

function DarkVariantExample() {
  return (
    <Carousel className="carousel" data-bs-theme="dark">
      <Carousel.Item interval={5000} className="carousel-item">
        <img src={imagen1} alt="First slide" />
        <img src={imagen2} alt="" />
        <img src={imagen3} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={5000} className="carousel-item">
        <img src={imagen1} alt="First slide" />
        <img src={imagen2} alt="" />
        <img src={imagen3} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
