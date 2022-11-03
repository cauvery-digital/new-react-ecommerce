import React from "react";
import { Link } from "react-router-dom";
import Blogleftsidebar from "../components/Blogleftsidebar";
import Blogrightsidebar from "../components/Blogrightsidebar";

export default function Blog() {
  return (
    <>
      {/*<!-- Start Banner Area -->*/}
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
      {/*<!-- End Banner Area -->
  
  <!--================Blog Categorie Area =================-->*/}
      <section class="blog_categorie_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="categories_post">
                <img src="../assets/img/blog/cat-post/cat-post-3.jpg" alt="post" />
                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Social Life</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Enjoy your social life together</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories_post">
                <img src="../assets/img/blog/cat-post/cat-post-2.jpg" alt="post" />
                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Politics</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Be a part of politics</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="categories_post">
                <img src="../assets/img/blog/cat-post/cat-post-1.jpg" alt="post" />
                <div class="categories_details">
                  <div class="categories_text">
                    <a href="blog-details.html">
                      <h5>Food</h5>
                    </a>
                    <div class="border_line"></div>
                    <p>Let the food be finished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog_area">
        <div class="container">
          <div class="row">
            <Blogleftsidebar />
            <Blogrightsidebar />
          </div>
        </div>
      </section>
    </>
  );
}
