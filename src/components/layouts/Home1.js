import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home1.css";
// import img from "../images/425-500.jpg";
import image3201 from "../images/320.jpg"
import image3202 from "../images/320-2.jpg"
import image3203 from "../images/320-3.jpg"
// import image3751 from "../images/375.jpg"
// import image3752 from "../images/375-2.jpg"
// import image3753 from "../images/375-3.jpg"
// import image4251 from "../images/425.jpg"
// import image4252 from "../images/425-3.jpg"
// import image4253 from "../images/425-3.jpg"
import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";
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
            <img src={img2} alt="Avatar" class="imagelaptop1" />
            <div class="box1content1">
              <h1>are you student?</h1>
            </div>
          </div>
          <div class="box2">
            <img src={img2} alt="Avatar" class="imagelaptop1" />
            <div class="box2content2">
              <h1>are you Parents?</h1>
            </div>
          </div>
          <div class="box3">
            <img src={img2} alt="Avatar" class="imagelaptop1" />
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
