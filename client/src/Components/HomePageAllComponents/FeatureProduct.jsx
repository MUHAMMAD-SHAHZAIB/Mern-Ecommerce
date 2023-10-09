import React from "react";
import "./FeatureProduct.css";
import F_P_1 from "../../assets/img/product/feature-product/f-p-1.jpg";
import F_P_2 from "../../assets/img/product/feature-product/f-p-2.jpg";
import F_P_3 from "../../assets/img/product/feature-product/f-p-3.jpg";
import { PiEyeLight } from "react-icons/pi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const FeatureProductData = [
  {
    id: 1,
    imgSrc: F_P_1,
    title: "Latest men’s sneaker",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 2,
    imgSrc: F_P_2,
    title: "Red women purses",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 3,
    imgSrc: F_P_3,
    title: "Men stylist Smart Watch",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
];

const FeatureProduct = () => {
  return (
    <>
      {/*================ Feature Product Area =================*/}
      <section className="feature_product_area section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>Featured product</span>
                </h2>
                <p>Bring called seed first of third give itself now meat</p>
              </div>
            </div>
          </div>
          <div className="row">
            {FeatureProductData.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img
                      className="img-fluid w-100"
                      src={product.imgSrc}
                      alt=""
                    />
                    <div className="p_icon">
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <PiEyeLight />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <AiOutlineHeart />
                      </a>
                      <a
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <AiOutlineShoppingCart />
                      </a>
                    </div>
                  </div>
                  <div className="product-btm">
                    <a href="#" className="d-block ">
                      <h4>{product.title}</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">${product.price.toFixed(2)}</span>
                      <del>${product.originalPrice.toFixed(2)}</del>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*================ End Feature Product Area =================*/}
    </>
  );
};

export default FeatureProduct;
