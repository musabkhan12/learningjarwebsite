import React from "react"
import "./Navbartest.css"
import {Link} from "react-router-dom";
function Navbartest(){
   return(
       <div >
           <nav>
            <div>
            <label >This is Testing</label>
            </div>
           
     <div>
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
     </div>
        
           </nav>
       </div>
   
   )
}
export default Navbartest