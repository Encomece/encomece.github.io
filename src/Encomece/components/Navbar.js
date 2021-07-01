import React, { useEffect, useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { AuthContext } from "../../TMS/context/authContext";
import BrandLogo from "../assets/Images/Index_img/logo_white700.png";
//css
import "./Navbar.scss";

const Navbar1 = () => {
  //states
  const [active, setActive] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  //Animation for Hiding the navbar on scroll down
  useEffect(() => {
    const handleScroll = () => setActive(window.pageYOffset < 2500);
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
    if (auth.isLoggedIn) auth.logout();
    else history.push("/auth");
  };

  console.log(auth.isLoggedIn);

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
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <Link
                to="aboutus"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", color: "white" }}
                onClick={mobileMenuHandler}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer", color: "white" }}
                onClick={mobileMenuHandler}
              >
                PROGRAMS
              </Link>

              <ul className="nav-dropdown">
                <li>
                  <a href="/startup_program">Startup Program</a>
                </li>
                <li>
                  <a href="/ve_program">Virtual Employee Program</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="services"
                active="nav__activelink"
                spy={true}
                smooth={true}
                duration={1500}
                style={{ cursor: "pointer", color: "white" }}
                onClick={mobileMenuHandler}
              >
                SERVICES
              </Link>

              <ul className="nav-dropdown">
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
              <Link
                to="#"
                style={{ cursor: "pointer", color: "white" }}
                onClick={loginHandler}
              >
                {auth.isLoggedIn ? "LOGOUT" : "LOGIN"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar1;
