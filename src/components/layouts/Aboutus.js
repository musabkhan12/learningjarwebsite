import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import "./Aboutus.css";

// this is for animation lottie
import Lottie from 'lottie-react';

// this image is for three sections of student teacher and parent
import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";

// these images for carausole  
import google from "../images/google.jpg";
import google2 from "../images/google2.jpg";
import google3 from "../images/google3.png";
import google4 from "../images/google4.png";
import google5 from "../images/google5.png";
import google6 from "../images/google6.png";

// these images for features 
// import feature1 from "../images/feature1.webp";
// import feature2 from "../images/feature2.jpg";
// import feature3 from "../images/feature3.jpg";
import Navbartest from "./Navbartest";

// this is for animation 
// import animationor from "../animation/animationor.json"
// import animation from "../animation/animation.json"
import animation1 from "../animation/animation1.json"
// import animation2 from "../animation/animation2.json"
// import animation3 from "../animation/animation3.json"
// import animation4 from "../animation/animation4.json"
// import animation5 from "../animation/animation5.json"
// import animation6 from "../animation/animation6.json"

import blob from "../blobs/blobanimation.svg"
import blobfeature from "../blobs/blobanimationfeatures.svg"
import blobfeature2 from "../blobs/blobanimationfeature2.svg"
import blobfeature3 from "../blobs/blobanimationfeature3.svg"
import blobfeaturewhite from "../blobs/blobanimationfeaturewhite.svg"
import blobfeatureblue from "../blobs/blobanimationfeatureblue.svg"
// import Footer from "./Footer";
function Aboutus() {
    // code js for three sections starts here
  function anim() {
    let on = document.getElementById("anime");
    on.classList.add("boxxcontent1");
  }
  function anim2() {
    let on = document.getElementById("anime");
    on.classList.remove("boxxcontent1");
  }
  function anim3() {
    let on = document.getElementById("anime2");
    on.classList.add("boxxcontent2");
  }
  function anim4() {
    let on = document.getElementById("anime2");
    on.classList.remove("boxxcontent2");
  }
  function anim5() {
    let on = document.getElementById("anime3");
    // console.log(on.classList ,"on")
    on.classList.add("boxxcontent3");
    for (var i = 0; i < on.length; i++) {
      on[i].classList.add("boxxcontent3");
      // console.log(on[i].classList);
    }
  }
  function anim6() {
    let on = document.getElementById("anime3");
    // console.log(on.classList ,"on")
    on.classList.remove("boxxcontent3");
    for (var i = 0; i < on.length; i++) {
      on[i].classList.add("boxxcontent3");
      // console.log(on[i].classList);
    }
  }

  // code js for three sections ends here


  window.addEventListener("scroll", reveal);
  function reveal() {
    var reveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 120;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal1);
  function reveal1() {
    var reveal = document.querySelectorAll(".reveal1");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 120;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime)
  function revealanime(){
    var reveal = document.querySelectorAll(".showanime");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 190;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime2)
  function revealanime2(){
    var reveal = document.querySelectorAll(".showanimetitle");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 190;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime3)
  function revealanime3(){
    var reveal = document.querySelectorAll(".showanimelist1");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime4)
  function revealanime4(){
    var reveal = document.querySelectorAll(".showanimelist2");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime5)
  function revealanime5(){
    var reveal = document.querySelectorAll(".showanimelist3");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime6)
  function revealanime6(){
    var reveal = document.querySelectorAll(".showanimelist4");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime7)
  function revealanime7(){
    var reveal = document.querySelectorAll(".showanimelist5");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime8)
  function revealanime8(){
    var reveal = document.querySelectorAll(".showanimelist6");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime9)
  function revealanime9(){
    var reveal = document.querySelectorAll(".showanimelist7");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll" , revealanime10)
  function revealanime10(){
    var reveal = document.querySelectorAll(".showanimelist8");
    for (var i = 0; i < reveal.length; i++) {
      var windowweight = window.innerHeight;
      var revealtop = reveal[i].getBoundingClientRect().top;
      var revelpoint = 30;
      if (revealtop < windowweight - revelpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }

  return (
    <div>
       <Navbartest></Navbartest>
      <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
     
      {/* 3 sections of students,teacher and parent */}
      <div>
        <div class="boxx">
          <button class="cliq" onClick={anim}>
            Click me
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent" id="anime">
            <h1>are you student?</h1>
            <button onClick={anim2}>Back</button>
          </div>
          <button class="cliq2" onClick={anim3}>
            Click me
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent22" id="anime2">
            <h1>are you tEACHER?</h1>
            <button onClick={anim4}>Back</button>
          </div>
          <button class="cliq3" onClick={anim5}>
            Click me 3
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent33" id="anime3">
            <h1>are you parent</h1>
            <button onClick={anim6}>Back</button>
          </div>
        </div>
      </div>
      {/* here 3 sections of students,teacher and parent end*/}

      {/* here features cards start*/}   
      <div class="blobfeature3" > <img src={blobfeature3} alt="" /> </div>

      <div  class="features">
        <div class="blobfeature" > <img src={blobfeature} alt="" /> </div>
        <div class="blobfeature2" > <img src={blobfeature2} alt="" /> </div>
        <div class="blobfeaturewhite" > <img src={blobfeaturewhite} alt="" /> </div>
        <div class="blobfeatureblue" > <img src={blobfeatureblue} alt="" /> </div>
        <h1 class="featuresheader reveal1">Features</h1>
        <div class="featuresdiv reveal">
          <div class="featuresubdivfirst">
            {/* <div>
              <img class="featureimage" src={feature2} alt="" />{" "}
            </div> */}
            <div class="cardcontent">
              <h2 class="contentheader"> Teachers </h2>
              <h4 class="contenttext">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
          </div>

          <div class="featuresubdivmiddle middlefeature">
            {/* <div>
              <img class="featureimage" src={feature1} alt="" />
            </div> */}
            <div class="cardcontent">
              <h2 class="contentheader"> Teachers </h2>
              <h4 class="contenttext">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
          </div>
          <div class="featuresubdivlast">
            {/* <div>
              <img class="featureimage" src={feature3} alt="" />
            </div> */}
            <div class="cardcontent">
              <h2 class="contentheader"> Teachers </h2>
              <h4 class="contenttext">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
          </div>

  
        </div>
      </div>
      {/* features cards end */}

      {/* here BENEFITS starts */}
      <div id="benifitsofonline" class= "animation1">
     <div >
     <div>
        <hr class="showtitleunderlinetop"/>
      </div>
      <div>
      <h1 class="showanimetitle"> BENEFITS OF ONLINE LEARNING WITH US</h1>
      </div>
      <div>
        <hr class="showtitleunderlinebottom"/>
      </div>
      <img id="blobanimation" class="blob" src={blob} alt="" />
    <div>
    <ul> 
              <li class="benifitlist showanimelist1">&#x2022;<span></span> Tailor-made curriculum for (ICSE/ISC/CBSE/IB/IGCSE) Boards </li>
              <li class="benifitlist showanimelist2">&#x2022;<span></span> Customized Sessions as per the need of the learner <br></br> Customized Sessions as per the need of the learner</li>
              <li class="benifitlist showanimelist3">&#x2022;<span></span> 1 :1 online classes for each student and this is all</li>
              <li class="benifitlist showanimelist4">&#x2022;<span></span> Providing Career Counseling Sessions as well</li>
              <li class="benifitlist showanimelist5">&#x2022;<span></span> Weekly Online Assessments and Evaluations</li>
              <li class="benifitlist showanimelist6">&#x2022;<span></span> Monthly Parent-Teachers Virtual Meets </li>
              <li class="benifitlist showanimelist7">&#x2022;<span></span> Dedicated and well-trained teachers</li>
              <li class="benifitlist showanimelist8">&#x2022;<span></span> Tech-based learning</li>
            </ul>
    </div>
    <div>
        <hr class="showtitleunderline"/>
      </div>
     </div>
     <div class="animation1img showanime" ><Lottie animationData={animation1} /> </div>  
         
      </div>
      {/* here benifit ends */}
      {/* this is carausol start */}
      <div class="crausol">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img
                class="imagecara"
                src={google}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google2}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google3}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google4}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google5}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google6}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google2}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google3}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google4}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google5}
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div class="slide">
              <img
                class="imagecara"
                src={google6}
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


<Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>ADMIN</SwiperSlide>
        <SwiperSlide>ADMIN 2</SwiperSlide>
        <SwiperSlide>ADMIN 3</SwiperSlide>
        <SwiperSlide>ADMIN 4</SwiperSlide>
        <SwiperSlide>ADMIN 5</SwiperSlide>

      </Swiper>
   {/* <div>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/-PGmNKfsrzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div> */}
    </div>
  );
}

export default Aboutus;
