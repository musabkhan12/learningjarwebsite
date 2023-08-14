import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import university from "../images/university.png";
// import bag from "../images/briefcase.svg";
// import envelope from "../images/envelope.svg";
// import briefcase from "../images/briefcase.svg";
// import flask from "../images/flask.svg";
// import like from "../images/like.svg";
// import worldwide from "../images/worldwide.svg";
// import loudspeaker from "../images/loudspeaker.svg";
// import quantum from "../images/quantum.svg";
// import targetarrow from "../images/targetarrow.svg";
// import rocket from "../images/rocket.svg";

import onetoone from '../images/one-to-one.png'
import useoftech from '../images/useoftech.png'
import one100 from '../images/100.png'
import onlinesafe from '../images/onlinesafe.jpg'
import personalize from '../images/personalaize.png'
import time from '../images/time.png'

import animation1  from '../animation/animation1.json'
import Navbartest from "./Navbartest";
import Footer from "./Footer";
import boardimg from "../images/board.svg";
import Lottie from "lottie-react";
 import anim from '../animation/animation.json'
 import anim1 from '../animation/animation1.json'
  import anim2 from '../animation/animation2.json'
 import anim3 from '../animation/animation3.json'
 import anim4 from '../animation/animation4.json'
 import anim5 from '../animation/animation5.json'
import anim6 from "../animation/animation6.json";
// import anim7 from '../animation/animationor.json'
// import satisfaction from '../animation/satisfaction.json'
import "./Activity.css";
// import { LottiePlayer } from "lottie-react";
function Activity() {
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
  //  here js for features end  //

  // css for benifits of online starts from here 
  
 window.addEventListener("scroll" , revealanime)
 function revealanime(){
   var reveal = document.querySelectorAll(".showanimestudent");
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
  // css for benifits of online End here 

  return (
    <div class="main">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      ></meta>
      <Navbartest></Navbartest>
      <div class="boardlaptop">
        <div class="boardlaptop1">
          <Lottie class="anim6" animationData={anim6} />
        </div>
        <div class="boardlaptop2">
          <div class="text2">
            <div class="perspective-text2">
              <div class="perspective-line2">
                <h1 class="p2"></h1>
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
          <div class="text1">
            <div class="perspective-text">
              <div class="perspective-line">
                <p class="LJETOLEARN"></p>
                <p class="LJETOLEARN">TESTING </p>
              </div>
              <div class="perspective-line">
                <p class="LJETOLEARN">TESTING</p>
                <p class="LJETOLEARN">DATA</p>
              </div>
              <div class="perspective-line">
                <p class="LJETOLEARN">DATA</p>
                <p class="LJETOLEARN">PRACTICE</p>
              </div>
              <div class="perspective-line">
                <p class="LJETOLEARN"> PRACTICE</p>
                <p class="LJETOLEARN">LEARN......</p>
              </div>
              <div class="perspective-line">
                <p class="LJETOLEARN">LEARN......</p>
                <p class="LJETOLEARN"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="boardtext">
        {/* <img class="envelope" src={envelope} alt="" />
        <img class="briefcase" src={briefcase} alt="" />
        <img class="flask" src={flask} alt="" />
        <img class="likehand" src={like} alt="" />
        <img class="worldwide" src={worldwide} alt="" />
        <img class="loudspeaker" src={loudspeaker} alt="" />
        <img class="quantum" src={quantum} alt="" />
        <img class="targetarrow" src={targetarrow} alt="" />
        <img class="rocket" src={rocket} alt="" /> */}
        <img class="boardimg" src={boardimg} alt="" />

        <div class="perspective-text">
          <div class="perspective-line">
            <p class="LJETOLEARN"></p>
            <p class="LJETOLEARN">TESTING </p>
          </div>
          <div class="perspective-line">
            <p class="LJETOLEARN">TESTING</p>
            <p class="LJETOLEARN">DATA</p>
          </div>
          <div class="perspective-line">
            <p class="LJETOLEARN">DATA</p>
            <p class="LJETOLEARN">PRACTICE</p>
          </div>
          <div class="perspective-line">
            <p class="LJETOLEARN"> PRACTICE</p>
            <p class="LJETOLEARN">LEARN......</p>
          </div>
          <div class="perspective-line">
            <p class="LJETOLEARN">LEARN......</p>
            <p class="LJETOLEARN"></p>
          </div>
        </div>
        <div class="perspective-text2">
          <div class="perspective-line2">
            <h1 class="p2"></h1>
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

      <div class="divbenifitsonline">
        <div id="benifitsofonline" class="animation1">
          <div>
            {/* <div>
        <hr class="showtitleunderlinetop"/>
      </div>  */}
            <div>
              <h1 class="showanimetitle">
                {" "}
                BENEFITS OF ONLINE LEARNING WITH US
              </h1>
            </div>
            <div>
              <hr class="showtitleunderlinebottom" />
            </div>

            <div>
              <ul class="benifitslst">
                <li class="benifitlist showanimelist1">
                  {" "}
                  Tailor-made curriculum for (ICSE/ISC/CBSE/IB/IGCSE) Boards{" "}
                </li>
                <li class="benifitlist showanimelist2">
                  {" "}
                  Customized Sessions as per the need of the learner <br></br>{" "}
                  Customized Sessions as per the need of the learner
                </li>
                <li class="benifitlist showanimelist3">
                  {" "}
                  1 :1 online classes for each student and this is all
                </li>
                <li class="benifitlist showanimelist4">
                  {" "}
                  Providing Career Counseling Sessions as well
                </li>
                <li class="benifitlist showanimelist5">
                  {" "}
                  Weekly Online Assessments and Evaluations
                </li>
                <li class="benifitlist showanimelist6">
                  {" "}
                  Monthly Parent-Teachers Virtual Meets{" "}
                </li>
                <li class="benifitlist showanimelist7">
                  {" "}
                  Dedicated and well-trained teachers
                </li>
                <li class="benifitlist showanimelist8"> Tech-based learning</li>
              </ul>
            </div>
            {/* <div>
        <hr class="showtitleunderline"/>
      </div> */}
          </div>
          <div class="animation1imgstudent showanimestudent">
            <Lottie animationData={animation1} />{" "}
          </div>
        </div>
      </div>


      <div class="whylj">
        <h1 class="titlewhy">WHY BOB WORLD?</h1>
        <div class="flex-container">
          <div class="flex-item-left">
            <div class="left1">
              <section class="left1-section">
              <img class="onetooneimg" src={onetoone} alt="" />
              <p class="textonetoone">
                <span class="onetooneheader">1 TO 1 CLASSES : </span>
                Our USP is our 1 to 1 classes for each student. The classes are
                designed in such a way that learning becomes interactive and fun
                and the bond is created between the student and teacher. Connect
                with an experienced teacher with expertise in the subject you
                need.
              </p>
              </section>
   
            </div>
            <div class="left2">
            <section class="left2-section">
            <img class="useoftechimg" src={useoftech} alt="" />

<p class="textuseoftech">
  <span class="useoftechheader">USE OF TECHNOLOGY : </span>
  Our 1:1 classes are a blend of traditional way of learning along
  with use of technology. We use different learning platforms like
  Quizizz, Kahoot, Nearpod, etc. to make our classes different.
  This mode of learning prepare students for future and make
  classes 100% engaging. Tutors are put through rigorous
  development programs by our trainers from time to time. It is
  mandatory for the tutors to update their knowledge with the
  latest trends in online tutoring and research.
</p>
</section>

            </div>
            <div class="left3">
            <section class="left3-section">
            <img class="onehundperimg" src={one100} alt="" />

<p class="textonehundper">
  <span class="onehundperheader">
    SATISFACTION <br /> IS GUARANTEED :{" "}
  </span>
  Learning Jar ensures that your ward gets a perfect classroom
  experience. Teachers are not only professional but also
  passionate about teaching. Students get perfectly customized
  classes according to their needs.
</p>
</section>

            </div>
          </div>
          <div class="flex-item-right">
            <div class="flexrightimg">
              <Lottie animationData={anim}></Lottie>
            </div>
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-item-right">
            <div class="flexrightimg">
              <Lottie animationData={anim3}></Lottie>
            </div>
          </div>
          <div class="flex-item-left">
            <div class="left1">
            <section class="left1-section1">
            <img class="onetooneimg" src={time} alt="" />
              <p class="textonetoone">
                <span class="onetooneheader">
                  CLASSES AS PER YOUR SCHEDULE :{" "}
                </span>
                Students can take classes according to their schedule. Classes
                can be taken at any time of the day. In Learning Jar tutors take
                sessions 24*6 hours and pay accordingly.
              </p>
</section>

            </div>
            <div class="left2">
            <section class="left2-section2">
            <img class="useoftechimg" src={personalize} alt="" />

<p class="textuseoftech">
  <span class="useoftechheader">PERSONALISED LEARNING : </span>
  All the classes are given in the online mode as per the
  requirement of the students. Time-to-time doubt-clearing
  sessions are also held. We make sure students feel comfortable
  and reach their potential.
</p>
</section>
          
             
            </div>
            <div class="left3">
            <section class="left3-section3">
            <img class="onehundperimg" src={onlinesafe} alt="" />

<p class="textonehundper">
  <span class="onehundperheader">ONLINE SAFETY : </span>
  Learning Jar prioritizes online safety for all kids. Regular
  inspection is done for all classes. All our tutors have been
  thoroughly screened and provide a safe environment.
</p>
</section>

            </div>
            <div class="left4">
            <section class="left4-section4">
            <img class="affordimg" src={time} alt="" />
              <p class="textonetoone">
                <span class="onetooneheader">
                  CLASSES AS PER YOUR SCHEDULE :{" "}
                </span>
                Students can take classes according to their schedule. Classes
                can be taken at any time of the day. In Learning Jar tutors take
                sessions 24*6 hours and pay accordingly.
              </p>
</section>

            </div>
          </div>
        </div>
    
      </div>

     <Footer></Footer> 
    </div>
  );
}

export default Activity;
