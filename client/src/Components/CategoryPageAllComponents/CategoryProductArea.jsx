import React from "react";
import "./CategoryProductArea.css";
import item1 from "../../assets/img/product/inspired-product/i1.jpg";
import item2 from "../../assets/img/product/inspired-product/i2.jpg";
import item3 from "../../assets/img/product/inspired-product/i3.jpg";
import item4 from "../../assets/img/product/inspired-product/i4.jpg";
import item5 from "../../assets/img/product/inspired-product/i5.jpg";
import item6 from "../../assets/img/product/inspired-product/i6.jpg";
import item7 from "../../assets/img/product/inspired-product/i7.jpg";
import item8 from "../../assets/img/product/inspired-product/i8.jpg";

const CategoryProductArea = () => {
  return (
    <>
      {/*================Category Product Area =================*/}
      <section className="cat_product_area section_gap">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="product_top_bar">
                <div className="left_dorp">
                  <select className="sorting">
                    <option value={1}>Default sorting</option>
                    <option value={2}>Default sorting 01</option>
                    <option value={4}>Default sorting 02</option>
                  </select>
                  <select className="show">
                    <option value={1}>Show 12</option>
                    <option value={2}>Show 14</option>
                    <option value={4}>Show 16</option>
                  </select>
                </div>
              </div>
              <div className="latest_product_inner">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item1} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item2} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item3} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item4} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item5} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item6} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item7} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item8} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                      <div className="product-img">
                        <img className="card-img" src={item1} alt="" />
                        <div className="p_icon">
                          <a href="#">
                            <i className="ti-eye" />
                          </a>
                          <a href="#">
                            <i className="ti-heart" />
                          </a>
                          <a href="#">
                            <i className="ti-shopping-cart" />
                          </a>
                        </div>
                      </div>
                      <div className="product-btm">
                        <a href="#" className="d-block">
                          <h4>Latest men’s sneaker</h4>
                        </a>
                        <div className="mt-3">
                          <span className="mr-4">$25.00</span>
                          <del>$35.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="left_sidebar_area">
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Browse Categories</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Frozen Fish</a>
                      </li>
                      <li>
                        <a href="#">Dried Fish</a>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                      </li>
                      <li>
                        <a href="#">Fresh Fish</a>
                      </li>
                      <li>
                        <a href="#">Meat Alternatives</a>
                      </li>
                      <li>
                        <a href="#">Meat</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Product Brand</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Apple</a>
                      </li>
                      <li>
                        <a href="#">Asus</a>
                      </li>
                      <li className="active">
                        <a href="#">Gionee</a>
                      </li>
                      <li>
                        <a href="#">Micromax</a>
                      </li>
                      <li>
                        <a href="#">Samsung</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Color Filter</h3>
                  </div>
                  <div className="widgets_inner">
                    <ul className="list">
                      <li>
                        <a href="#">Black</a>
                      </li>
                      <li>
                        <a href="#">Black Leather</a>
                      </li>
                      <li className="active">
                        <a href="#">Black with red</a>
                      </li>
                      <li>
                        <a href="#">Gold</a>
                      </li>
                      <li>
                        <a href="#">Spacegrey</a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <aside className="left_widgets p_filter_widgets">
                  <div className="l_w_title">
                    <h3>Price Filter</h3>
                  </div>
                  <div className="widgets_inner">
                    <div className="range_item">
                      <div id="slider-range"></div>
                      <div className="">
                        <label htmlFor="amount">Price : </label>
                        <input type="text" id="amount" readOnly="" />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Category Product Area =================*/}
    </>
  );
};

export default CategoryProductArea;
