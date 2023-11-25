import React from "react"
import "./Stickycontactus.css"
// import {Link} from "react-router-dom";
function Stickycontactus(){
    return(
 
<div class="fab">
  <span class="fab-action-button">
        <i class="fab-action-button__icon"></i>
    </span>
  <ul class="fab-buttons">
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
        <i class="icon-material icon-material_fb"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
        <i class="icon-material icon-material_tw"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
        <i class="icon-material icon-material_li"></i>
      </a>
    </li>
    <li class="fab-buttons__item">
      <a href="#" class="fab-buttons__link" data-tooltip="Google+">
        <i class="icon-material icon-material_gp"></i>
      </a>
    </li>
  </ul>
  
  <div class="bookdemo">
  Free Trial
</div>
</div>


      
    )

}




export default Stickycontactus;