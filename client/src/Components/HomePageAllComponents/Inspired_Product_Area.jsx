import React from "react";
import "./Inspired_Product_Area.css";
import Pic1 from "../../assets/img/product/inspired-product/i1.jpg";
import Pic2 from "../../assets/img/product/inspired-product/i2.jpg";
import Pic3 from "../../assets/img/product/inspired-product/i3.jpg";
import Pic4 from "../../assets/img/product/inspired-product/i4.jpg";
import Pic5 from "../../assets/img/product/inspired-product/i5.jpg";
import Pic6 from "../../assets/img/product/inspired-product/i6.jpg";
import Pic7 from "../../assets/img/product/inspired-product/i7.jpg";
import Pic8 from "../../assets/img/product/inspired-product/i8.jpg";
import { PiEyeLight } from "react-icons/pi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const productData = [
  {
    id: 1,
    imgSrc: Pic1,
    title: "Latest men’s sneaker 1",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 2,
    imgSrc: Pic2,
    title: "Latest men’s sneaker 2",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 3,
    imgSrc: Pic3,
    title: "Latest men’s sneaker 3",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 4,
    imgSrc: Pic4,
    title: "Latest men’s sneaker 4",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 5,
    imgSrc: Pic5,
    title: "Latest men’s sneaker 5",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 6,
    imgSrc: Pic6,
    title: "Latest men’s sneaker 6",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 7,
    imgSrc: Pic7,
    title: "Latest men’s sneaker 7",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    id: 8,
    imgSrc: Pic8,
    title: "Latest men’s sneaker 8",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
];

const Inspired_Product_Area = () => {
  return (
    <>
      {/*================ Inspired Product Area =================*/}
      <section className="inspired_product_area section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>Inspired products</span>
                </h2>
                <p>Bring called seed first of third give itself now meat</p>
              </div>
            </div>
          </div>
          <div className="row">
            {productData.map((product) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="img-fluid w-100"
                        src={product.imgSrc}
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">{<product.PiEyeLight />}</a>
                        <a href="#">{<product.AiOutlineHeart />}</a>
                        <a href="#">{<product.AiOutlineShoppingCart />}</a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>{product.title}</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">
                          ${product.price.toFixed(2)}
                        </span>
                        <del>${product.originalPrice.toFixed(2)}</del>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*================ End Inspired Product Area =================*/}
    </>
  );
};

export default Inspired_Product_Area;
