import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import BrandLogo from "../assets/Images/Index_img/logo_white700.png";
import "./Navbar.scss";
import { AuthContext } from "../../TMS/context/authContext";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

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

  const history = useHistory();

  //auth-context
  const auth = useContext(AuthContext);

  //Login Handler
  const loginHandler = () => {
    if (auth.isLoggedIn) {
      auth.logout();
    } else history.push("/auth");
  };

  // console.log(auth.token);

  return (
    <section className={`navigation ${!active ? "hide" : ""}`}>
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">
            <img src={BrandLogo} alt="logo" width="160" />
          </NavLink>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link
                to="aboutus"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", color: "white" }}
              >
                About us
              </Link>
            </li>
            

            <li className="nav__menu-item">
              <Link
                to="programs"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer", color: "white" }}
              > Programs
              </Link>

              <ul
                className="nav_dropdown"
              >
                <li className="nav_dropdown-item">
                  <a href="/startup_program">Startup Program</a>
                </li>
                <li className="nav_dropdown-item">
                  <a href="/ve_program">Virtual Employee Program</a>
                </li>
              </ul>
            </li>
            

            <li className="nav__menu-item">
              <Link
                to="services"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={1500}
                style={{ cursor: "pointer", color: "white" }}
              >
                Services
              </Link>

              <ul
                className="nav_dropdown"
              >
                <li className="nav_dropdown-item">
                  <a href="#!">Marketing</a>
                </li>
                <li className="nav_dropdown-item">
                  <a href="#!">Content Writing</a>
                </li>
                <li className="nav_dropdown-item">
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
              <Link
                to="#"
                onClick={loginHandler}
                style={{ cursor: "pointer", color: "white" }}
              >
                {auth.isLoggedIn ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar1;
