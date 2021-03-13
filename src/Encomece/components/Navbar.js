import React, { useState } from "react";
import BrandLogo from "../assets/Images/Index_img/logo_white700.png";
import cx from "classnames";

import classes from "../assets/css/index_layout.module.css";

const Navbar = () => {
  //Moblie-view toggle-menu
  const [responsive, setResponsive] = useState(false);
  const onClickHandler = () => {
    console.log("clicked");
    setResponsive(!responsive);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownShow = () => {
    setShowDropdown(true);
  };

  const dropdownHide = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div
        className={
          responsive ? cx(classes.topnav, classes.responsive) : classes.topnav
        }
        id={classes.myTopnav}
      >
        <img src={BrandLogo} alt="brandLogo" />
        <a href="/auth">Sign In</a>
        <a href="">Team</a>
        <a href="">Services +</a>
        <a
          href=""
          className={classes.dropdown}
          onMouseEnter={dropdownShow}
          onMouseLeave={dropdownHide}
        >
          Program +
        </a>
        <a href="">Projects</a>
        <a href="">Home</a>
        <a
          href="javascript:void(0);"
          className={classes.icon}
          onClick={onClickHandler}
        >
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div
        className={classes.dropdownContent}
        style={{ display: `${showDropdown ? "flex" : "none"}` }}
      >
        <a href="">Projects</a>
        <a href="">Home</a>
      </div>
    </>
  );
};

export default Navbar;
