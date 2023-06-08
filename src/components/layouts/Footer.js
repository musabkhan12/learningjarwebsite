import React from "react";
import "./Footer.css";
import Navbartest from "./Navbartest.js";
// import {Link} from "react-router-dom";
// import svg1 from "../images/svg1.svg"
// import anime from "../images/anime.gif"
import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";

function Footer() {
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
  return (
    <div class="footer">
        {/* //navbar// */}
      <div class="navbar">
        <Navbartest></Navbartest>
      </div>

      {/* //mobilethree section// */}
      <div class="mobilethreesection">
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
      </div>

      {/* //laptopthree section// */}
        <div class="laptopthreesection">
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
        </div>
   
     
    </div>
  );
}
export default Footer;
