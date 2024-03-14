import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../components/imgs/productos.json";
import ProductCard from "../components/common/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams(); // Recupera el ID del producto de la URL

  // Busca el producto correspondiente por su ID
  const product = productsData.find((product) => product.id === parseInt(id));

  return (
    <div>
      {product ? (
        <ProductCard productId={product.id} /> // Renderiza el ProductCard con el producto encontrado
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ProductDetailPage;

