import React from "react";
import Header from "../Components/CommonComponents/Header";
import Footer from "../Components/CommonComponents/Footer";
import HomeBannerArea from "../Components/ShoppingCartAllComponents/HomeBannerArea";
import CartArea from "../Components/ShoppingCartAllComponents/CartArea";

const Shopping_Cart = () => {
  return (
    <>
      <Header />
      <HomeBannerArea />
      <CartArea />
      <Footer />
    </>
  );
};

export default Shopping_Cart;
