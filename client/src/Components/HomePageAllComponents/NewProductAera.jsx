import React from "react";
import "./NewProductAera.css";
import NewPro1 from "../../assets/img/product/new-product/n1.jpg";
import NewPro2 from "../../assets/img/product/new-product/n2.jpg";
import NewPro3 from "../../assets/img/product/new-product/n3.jpg";
import NewPro4 from "../../assets/img/product/new-product/n4.jpg";
import NewProduct1 from "../../assets/img/product/new-product/new-product1.png";
import { PiEyeLight } from "react-icons/pi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const productData = [
  {
    imgSrc: NewPro1,
    title: "Nike latest sneaker",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    imgSrc: NewPro2,
    title: "Men’s denim jeans",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    imgSrc: NewPro3,
    title: "Quartz hand watch",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
  {
    imgSrc: NewPro4,
    title: "Adidas sport shoe",
    price: 25.0,
    originalPrice: 35.0,
    PiEyeLight: PiEyeLight,
    AiOutlineHeart: AiOutlineHeart,
    AiOutlineShoppingCart: AiOutlineShoppingCart,
  },
];

const NewProductAera = () => {
  return (
    <>
      {/*================ New Product Area =================*/}
      <section className="new_product_area section_gap_top section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>new products</span>
                </h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="new_product">
                <h5 className="text-uppercase">collection of 2019</h5>
                <h3 className="text-uppercase">Men’s summer t-shirt</h3>
                <div className="product-img">
                  <img className="img-fluid" src={NewProduct1} alt="" />
                </div>
                <h4>$120.70</h4>
                <a href="#" className="main_btn">
                  Add to cart
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="row">
                {productData.map((product, index) => {
                  return (
                    <div className="col-lg-6 col-md-6">
                      <div key={index} className="single-product">
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
          </div>
        </div>
      </section>
      {/*================ End New Product Area =================*/}
    </>
  );
};

export default NewProductAera;
