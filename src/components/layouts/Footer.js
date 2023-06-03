import React from "react"
import "./Footer.css"
import Lottie from 'lottie-react'
// import {Link} from "react-router-dom";
// import svg1 from "../images/svg1.svg"
// import anime from "../images/anime.gif"
import animation from "../animation/animation.json"
function Footer(){
   return(

       <div class="footer">
            <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
       <div class="animation">
       <Lottie animationData={animation} />
        </div> 
           <div class= "footerheader">
           <h1>This is Footer</h1> 
           </div>

       </div>
   
   )
}
export default Footer