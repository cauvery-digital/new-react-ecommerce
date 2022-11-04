import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./pages/index";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Sitemap from "./pages/Sitemap";
import Errorpage from "./pages/Errorpage";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Tracking from "./pages/Tracking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Banner from "./components/Banner";
import Products from "./components/Products";

function App() {
  return (
    <>
      {/* <Preloader />*/}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
