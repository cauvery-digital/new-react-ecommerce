import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
              <Link className="navbar-brand logo_h" to="/">
                <img src="../assets/img/logo.png" alt="" />
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
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/*<!-- Collect the nav links, forms, and other content for toggling --> */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link to="#" className="nav-link dropdown-toggle"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><Link className="nav-link" to="/category">Shop Category</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/product">Product Details</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/checkout">Product Checkout</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">Shopping Cart</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/confirmation">Confirmation</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blogpost">Blog Post</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <Link
                      to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/tracking">Tracking</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <Link to="/cart" className="cart"><span className="ti-bag"></span></Link>
                  </li>
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
              <button type="submit" className="btn"></button>
              <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
            </form>
          </div>
        </div>
      </header>
  );
}

export default Navbar;
