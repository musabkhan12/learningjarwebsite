import React from "react";
import Navbartest from "./Navbartest.js";
import './Students.css'


import Lottie from 'lottie-react';
import animation1 from "../animation/animation1.json"
import blob from "../blobs/blobanimation.svg"
function Students(){
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

// js for benifits start //
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
// js for benifits end //
    return(
   <div>
    {/* navbar */}
    <div class="navbar">
    <Navbartest></Navbartest>
    </div>


    {/* features  */}
 <div class="featuresdivmain">

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
    
   <div>
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
              <li class="benifitlist showanimelist1"> Tailor-made curriculum for (ICSE/ISC/CBSE/IB/IGCSE) Boards </li>
              <li class="benifitlist showanimelist2"> Customized Sessions as per the need of the learner <br></br> Customized Sessions as per the need of the learner</li>
              <li class="benifitlist showanimelist3"> 1 :1 online classes for each student and this is all</li>
              <li class="benifitlist showanimelist4"> Providing Career Counseling Sessions as well</li>
              <li class="benifitlist showanimelist5"> Weekly Online Assessments and Evaluations</li>
              <li class="benifitlist showanimelist6"> Monthly Parent-Teachers Virtual Meets </li>
              <li class="benifitlist showanimelist7"> Dedicated and well-trained teachers</li>
              <li class="benifitlist showanimelist8"> Tech-based learning</li>
            </ul>
    </div>
    <div>
        <hr class="showtitleunderline"/>
      </div>
     </div>
     <div class="animation1img showanime" ><Lottie animationData={animation1} /> </div>  
         
      </div>
   </div>


   </div>
)
}
export default Students;