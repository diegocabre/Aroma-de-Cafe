import React from "react";
import { Row, Col } from "react-bootstrap";
import SouvenirCard from "../components/common/SouvenirCard";
import productsData from "../components/imgs/productos.json";
import "../css/SouvenirPage.css";

const SouvenirPage = () => {
  return (
    <div className="products">
      <Row xs={1} md={3} lg={5} className="row g-3">
        {productsData.map((product) => ( 
          <Col key={product.id}>
            <SouvenirCard productId={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SouvenirPage;
