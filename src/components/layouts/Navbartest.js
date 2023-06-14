import React from "react"
import "./Navbartest.css"
import {Link} from "react-router-dom";
function Navbartest(){
    const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
if(hamburger){
    hamburger.addEventListener("click", mobileMenu);
}


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
   return(
       <div >
<header class="header">
  <a href="/" class="logo">BOBWORLD</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/Activity'>Activity</Link></li>
    <li> <Link to='/contactus'>Contact Us</Link></li>
    <li> <Link to='/footer'>Footer</Link></li>
    <li> <Link to='/students'>Students</Link></li>
  </ul>
</header>

       </div>
   
   )
}
export default Navbartest