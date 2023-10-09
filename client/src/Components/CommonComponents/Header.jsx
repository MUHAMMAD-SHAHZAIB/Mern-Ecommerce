import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
{
  /* <FontAwesomeIcon icon="fa-thin fa-cart-shopping-fast" />; */
}

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";

import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header_area">
      <div className="top_menu">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="float-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: info@eiser.com</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="float-right">
                <ul className="right_side">
                  <li>
                    <a href="cart.html">gift card</a>
                  </li>
                  <li>
                    <a href="tracking.html">track order</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light w-100">
            {/* Brand and toggle get grouped for better mobile display */}
            <Link className="navbar-brand logo_h" to="/">
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse offset w-100"
              id="navbarSupportedContent"
            >
              <div className="row w-100 mr-0">
                <div className="col-lg-7 pr-0">
                  <ul className="nav navbar-nav center_nav pull-right">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="/category" className="nav-link">
                            Shop Category
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product-details">
                            Product Details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/product-checkout">
                            Product Checkout
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/shopping_cart">
                            Shopping Cart
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            Tracking
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="">
                            Elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5 pr-0">
                  <ul className="nav navbar-nav navbar-right right_nav pull-right">
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <AiOutlineSearch />
                        {/* <i className="ti-search" aria-hidden="true" /> */}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <AiOutlineShoppingCart />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <AiOutlineUser />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="icons">
                        <AiOutlineHeart/>
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
