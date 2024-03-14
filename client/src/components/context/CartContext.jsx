// CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.findIndex((p) => p.id === product.id);

    if (existingProduct !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProduct].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
