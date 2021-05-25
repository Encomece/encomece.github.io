import React from "react";
import classes from "../assets/css/index_layout.module.css";

//Icons
import {
  LinkedIn,
  Facebook,
  Instagram,
  Twitter,
  LocationOn,
  Mail,
  Phone,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className={classes.footer}>
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
        <Facebook style={{ fontSize: "30px", color: "royalblue" }} />
        &nbsp;
        <LinkedIn style={{ fontSize: "30px", color: "#0e76a8" }} />
        &nbsp;
        <Twitter style={{ fontSize: "30px", color: "#00acee" }} />
        &nbsp;
        <Instagram style={{ fontSize: "30px", color: "saddlebrown" }} />
        &nbsp;
      </div>
      <div className={classes.f_sec3}>
        <h3>Contact Us</h3>
        <LocationOn fontSize="small" />
        &nbsp;&nbsp;&nbsp;
        <label for=""> India </label>
        <br />
        <Mail fontSize="small" />
        &nbsp;&nbsp;&nbsp;
        <label for=""> contact@encomece.com </label>
        <br />
        <Phone fontSize="small" />
        &nbsp;&nbsp;
        <label for=""> +91 9755497568 </label>
      </div>
    </div>
  );
};

export default Footer;
