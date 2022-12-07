import React from "react";
import Navbarr from "./Navbar";
import "./styles/home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../redux/login/loginAction";

import { Grid, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const Home = (props) => {
  const handlelogOut = () => {
    props.logout();
    // navigate("/login")
  };
  return (
    <div>
      <header classNameName="header">
        <div id="menu-btn" classNameName="fas fa-bars"></div>

        <a href="#" classNameName="logo">
          {" "}
          <span>max</span>wheels{" "}
        </a>

        <nav classNameName="navbar">
          <a href="#home">home</a>
          <a href="#vehicles">vehicles</a>
          <a href="#services">services</a>
          <a href="#featured">featured</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </nav>

        <div id="login-btn">
          <button classNameName="btn">Login</button>

          <i classNameName="far fa-user"></i>
        </div>
      </header>
      <div className="login-form-container">
        <span id="close-login-form" className="fas fa-times"></span>

        <form>
          <h3>user login</h3>
          <input type="email" name="email" placeholder="email" class="box" />
          <input
            type="password"
            name="pass"
            placeholder="password"
            class="box"
          />
          <p>
            {" "}
            forget your password <a href="#">click here</a>{" "}
          </p>
          <input type="submit" value="login" class="btn" />
          <p>or login with</p>
          <div class="buttons">
            <a href="#" class="btn">
              {" "}
              google{" "}
            </a>
            <a href="#" class="btn">
              {" "}
              facebook{" "}
            </a>
          </div>
          <p>
            {" "}
            don't have an account{" "}
            <a href="http://localhost/car/Signup.php">create one</a>{" "}
          </p>
        </form>
      </div>
      <section class="home" id="home">
        <h3 data-speed="-2" class="home-parallax">
          Looking For a Car ?
        </h3>

        <img
          data-speed="5"
          class="home-parallax"
          src="image/home-img.png"
          alt=""
        />

        <a data-speed="7" href="#featured" class="btn home-parallax">
          explore cars
        </a>
      </section>

      <section class="icons-container">
        <div class="icons">
          <i class="fas fa-home"></i>
          <div class="content">
            <h3>15+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-car"></i>
          <div class="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>
        <div class="icons">
          <i class="fas fa-users"></i>
          <div class="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons">
          <i class="fas fa-car"></i>
          <div class="content">
            <h3>1500+</h3>
            <p>news cars</p>
          </div>
        </div>
      </section>

      <section class="vehicles" id="vehicles">

<h1 class="heading"> popular <span>vehicles</span> </h1>

<div class="swiper vehicles-slider">

    <div class="swiper-wrapper">

        <div class="swiper-slide box">
            <img src="image/vehicle-1.png" alt="" />
            <div class="content">
                <h3>Land Rover Range Rover</h3>
                <div class="price"> <span>price : </span> 2.5 Cr/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 9.32 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/car/Popular%20Vehicles/Range%20rover/Land%20Rover%20Range%20Rover.html" class="btn">check out</a>

            </div>
        </div>

        <div class="swiper-slide box">
            <img src="image/vehicle-2.png" alt="" />
            <div class="content">
                <h3>BMW 3 Series</h3>
                <div class="price"> <span>price : </span> 60 L/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2022
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 16.13 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/Car/Popular%20Vehicles/BMW%203%20series/BMW_3_series.html" class="btn">check out</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <img src="image/vehicle-3.png" alt=""/>
            <div class="content">
                <h3>Mercedes-Benze C-Class</h3>  
                <div class="price"> <span>price : </span> 70 L/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 18 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/Car/Popular%20Vehicles/C-class/C-class.html" class="btn">check out</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <img src="image/vehicle-4.png" alt=""/>
            <div class="content">
                <h3>Audi Q7</h3>
                <div class="price"> <span>price : </span> 90 L/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 12 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/Car/Popular%20Vehicles/Audi%20Q7/Audi%20Q7.html" class="btn">check out</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <img src="image/vehicle-5.png" alt=""/>
            <div class="content">
                <h3>Land Rover Velar</h3>
                <div class="price"> <span>price : </span> 1.4 cr/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 13 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/Car/Popular%20Vehicles/Velar/Velar.html" class="btn">check out</a>
            </div>
        </div>

        <div class="swiper-slide box">
            <img src="image/vehicle-6.png" alt=""/>
            <div class="content">
                <h3>Toyota Fortuner</h3>
                <div class="price"> <span>price : </span> 52 L/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> petrol
                    <span class="fas fa-circle"></span> 12.57 kmpl
                </p>
                <a href="file:///Users/satyamkumar/Desktop/Car/Popular%20Vehicles/Fortuner/Fortuner.html" class="btn">check out</a>
            </div>
        </div>

    </div>

    <div class="swiper-pagination"></div>

</div>

</section>

<section class="services" id="services">

    <h1 class="heading"> our <span>services</span> </h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-car"></i>
            <h3>car selling</h3>
            <p>.</p>
            <a href="#home" class="btn"> read more</a>
        </div>

        <div class="box">
            <i class="fas fa-tools"></i>
            <h3>parts repair</h3>
            <p>.</p>
            <a href="file:///Users/satyamkumar/Desktop/car/Services/Spare%20Part/index.html" class="btn"> read more</a>
        </div>

        <div class="box">
            <i class="fas fa-car-crash"></i>
            <h3>car insurance</h3>
            <p>.</p>
            <a href="https://www.policybazaar.com/motor-insurance/car-insurance/" class="btn"> read more</a>
        </div>

        <div class="box">
            <i class="fas fa-car-battery"></i>
            <h3>battery replacement</h3>
            <p>.</p>
            <a href="file:///Users/satyamkumar/Desktop/car/Services/Battery/index.html" class="btn"> read more</a>
        </div>

        <div class="box">
            <i class="fas fa-gas-pump"></i>
            <h3>oil change</h3>
            <p>.</p>
            <a href="file:///Users/satyamkumar/Desktop/car/Services/Oil%20Change/index.html" class="btn"> read more</a>
        </div>

        <div class="box">
            <i class="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>.</p>
            <a href="#" class="btn"> read more</a>
        </div>

    </div>

</section>
      {/* ends here */}
    </div>
  );
};
//export default Home;
const mapStateToProps = (state) => {
  //
  return {
    loggedIn: state.loginReducer.loggedIn,
    error: state.loginReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(action.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
