import React from "react";
import Navbartest from "./Navbartest.js";
import Footer from './Footer.js'
import img2 from '../images/320-3.jpg'
import img3 from '../images/320-2.jpg'
import img4 from '../images/100.png'
import img5 from '../images/affordable.png'
import Swiper from "swiper";



import './Slider.css'

import $ from 'jquery'; 

function Slider() {

return (
    <div>
      <Navbartest></Navbartest>
<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
          <img class="skew-img" src={img2} alt="" />
          <span class="mytext"> I love to learn more </span>
      <div class="carousel__snapper">

        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>
  {/* <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside> */}
</section>
<section>
  <div>
    testing is here
    <br />
    musaib is testing
    <br />
    musaib 
  </div>
</section>

<section>

  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
  <h1>testing </h1>
</section>
</div>

  );
}
export default Slider;
