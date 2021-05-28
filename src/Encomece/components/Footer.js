import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import BusinessIcon from "@material-ui/icons/Business";
const FooterIcons = () => {
  return (
    <div className={"footer-icons"}>
      <a href="mailto:contact@encomece.com">
        <EmailIcon />
      </a>
      <a href="tel:+919755497568 ">
        <PhoneIcon />
      </a>
      <Link to="/">
        <TwitterIcon />
      </Link>
      <Link to="/">
        <FacebookIcon />
      </Link>
      <Link to="/">
        <InstagramIcon />
      </Link>
    </div>
  );
};
const Footer = () => {
  return (
    <footer
      className="footer-distributed mt-5"
      style={{ fontFamily: "Open Sans" }}
    >
      <div className="footer-left">
        <h3>Encomece</h3>

        <p className="footer-links">
          <Link to="/" className="link-1">
            Home
          </Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </p>
        {window.innerWidth > 720 ? <></> : <FooterIcons />}
        <p className="footer-company-name">
          Encomece © {new Date().getFullYear()}
        </p>
      </div>

      <div className="footer-center">
        <h5 style={{ color: "white" }} className="mb-3">
          Contact Us
        </h5>
        <div className="mb-2" style={{ color: "white" }}>
          <BusinessIcon style={{ color: "white" }} className="mr-1" />
          Banglore, Karnataka
        </div>

        <div className="mb-2">
          <PhoneIcon style={{ color: "white" }} className="mr-1" />
          <a href="tel:+919755497568 ">+91 9755497568 </a>
        </div>

        <div>
          <EmailIcon style={{ color: "white" }} className="mr-1" />

          <a href="mailto:contact@encomece.com">contact@encomece.com</a>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Provide you with the best consultation on your startup plan. We lend
          you our best employees who work as a virtual employee for you to drive
          your business and take up ownership of your results.
        </p>

        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;

{
  /*<div className={classes.footer}>
      <div className={classes.f_sec1}>
        <h3>Encomece</h3>
        <p>
          Provide you with the best consultation on your startup plan. We lend
          you our best employees who work as a virtual employee for you to drive
          your business and take up ownership of your results.
        </p>
      </div>
      <div className={classes.f_sec2}>
        <h3 style={{ marginBottom: "27px" }}>Follow Us</h3>
        <i
          style={{ fontSize: "26px", color: "royalblue" }}
          className="fab fa-facebook-f"
        ></i>
        &nbsp;&nbsp;
        <i
          style={{ fontSize: "26px", color: "#0e76a8" }}
          className="fab fa-linkedin"
        ></i>
        &nbsp;&nbsp;
        <i
          style={{ fontSize: "26px", color: "#00acee" }}
          className="fab fa-twitter"
        ></i>
        &nbsp;&nbsp;
        <i
          style={{ fontSize: "26px", color: "saddlebrown" }}
          className="fab fa-instagram"
        ></i>
        &nbsp;&nbsp;
      </div>
      <div className={classes.f_sec3}>
        <h3>Contact Us</h3>
        <i className="fas  fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <label for=""> India </label>
        <br />
        <i className="fas fa-envelope"></i> &nbsp;&nbsp;{" "}
        <label for=""> contact@encomece.com </label>
        <br />
        <i className="fas fa-phone-alt"></i> &nbsp;
        <label for=""> +91 9755497568 </label>
      </div>
    </div>  <img src={logo} alt="logo" style={{ height: "2rem" }} />*/
}
