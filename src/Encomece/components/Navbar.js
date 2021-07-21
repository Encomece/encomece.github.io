import "../assets/css/style.css";
import React from 'react'

import Image from "../assets/Images/Index_img/logo_white700.png"

const Navbar = () => {
    return (
        <div>
           <nav className="nav navbar  navbar-expand-lg fixed-top navbar-dark bg-nav">
        <div className="container">
            <a className="navbar-brand mr-auto" href="#"><img src={Image} height="36" width="180" alt=""/></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu"><span class="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"></div>
            <div className="collapse navbar-collapse justify-content-end bg-nav2" id="nav-menu">
                <ul className="navbar-nav text-center">
                    <li className="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li className="nav-item active"><a class="nav-link" href="#">Programs</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">Team</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">Services</a></li>
                    <li className="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
                    <li className="nav-item "><a class="nav-link" href="#">Event</a></li>
                </ul>
            </div>
        </div>    
    </nav> 
        </div>
    )
}

export default Navbar;
