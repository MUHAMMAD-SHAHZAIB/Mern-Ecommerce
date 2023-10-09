import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ProductDetails from "./Pages/Product_Details";
import ProductCheckout from "./Pages/Product_Checkout";
import ShoppingCart from "./Pages/Shopping_Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/product-checkout" element={<ProductCheckout />} />
      <Route path="/shopping_cart" element={<ShoppingCart />} />
    </Routes>
  );
}

export default App;
