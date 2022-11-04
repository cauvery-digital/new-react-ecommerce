import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header class="header_area sticky-header">
        <div class="main_menu">
          <nav class="navbar navbar-expand-lg navbar-light main_box">
            <div class="container">
              {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
              <Link class="navbar-brand logo_h" to="/">
                <img src="assets/img/logo.png" alt="" />
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              {/*<!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                class="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul class="nav navbar-nav menu_nav ml-auto">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <Link to="#" class="nav-link dropdown-toggle"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                    <ul class="dropdown-menu">
                      <li class="nav-item"><Link class="nav-link" to="/category">Shop Category</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/product">Product Details</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/checkout">Product Checkout</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/cart">Shopping Cart</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/confirmation">Confirmation</Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <Link to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link class="nav-link" to="/blog">Blog</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/blogpost">Blog Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item submenu dropdown">
                    <Link
                      to="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link class="nav-link" to="/login">Login</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/tracking">Tracking</Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li class="nav-item">
                    <Link to="/cart" class="cart"><span class="ti-bag"></span></Link>
                  </li>
                  <li class="nav-item">
                    <button class="search">
                      <span class="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="search_input" id="search_input_box">
          <div class="container">
            <form class="d-flex justify-content-between">
              <input type="text" class="form-control" id="search_input" placeholder="Search Here"/>
              <button type="submit" class="btn"></button>
              <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
          </div>
        </div>
      </header>
      </>
  );
}

export default Navbar;
