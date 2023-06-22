import React from "react";
import "./Footer.css";
import learningjar from "../images/learningjar.jpeg"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function Footer() {
 
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div>
      <img class="ljimg" src={learningjar} alt="" ></img>
      <div class="footer">

<section class="footer1"> 
<div class="subfooter1-1">
  <div> <h1 class="contactustext">Contact Us </h1> </div>
  <div>   <h1 class="mailtext"><i class="fa fa-envelope" aria-hidden="true"></i> bobworld@gmail.com </h1> </div>
  <div>   <h1 class="mobiletext"><i class="fa fa-mobile" aria-hidden="true"></i>+91- 6291032169 </h1> </div>
    </div>
 </section>
<section class="footer2"> 

    </section>
<section class="footer3"> <div> </div> </section>
</div>
      </div>
  
    </div>
  );
}
export default Footer;
