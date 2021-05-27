import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import BrandLogo from "../assets/Images/Index_img/logo_white700.png";
import "./Navbar.scss";
import { AuthContext } from "../../TMS/context/authContext";

const Navbar1 = () => {
  //states
  const [active, setActive] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openDropDown_Program, setOpenDropDown_Program] = useState(false);
  const [openDropDown_Services, setOpenDropDown_Services] = useState(false);

  //Animation for Hiding the navbar on scroll down
  const handleScroll = () => {
    if (window.pageYOffset > 2500) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  //Mobile-Menu-toggler
  const mobileMenuHandler = () => setOpenMobileMenu((prev) => !prev);

  //DropDown-toggler
  const dropDownOpenHandler = (type) => {
    if (type === "services") {
      setOpenDropDown_Program(false);
      setOpenDropDown_Services((prev) => !prev);
    } else {
      setOpenDropDown_Program((prev) => !prev);
      setOpenDropDown_Services(false);
    }
  };

  const history = useHistory();

  //auth-context
  const auth = useContext(AuthContext);

  //Login Handler
  const loginHandler = () => {
    if (auth.isLoggedIn) {
      auth.logout();
    } else history.push("/auth");
  };

  console.log(auth.token);

  return (
    <section className={`navigation ${!active ? "hide" : ""}`}>
      <div className="nav-container">
        <div className="brand">
          <a href="/">
            <img src={BrandLogo} alt="logo" width="160" />
          </a>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="nav-toggle"
              href="#"
              onClick={mobileMenuHandler}
              className={openMobileMenu && "active"}
            >
              <span></span>
            </a>
          </div>
          <ul
            className="nav-list"
            style={{ display: openMobileMenu ? "block" : "none" }}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!" onClick={() => dropDownOpenHandler("programs")}>
                Programs
              </a>
              <ul
                className="nav-dropdown"
                style={{ display: openDropDown_Program ? "block" : "none" }}
              >
                <li>
                  <a href="/startup_program">Startup Program</a>
                </li>
                <li>
                  <a href="/ve_program">Virtual Employee Program</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!" onClick={() => dropDownOpenHandler("services")}>
                Services
              </a>
              <ul
                className="nav-dropdown"
                style={{ display: openDropDown_Services ? "block" : "none" }}
              >
                <li>
                  <a href="#!">Marketing</a>
                </li>
                <li>
                  <a href="#!">Content Writing</a>
                </li>
                <li>
                  <a href="#!">Advertisement</a>
                </li>
              </ul>
            </li>
            {auth.isLoggedIn && (
              <li>
                <a href="/dash">TMS</a>
              </li>
            )}
            <li>
              <a href="#" onClick={loginHandler}>
                {auth.isLoggedIn ? "Logout" : "Login"}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar1;
