import React from "react";
import { useCart } from "../components/context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

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
              <p>Subtotal: {product.price * product.quantity}</p>
            </div>
          ))}
          <p>
            Total:{" "}
            {cart.reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )}
          </p>
          <button>Proceder al Pago</button>
          <button>Eliminar pedido</button>
          <button>Seguir Comprando</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
