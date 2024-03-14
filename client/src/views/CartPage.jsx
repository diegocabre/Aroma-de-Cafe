import React from "react";
import { useCart } from "../components/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartPage = () => {
  const { cart } = useCart();

  const calculatesubtotal = () => {
    return cart.reduce((subtotal, product) => subtotal + product.price, 0);    
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>Precio: {product.price}</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          ))}
          <p>Subtotal: {calculatesubtotal()}</p>
          <Button variant="primary" as={Link} to="/checkout">Proceder al Pago</Button>
          <Button variant="primary" as={Link} to="/">Eliminar pedido</Button>
          <Button variant="primary" as={Link} to="/products">Seguir Comprando</Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
