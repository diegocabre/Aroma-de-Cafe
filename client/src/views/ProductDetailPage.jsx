import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import productsData from "../components/imgs/productos.json";
import ProductCard from "../components/common/ProductCard";
import "../css/ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams(); // Recupera el ID del producto de la URL

  // Busca el producto correspondiente por su ID
  const product = productsData.find((product) => product.id === parseInt(id));

  return (
    <div>
      <Link to="/products" className="back-button">
        <Button variant="primary">Volver</Button>
      </Link>
      {product ? (
        <ProductCard productId={product.id} /> // Renderiza el ProductCard con el producto encontrado
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ProductDetailPage;

