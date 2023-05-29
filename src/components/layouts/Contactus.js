import React from "react";
import map from "../images/worldmap.png";
 import pin from "../images/pin.svg"
 import yellow from "../images/yellow.png"
 import img2 from "../images/lucas-5tRmLGguL3Q-unsplash.jpg";
import "./Contactus.css";
function Contactus() {
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
  return (
    <div >
      <div class="mobileboxx">
        {/* this image is for teacher start here */}
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
        {/* teacher ends here */}
      {/* this image is for students start here */}
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
        {/* students  ends here */}

      {/* this image is for parent start here */}
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
           {/* parents ends here */}

      </div>
      <div class="world-map">
        <img src={map} alt=""></img>
     <div class="class1"><div class= "blink"></div><span class="india">Mumbai,India</span></div> 
      </div>
       <div>
 <img src={pin} alt=""></img>
 <img class="yellow" src={yellow} alt=""></img>
       </div>
        {/* <img src={pin} alt=""> </img> */}
    </div>
  );
}
export default Contactus;
