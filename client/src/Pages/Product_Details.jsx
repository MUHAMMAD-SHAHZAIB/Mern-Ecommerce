import React from "react";
import HomeBannerArea from "../Components/ProductDetailsAllComponents/HomeBannerArea";
import Header from "../Components/CommonComponents/Header";
import SingleProductArea from "../Components/ProductDetailsAllComponents/SingleProductArea";

const Product_Details = () => {
  return (
    <div>
      <Header />
      <HomeBannerArea />
      <SingleProductArea />
    </div>
  );
};

export default Product_Details;
