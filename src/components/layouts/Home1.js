import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import "./Home1.css";
// import img from "../images/425-500.jpg";
import university from "../images/university.png"
import lucas from "../images/lucas-5tRmLGguL3Q-unsplash.jpg"

import Navbartest from "./Navbartest";

// import logo from "../images/Logo.png";
// import hamburger from "../images/hamburger.png";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Home1() {
  // const [media , setMedia] = useState("")
  var onresize = function (e) {
    //note i need to pass the event as an argument to the function
    //  const screen = e.target.outerWidth;
    // let height = e.target.outerHeight;
    // console.log(width ,"width")
    // console.log(height ,"height")
  };
  window.addEventListener("resize", onresize);

  return (
    <div class="main">
          <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
   <Navbartest></Navbartest> 
   {/* on hover three section  */}
        {/* <div class="three">
          <div class="boxtest">
          <img src={img2} alt="Avatar" class="testimage" />
               <div class="box1content1test">
              <h1>Section 1</h1>
            </div>
          </div>
           <div class="boxtest2">
           <img src={img2} alt="Avatar" class="testimage2" />
               <div class="box1content1test2">
              <h1>Section 2</h1>
            </div>
           </div>
           <div class="boxtest3">
           <img src={img2} alt="Avatar" class="testimage3" />
               <div class="box1content1test3">
              <h1>Section 3</h1>
            </div>
           </div>
  
          </div> */}
        <div>
    
        <div class="imagecontainerlaptop">
          <div class="box1">
            <img src={university} alt="Avatar" class="imagelaptop1" />
            <div class="box1content1">
              <h1>are you student?</h1>
            </div>
          </div>
          <div class="box2">
            <img src={lucas} alt="Avatar" class="imagelaptop1" />
            <div class="box2content2">
              <h1>are you Parents?</h1>
            </div>
          </div>
          <div class="box3">
            <img src={university} alt="Avatar" class="imagelaptop1" />
            <div class="box3content3">
              <h1>are you Tutor?</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home1;
