import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import university from '../images/university.png'
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
      <img class="boardimg" src={boardimg} alt="" />
     <div class="perspective-text">

  <div class="perspective-line">
    <p></p>
    <p>LEARNING</p>
  </div>
  <div class="perspective-line">
    <p>LEARNING</p>
    <p>JARRRR</p>
  </div>
  <div class="perspective-line">
    <p>JARRRR</p>
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
    </div>
  );
}

export default Activity;