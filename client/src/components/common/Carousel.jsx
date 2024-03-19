import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel, Row, Col } from "react-bootstrap";
import productData from "../../components/imgs/productos.json";
import "../css/Carousel.css";

function DarkVariantExample() {
  // Función para dividir los productos en grupos de 3 para mostrar en cada diapositiva del carrusel
  const chunkProducts = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Dividir los productos en grupos de 3
  const productsChunks = chunkProducts(productData, 3);

  return (
    <Carousel className="carousel d-none d-lg-block" data-bs-theme="dark">
      {productsChunks.map((chunk, index) => (
        <Carousel.Item key={index} interval={5000} className="carousel-item">
          <Row className="justify-content-center">
            {chunk.map((product) => (
              <Col
                key={product.id}
                md={4}
                sm={6}
                lg={4}
                className="text-center"
              >
                <NavLink to={`/product/${product.id}`} className="d-block">
                  <img src={product.image} alt={product.name} />
                  <p className="mt-2 mb-0">{product.name}</p>
                  <p className="mt-1">${product.price}</p>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantExample;
