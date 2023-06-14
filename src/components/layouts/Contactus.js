import React from "react";
import Navbartest from "./Navbartest.js"
import map from "../images/worldmap.png";



 import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";

 import Lottie from 'lottie-react';
 import animation1 from "../animation/animation1.json"
//  import blob from "../blobs/blobanimation.svg"

 //pdf 
//  import pdf from '../pdfs/dummy.pdf'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Contactus.css";
function Contactus() {
  
  // from here the three section of mobile start 
  function anim() {
    let on = document.getElementById("anime");
    on.classList.add("boxxcontent1mobile");
  }
  function anim2() {
    let on = document.getElementById("anime");
    on.classList.remove("boxxcontent1mobile");
  }
  function anim3() {
    let on = document.getElementById("anime2");
    on.classList.add("boxxcontent2mobile");
  }
  function anim4() {
    let on = document.getElementById("anime2");
    on.classList.remove("boxxcontent2mobile");
  }
  function anim5() {
    let on = document.getElementById("anime3");
    on.classList.add("boxxcontent3mobile");
  }
  function anim6() {
    let on = document.getElementById("anime3");
    on.classList.remove("boxxcontent3mobile");
  }
  // here three sections of mobile end

  // from here js for three sections of laptop start 
  function animationteacher() {
    let on = document.getElementById("animeteacher");
    on.classList.add("boxxcontent1");
  }
  function animationteacher2() {
    let on = document.getElementById("animeteacher");
    on.classList.remove("boxxcontent1");
  }
  function animationstudent() {
    let on = document.getElementById("animestudent");
    on.classList.add("boxxcontent2");
  }
  function animationstudent2() {
    let on = document.getElementById("animestudent");
    on.classList.remove("boxxcontent2");
  }
  function animationparent() {
    let on = document.getElementById("animeparent");
    on.classList.add("boxxcontent3");
  }
  function animationparent2() {
    let on = document.getElementById("animeparent");
    on.classList.remove("boxxcontent3");
  }

  // js for three sections of laptop end here 

  // from here features start 
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

  // here features ends
  
  // form here this js strat for benifits of online larning 

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
      var revelpoint = 120;
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

  // here benifits of online learning end
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      ></meta>
      <Navbartest></Navbartest>
      {/* this is three sections for moblies  strat from here */}

      <div class="mobileboxx">
        <div class="mobileboxximg">
          <img class="teacherimg" src={img2} alt="Avatar" />
          <button class="cliq" onClick={anim}>
            Click me
          </button>
        </div>

        <div class="revealedata">
          <div class="boxxcontentmobile" id="anime">
            <h1>are you student 45?</h1>
            <button onClick={anim2}>Back</button>
          </div>
        </div>

        <div class="mobileboxximg">
          <img class="teacherimg" src={img2} alt="Avatar" />
          <button class="cliq2" onClick={anim3}>
            Click me 333
          </button>
        </div>
        <div class="revealedata">
          <div class="boxxcontent22mobile" id="anime2">
            <h1>are you student 45?</h1>
            <button onClick={anim4}>Back</button>
          </div>
        </div>

        <div class="mobileboxximg">
          <img class="teacherimg" src={img2} alt="Avatar" />
          <button class="cliq3" onClick={anim5}>
            Click me 22
          </button>
        </div>
        <div class="revealedata">
          <div class="boxxcontent33mobile" id="anime3">
            <h1>are you student 45?</h1>
            <button onClick={anim6}>Back</button>
          </div>
        </div>
      </div>

      {/* this is the three sections for mobiles ends here */}

      {/* this is three sections for labtop and tab  strat from here */}

      <div class="boxx">
        <button class="cliqlap" onClick={animationteacher}>
          Click me
        </button>
        <img src={img2} alt="Avatar" />
        <div class="boxxcontent" id="animeteacher">
          <h1>are you student?</h1>
          <button onClick={animationteacher2}>Back</button>
        </div>
        <button class="cliq2lap" onClick={animationstudent}>
          Click me
        </button>
        <img src={img2} alt="Avatar" />
        <div class="boxxcontent22" id="animestudent">
          <h1>are you tEACHER?</h1>
          <button onClick={animationstudent2}>Back</button>
        </div>
        <button class="cliq3lap" onClick={animationparent}>
          Click me 3
        </button>
        <img src={img2} alt="Avatar" />
        <div class="boxxcontent33" id="animeparent">
          <h1>are you parent</h1>
          <button onClick={animationparent2}>Back</button>
        </div>
      </div>

      {/* this is the three sections for laptop nad tablet ends here */}

      {/* from here features start  */}
      <div class="features">
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
      {/*  here features end */}

      {/* from here benifits of online learning strat  */}
      <div id="benifitsofonline" class="animation1">
        <div>
          <div>
            <hr class="showtitleunderlinetop" />
          </div>
          <div>
            <h1 class="showanimetitle"> BENEFITS OF ONLINE LEARNING WITH US</h1>
          </div>
          <div>
            <hr class="showtitleunderlinebottom" />
          </div>

          <div>
            <ul>
              <li class="benifitlist showanimelist1">
                &#x2022;<span></span> Tailor-made curriculum for
                (ICSE/ISC/CBSE/IB/IGCSE) Boards{" "}
              </li>
              <li class="benifitlist showanimelist2">
                &#x2022;<span></span> Customized Sessions as per the need of the
                learner <br></br> Customized Sessions as per the need of the
                learner
              </li>
              <li class="benifitlist showanimelist3">
                &#x2022;<span></span> 1 :1 online classes for each student and
                this is all
              </li>
              <li class="benifitlist showanimelist4">
                &#x2022;<span></span> Providing Career Counseling Sessions as
                well
              </li>
              <li class="benifitlist showanimelist5">
                &#x2022;<span></span> Weekly Online Assessments and Evaluations
              </li>
              <li class="benifitlist showanimelist6">
                &#x2022;<span></span> Monthly Parent-Teachers Virtual Meets{" "}
              </li>
              <li class="benifitlist showanimelist7">
                &#x2022;<span></span> Dedicated and well-trained teachers
              </li>
              <li class="benifitlist showanimelist8">
                &#x2022;<span></span> Tech-based learning
              </li>
            </ul>
          </div>
          <div>
            <hr class="showtitleunderline" />
          </div>
        </div>
        <div class="animation1img showanime">
          <Lottie animationData={animation1} />{" "}
        </div>
      </div>
      {/*  here benifits of online learning end */}

      <div id="benifitsofonline" class="animation1">
        <div>
          {/* <div class="animation1img showanime" ><Lottie animationData={animation1} /> </div>   */}
          <div>
            <hr class="showtitleunderlinetop" />
          </div>
          <div>
            <h1 class="showanimetitle"> BENEFITS OF ONLINE LEARNING WITH US</h1>
          </div>
          <div>
            <hr class="showtitleunderlinebottom" />
          </div>

          <div>
            <ul>
              <li class="benifitlist showanimelist1">
                &#x2022;<span></span> Tailor-made curriculum for
                (ICSE/ISC/CBSE/IB/IGCSE) Boards{" "}
              </li>
              <li class="benifitlist showanimelist2">
                &#x2022;<span></span> Customized Sessions as per the need of the
                learner <br></br> Customized Sessions as per the need of the
                learner
              </li>
              <li class="benifitlist showanimelist3">
                &#x2022;<span></span> 1 :1 online classes for each student and
                this is all
              </li>
              <li class="benifitlist showanimelist4">
                &#x2022;<span></span> Providing Career Counseling Sessions as
                well
              </li>
              <li class="benifitlist showanimelist5">
                &#x2022;<span></span> Weekly Online Assessments and Evaluations
              </li>
              <li class="benifitlist showanimelist6">
                &#x2022;<span></span> Monthly Parent-Teachers Virtual Meets{" "}
              </li>
              <li class="benifitlist showanimelist7">
                &#x2022;<span></span> Dedicated and well-trained teachers
              </li>
              <li class="benifitlist showanimelist8">
                &#x2022;<span></span> Tech-based learning
              </li>
            </ul>
          </div>
          <div>
            <hr class="showtitleunderline" />
          </div>
        </div>
      </div>
      <div class="displypdfs">
        <div>
          <a href={require("../pdfs/dummy.pdf")}>
            {" "}
            <img
              class="pdficon"
              src={require("../pdfs/pdficon.gif")}
              alt=""
            />{" "}
            <h1> </h1>{" "}
          </a>
        </div>
        <div>
          <object width="100%" height="100%" type="application/pdf">
            <a href={require("../pdfs/dummy.pdf")}> pdfs </a>
          </object>
        </div>
      </div>

      {/* meet our admin team and teacher start from here */}
      <div>
        <h1 class="teamheader"> MEET OUR TEAM </h1>
        <div class="ourteam">
          <div class="admins">
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
          </div>
          <div class="teachers">
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
          </div>
        </div>
        {/* meet our admin team and teacher end here  */}

        <div class="world-map">
          <img src={map} alt=""></img>
          <div class="class1">
            <div class="blink"></div>
            <span class="india">Mumbai,India</span>
          </div>
        </div>
      </div>

      <section class="mainsection">
        <section class="section1">
          <div>
            {" "}
            <p>
              Ms. Ritika Tyagi, Founder-Director of LearningJar India is an
              educator & trainer who is passionate about integrating technology
              with education. She loves to mentor and help educators use
              Educational Technology. She is a Google Certified Trainer &
              Innovator, Apple Learning Leader, Kahoot Certified Teacher,
              Nearpod Certified Educator, and UCLA certified Global Career
              Counselor. She is also the Co-Leader of Global GEG and GEG Pune &
              Maharashtra. She provides online/in-person training to schools and
              teachers to help them learn Google & Apple Technology in the
              classroom. She has been associated with various reputed schools
              all over the country and has an experience of more than ten years
              in the same field.
            </p>{" "}
          </div>
        </section >
        <section class="section2">
          <div> <p>
              Ms. Ritika Tyagi, Founder-Director of LearningJar India is an
              educator & trainer who is passionate about integrating technology
              with education. She loves to mentor and help educators use
              Educational Technology. She is a Google Certified Trainer &
              Innovator, Apple Learning Leader, Kahoot Certified Teacher,
              Nearpod Certified Educator, and UCLA certified Global Career
              Counselor. She is also the Co-Leader of Global GEG and GEG Pune &
              Maharashtra. She provides online/in-person training to schools and
              teachers to help them learn Google & Apple Technology in the
              classroom. She has been associated with various reputed schools
              all over the country and has an experience of more than ten years
              in the same field.
            </p>{" "} </div>
        </section>
        <section class="section3">
          <div> <p>
              Ms. Ritika Tyagi, Founder-Director of LearningJar India is an
              educator & trainer who is passionate about integrating technology
              with education. She loves to mentor and help educators use
              Educational Technology. She is a Google Certified Trainer &
              Innovator, Apple Learning Leader, Kahoot Certified Teacher,
              Nearpod Certified Educator, and UCLA certified Global Career
              Counselor. She is also the Co-Leader of Global GEG and GEG Pune &
              Maharashtra. She provides online/in-person training to schools and
              teachers to help them learn Google & Apple Technology in the
              classroom. She has been associated with various reputed schools
              all over the country and has an experience of more than ten years
              in the same field.
            </p>{" "} </div>
        </section>
  
      </section>
    </div>
  );
}
export default Contactus;
