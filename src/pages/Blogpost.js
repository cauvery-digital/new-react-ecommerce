import React from "react";
import { Link } from "react-router-dom";
import Blogrightsidebar from "../components/Blogrightsidebar";
import Blogcomments from "../components/Blogcomments";
import Blogpostform from "../components/Blogpostform";
export default function Blogpost() {
  return (
    <>
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Blog Page</h1>
              <nav class="d-flex align-items-center">
                <a href="index.html">
                  Home<span class="lnr lnr-arrow-right"></span>
                </a>
                <a href="category.html">Blog</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/*<!--================Blog Area =================-->*/}
      <section class="blog_area single-post-area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post row">
                <div class="col-lg-12">
                  <div class="feature-img">
                    <img
                      class="img-fluid"
                      src="assets/img/blog/feature-img1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-lg-3  col-md-3">
                  <div class="blog_info text-right">
                    <div class="post_tag">
                      <a href="#">Food,</a>
                      <a class="active" href="#">
                        Technology,
                      </a>
                      <a href="#">Politics,</a>
                      <a href="#">Lifestyle</a>
                    </div>
                    <ul class="blog_meta list">
                      <li>
                        <a href="#">
                          Mark wiens<i class="lnr lnr-user"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          12 Dec, 2018<i class="lnr lnr-calendar-full"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          1.2M Views<i class="lnr lnr-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          06 Comments<i class="lnr lnr-bubble"></i>
                        </a>
                      </li>
                    </ul>
                    <ul class="social-links">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9 blog_details">
                  <h2>Astronomy Binoculars A Great Alternative</h2>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction.
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually sit through a
                    self-imposed
                  </p>
                </div>
                <div class="col-lg-12">
                  <div class="quotes">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <img
                        class="img-fluid"
                        src="assets/img/blog/post-img1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-6">
                      <img
                        class="img-fluid"
                        src="assets/img/blog/post-img2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-12 mt-25">
                      <p>
                        MCSE boot camps have its supporters and its detractors.
                        Some people do not understand why you should have to
                        spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price.
                        However, who has the willpower.
                      </p>
                      <p>
                        MCSE boot camps have its supporters and its detractors.
                        Some people do not understand why you should have to
                        spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price.
                        However, who has the willpower.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navigation-area">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                    <div class="thumb">
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/blog/prev.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="arrow">
                      <a href="#">
                        <span class="lnr text-white lnr-arrow-left"></span>
                      </a>
                    </div>
                    <div class="detials">
                      <p>Prev Post</p>
                      <a href="#">
                        <h4>Space The Final Frontier</h4>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                    <div class="detials">
                      <p>Next Post</p>
                      <a href="#">
                        <h4>Telescopes 101</h4>
                      </a>
                    </div>
                    <div class="arrow">
                      <a href="#">
                        <span class="lnr text-white lnr-arrow-right"></span>
                      </a>
                    </div>
                    <div class="thumb">
                      <a href="#">
                        <img
                          class="img-fluid"
                          src="assets/img/blog/next.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Blogcomments />
              <Blogpostform />
            </div>
            <Blogrightsidebar />
          </div>
        </div>
      </section>
    </>
  );
}
