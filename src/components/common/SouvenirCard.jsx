import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../imgs/productos.json";
import { Card, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

const SouvenirCard = ({ productId }) => {
  const { addToCart } = useCart();
  const product = productsData.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
    alert("Producto agregado al carrito");
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.countInStock) {
      setQuantity(value);
    }
  };

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  {
    return (
      <Card className="product-card" key={product.id}>
        <Link to={`/souvenirs/${product.id}`} className="product-card-link">
          <Card.Img
            className="product-image"
            variant="top"
            src={product.image}
          />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Categoria: {product.category}</Card.Text>
          <Card.Text>Stock: {product.countInStock}</Card.Text>
          <Card.Text>Marca: {product.brand}</Card.Text>
          <Form.Group controlId="quantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max={product.countInStock}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default SouvenirCard;
