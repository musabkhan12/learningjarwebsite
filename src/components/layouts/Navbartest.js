import React from "react"
import "./Navbartest.css"
import {Link} from "react-router-dom";
function Navbartest(){
   return(
       <div >
           <nav>
    
            <label >This is Testing</label>

   
     <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/aboutus'>About Us</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
            </ul>
    
        
           </nav>
       </div>
   
   )
}
export default Navbartest