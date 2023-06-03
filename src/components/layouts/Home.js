import React from "react";
import "./Home.css";
import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";
import Navbartest from "./Navbartest";
// import Navbar from "./Navbar";
function Home() {
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
          console.log(on[i].classList);
        }
      }
      function anim6() {
        let on = document.getElementById("anime3");
        // console.log(on.classList ,"on")
        on.classList.remove("boxxcontent3");
        for (var i = 0; i < on.length; i++) {
          on[i].classList.add("boxxcontent3");
          console.log(on[i].classList);
        }
      }
    
  return (
    
        <div>
          <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <Navbartest></Navbartest>
        {/* <Navbar></Navbar> */}
            <div>
            <div class="boxx">
          <button class="btnbef cliq" onClick={anim}>
            Click me
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent" id="anime">
            <h1>are you student?</h1>
            <button onClick={anim2}>Back</button>
          </div>
          <button class="btnbef cliq2" onClick={anim3}>
            Click me
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent22" id="anime2">
            <h1>are you tEACHER?</h1>
            <button onClick={anim4}>Back</button>
          </div>
          <button class="btnbef cliq3" onClick={anim5}>
            Click me 3
          </button>
          <img src={img2} alt="Avatar" />
          <div class="boxxcontent33" id="anime3">
            <h1>are you parent</h1>
            <button onClick={anim6}>Back</button>
          </div>
        </div>
            </div>
        </div>
  );
}

export default Home;
