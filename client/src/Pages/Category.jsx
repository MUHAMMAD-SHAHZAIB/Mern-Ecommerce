import React from "react";
import Header from "../Components/CommonComponents/Header";
import HomeBannerArea from "../Components/CategoryPageAllComponents/HomeBannerArea";
import CategoryProductArea from "../Components/CategoryPageAllComponents/CategoryProductArea";
import Footer from "../Components/CommonComponents/Footer";

const Category = () => {
  return (
    <div>
      <Header />
      <HomeBannerArea />
      <CategoryProductArea />
      <Footer/>
    </div>
  );
};

export default Category;
