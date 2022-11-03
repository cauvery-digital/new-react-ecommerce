import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      {/*<!-- Start Banner Area -->*/}
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Login</h1>
              <nav class="d-flex align-items-center">
                <Link to="/">
                  Home<span class="lnr lnr-arrow-right"></span>
                </Link>
                <Link to="/registration">
                  Login/Register<span class="lnr lnr-arrow-right"></span>
                </Link>
                <Link to="/login">
                  Login
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Banner Area -->*/}

      {/*<!--================Login Box Area =================-->*/}
      <section class="login_box_area section_gap">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="login_box_img">
                <img class="img-fluid" src="../assets/img/login.jpg" alt="" />
                <div class="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link class="primary-btn" to="/registration">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="login_form_inner">
                <h3>Log in to enter</h3>
                <form
                  class="row login_form"
                  action="contact_process.php"
                  method="post"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Username"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Username'"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Password"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Password'"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <div class="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label for="f-option2">Keep me logged in</label>
                    </div>
                  </div>
                  <div class="col-md-12 form-group">
                    <button type="submit" value="submit" class="primary-btn">
                      Log In
                    </button>
                    <Link to="/forgot">Forgot Password?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!--================End Login Box Area =================-->*/}
    </div>
  );
}
