 import React from "react"
 import "./Navbar.css"
// import {Link} from "react-router-dom";
function Navbar(){
  document.querySelector('.navbar-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar-menu').classList.toggle('active');
  });
    return(
        <div class="maindiv">
              <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
            <div class= "logo">
            <h1>This is Testing</h1> 
            </div>
            <nav class="navbar">
    <div class="navbar-container">
      <a class="navbar-logo" href="/">Logo</a>
      <ul class="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div class="navbar-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
        </div>
    
    )
}
export default Navbar