import React from "react";
import Header from "../Components/CommonComponents/Header";
import HomeComp from "../Components/HomePageAllComponents/HomeComp";
import Feature from "../Components/HomePageAllComponents/Feature";
import FeatureProduct from "../Components/HomePageAllComponents/FeatureProduct";
import OfferArea from "../Components/HomePageAllComponents/OfferArea";
import NewProductAera from "../Components/HomePageAllComponents/NewProductAera";
import Inspired_Product_Area from "../Components/HomePageAllComponents/Inspired_Product_Area";
import Blog_Area from "../Components/HomePageAllComponents/Blog_Area";
import Footer from "../Components/CommonComponents/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeComp />
      <Feature />
      <FeatureProduct />
      <OfferArea />
      <NewProductAera />
      <Inspired_Product_Area />
      <Blog_Area />
      <Footer />
    </>
  );
};

export default Home;
