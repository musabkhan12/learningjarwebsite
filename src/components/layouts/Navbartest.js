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
        <nav class="navbar">
            <a href="#" class="nav-logo">Learning Jar</a>
            <ul class="nav-menu">
                <li class="nav-item">
                <Link to='/'>Home</Link>
                </li>
                <li class="nav-item">
                <Link to='/contactus'>Contact Us</Link>
                </li>
                <li class="nav-item">
                    {/* <a href="/aboutus" class="nav-link">About</a> */}
                    <Link to='/aboutus'>About</Link>
                </li>
             
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>

       </div>
   
   )
}
export default Navbartest