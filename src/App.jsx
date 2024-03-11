import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./views/Home";
import Products from "./views/Products";
import ProductDetailPage from "./views/ProductDetailPage";
import CartPage from "./views/CartPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductDetailPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
