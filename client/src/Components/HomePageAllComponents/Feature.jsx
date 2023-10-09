import React from "react";
import "./Feature.css";
import { MdAttachMoney } from "react-icons/md";
const Feature = () => {
  return (
    <>
      {/* Start feature Area */}
      <section className="feature-area section_gap_bottom_custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <MdAttachMoney />
                  {/* <i className="flaticon-money" /> */}
                  <h3>Money back gurantee</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-truck" />
                  <h3>Free Delivery</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-support" />
                  <h3>Alway support</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-blockchain" />
                  <h3>Secure payment</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End feature Area */}
    </>
  );
};

export default Feature;
