import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../imgs/productos.json";
import { Card, Button } from "react-bootstrap";
import "../css/SouvenirCard.css";

const SouvenirCard = ({ productId }) => {
  const [cartCount, setCartCount] = useState(0); // Estado para mantener el número de elementos en el carrito

  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  if (product.category === "Cafetera" || product.category === "Regalo") {
    const addToCart = () => {
      setCartCount(cartCount + 1); // Aumenta el número de elementos en el carrito
    };

    return (
      <Card className="souvenir-card" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Card.Img
            className="product-image"
            variant="top"
            src={product.image}
          />
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Body>
            <Card.Text>Precio: {product.price}</Card.Text>
            <Card.Text>Categoría: {product.category}</Card.Text>
            <Card.Text>Marca: {product.brand}</Card.Text>
            <Card.Text>Stock: {product.countInStock}</Card.Text>
          </Card.Body>
          <Button
            variant="primary"
            size="lg"
            block
            className="add-to-cart-button"
            onClick={addToCart} // Llama a addToCart cuando se hace clic en el botón
          >
            Agregar al Carrito
          </Button>
        </Link>
        <div className="cart-count">{cartCount}</div> {/* Muestra el número de elementos en el carrito */}
      </Card>
    );
  }
};

export default SouvenirCard;

