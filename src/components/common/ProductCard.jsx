import React from "react";
import { Link } from "react-router-dom";
import productsData from "../imgs/productos.json";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

const ProductCard = ({ productId }) => {
  const { addToCart } = useCart();
  const product = productsData.find((product) => product.id === productId);

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  if (product.category === "Cafe") {
    return (
      <Card className="product-card" key={product.id}>
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
        </Link>
        <Button onClick={() => addToCart(product)}>Añadir al carrito</Button>
      </Card>
    );
  }
};
export default ProductCard;
