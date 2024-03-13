import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./views/Home";
import Products from "./views/Products";
import ProductDetailPage from "./views/ProductDetailPage";
import SouvenirDetailPage from "./views/SouvenirDetailPage";
import SouvenirPage from "./views/SouvenirPage";
import CartPage from "./views/CartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import { ProductProvider } from "./components/context/ProductContext";
import { CartProvider } from "./components/context/CartContext";

const App = () => {
  return (
    <Router>
      <div>
        <CartProvider>
          <Header />
          <ProductProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/souvenirs" element={<SouvenirPage />} />
              <Route
                exact
                path="/products/:id"
                element={<ProductDetailPage />}
              />
              <Route
                exact
                path="/souvenirs/:id"
                element={<SouvenirDetailPage />}
              />
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
