import React from "react";
import "./Blog_Area.css";

import BlogPic1 from "../../assets/img/b1.jpg";
import BlogPic2 from "../../assets/img/b2.jpg";
import BlogPic3 from "../../assets/img/b3.jpg";

const Blog_Area = () => {
  return (
    <>
      {/*================ Start Blog Area =================*/}
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2>
                  <span>latest blog</span>
                </h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src={BlogPic1} alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#">
                      <i className="ti-comments-smiley" />2 Comments
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Ford clever bed stops your sleeping partner hogging the
                      whole
                    </h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the
                      divide unto seed winged divided light Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">
                    Learn More <span className="ml-2 ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src={BlogPic2} alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#">
                      <i className="ti-comments-smiley" />2 Comments
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Ford clever bed stops your sleeping partner hogging the
                      whole
                    </h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the
                      divide unto seed winged divided light Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">
                    Learn More <span className="ml-2 ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src={BlogPic3} alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#">
                      <i className="ti-comments-smiley" />2 Comments
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Ford clever bed stops your sleeping partner hogging the
                      whole
                    </h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the
                      divide unto seed winged divided light Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">
                    Learn More <span className="ml-2 ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Blog Area =================*/}
    </>
  );
};

export default Blog_Area;
