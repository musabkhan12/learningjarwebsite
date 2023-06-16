import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import university from '../images/university.png'
import bag from '../images/briefcase.svg'
import envelope from '../images/envelope.svg'
import briefcase from '../images/briefcase.svg'
import flask from '../images/flask.svg'
import like from '../images/like.svg'
import worldwide from '../images/worldwide.svg'
import loudspeaker from '../images/loudspeaker.svg'
import quantum from '../images/quantum.svg'
import targetarrow from '../images/targetarrow.svg'
import rocket from '../images/rocket.svg'

import Navbartest from './Navbartest'
import boardimg from "../images/board.svg"
 import Lottie from 'lottie-react';
// import anim from '../animation/animation.json'
// import anim1 from '../animation/animation1.json'
// import anim2 from '../animation/animation2.json'
// import anim3 from '../animation/animation3.json'
// import anim4 from '../animation/animation4.json'
// import anim5 from '../animation/animation5.json'
 import anim6 from '../animation/animation6.json'
// import anim7 from '../animation/animationor.json'
// import satisfaction from '../animation/satisfaction.json'
import "./Activity.css";
// import { LottiePlayer } from "lottie-react";
function Activity() {

  return (
    <div class="main">
          <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
   <Navbartest></Navbartest> 
   {/* <div class="board">
    <div class="boardtext">
    <div class="perspective-text">
  <div class="perspective-line">
    <p></p>
    <p>LEARNING</p>
  </div>
  <div class="perspective-line">
    <p>LEARNING</p>
    <p>JARRRRRRRR</p>
  </div>
  <div class="perspective-line">
    <p>JARRRRRRRR</p>
    <p>EASE TO</p>
  </div>
  <div class="perspective-line">
    <p>EASE TO</p>
    <p>LEARN........</p>
  </div>
  <div class="perspective-line">
    <p>LEARN........</p>
    <p></p>
  </div>
  
 


    </div>
    </div>
   </div> */}
     
     <div class= "boardtext">
      <img class ="envelope"  src={envelope} alt="" />
      <img class ="briefcase"  src={briefcase} alt="" />
      <img class ="flask"  src={flask} alt="" />
      <img class ="likehand"  src={like} alt="" />
      <img class ="worldwide"  src={worldwide} alt="" />
      <img class ="loudspeaker"  src={loudspeaker} alt="" />
      <img class ="quantum"  src={quantum} alt="" />
      <img class ="targetarrow"  src={targetarrow} alt="" />
      <img class ="rocket"  src={rocket} alt="" />
      <img class="boardimg" src={boardimg} alt="" />
   
     <div class="perspective-text">

  <div class="perspective-line">

    <p></p>
    <p>TESTING </p>
  </div>
  <div class="perspective-line">
    <p>TESTING</p>
    <p>DATA</p>
  </div>
  <div class="perspective-line">
    <p>DATA</p>
    <p>PRACTICE</p>
  </div>
  <div class="perspective-line">
    <p> PRACTICE</p>
    <p>LEARN......</p>
  </div>
  <div class="perspective-line">
    <p>LEARN......</p>
    <p></p>
  </div>
   </div>
   <div class="perspective-text2">
   <div class="perspective-line2">
    <h1 class="p2" ></h1>
    <h1 class="p2">Education</h1>
  </div>
   <div class="perspective-line2">
    <h1 class="p2">Education</h1>
    <h1 class="p2">without</h1>
  </div>
   <div class="perspective-line2">
    <h1 class="p2">without</h1>
    <h1 class="p2">application</h1>
  </div>
   <div class="perspective-line2">
    <h1 class="p2">application</h1>
    <h1 class="p2">is just</h1>
  </div>
  <div class="perspective-line2">
    <h1 class="p2">is just</h1>
    <h1 class="p2">entertainment</h1>
  </div>
   <div class="perspective-line2">
    <h1 class="p2">entertainment</h1>
    <h1 class="p2"></h1>
  </div>

   </div>
     </div>
     <div>
     <div class="featuresdivmain">

<h1 class="featuresheader reveal1">Features</h1>
        <div class="featuresdiv reveal">
          <div class="featuresubdivfirst1">
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

          <div class="featuresubdivmiddle1 middlefeature">
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
          <div class="featuresubdivlast1">
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
     </div>
   </div>
  );
}

export default Activity;
