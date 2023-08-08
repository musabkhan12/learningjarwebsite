import React from "react";
import Navbartest from "./Navbartest.js";
import Footer from './Footer.js'


import imgslider2 from '../images/slider/hindiclasses.png'
import imgslider1 from '../images/slider/phonics.png'
import imgslider3 from '../images/slider/livecodingclasses.png'

import './Contactus.css'


function Contactus() {
// let slider = document.querySelector(".slider2")

// let currentSlide = 0
// //  let totalslides  = slider.querySelectorAll(".wrapper .left > div").length -1;
// if(slider){
//   document.getElementsByClassName("up").addEventlistner("click", function(){
//     if( currentSlide === 0){
//     return;
//        }
//        currentSlide--;
//        slider.querySelector(".wrapper .left div").style.marginTop =`${currentSlide*-100}vh`
//   })
// }

// function pull (){
//      console.log("enter in here")
//      let slider = document.querySelector(".slider2")
//      console.log("slider" ,slider)
//      if(currentSlide === 0){
//       return;
//      }
//      currentSlide--;
//      slider.querySelector('.wrap .left div').style.marginTop = `${currentSlide* -100}vh`
// } 
return (
    <div>
      <Navbartest></Navbartest>
      <div className="sliderforactivity">
        <div class="slider2">
          <div class="controls">
            <div class="up" >
              <i className="fa fa-chevron-up"></i>
            </div>
            <div className="down">
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <div className="wrapper">
          <div className="left">
            <div>
              <h1>Mumbai</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                ratione dolores odit repellat, velit a, modi esse incidunt
                deserunt voluptas dolorem odio consectetur pariatur maxime rem
                quas quod amet eum!
              </p>
            </div>
            <div>
              <h1>Mumbai</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                ratione dolores odit repellat, velit a, modi esse incidunt
                deserunt voluptas dolorem odio consectetur pariatur maxime rem
                quas quod amet eum!
              </p>
            </div>
            <div>
              <h1>Mumbai</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                ratione dolores odit repellat, velit a, modi esse incidunt
                deserunt voluptas dolorem odio consectetur pariatur maxime rem
                quas quod amet eum!
              </p>
            </div>
            <div>
              <h1>Mumbai</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                ratione dolores odit repellat, velit a, modi esse incidunt
                deserunt voluptas dolorem odio consectetur pariatur maxime rem
                quas quod amet eum!
              </p>
            </div>
          </div>
          <div className="right">
          <img src={imgslider1} alt="" />
          <img src={imgslider2} alt="" />
          <img src={imgslider3} alt="" />
          </div>
        </div>
        </div>
      
      </div>
      <div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">

        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>

    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>

  </div>
  <div class="blog-slider__pagination"></div>
</div>
      <Footer></Footer>
    </div>
  );
}
export default Contactus;
