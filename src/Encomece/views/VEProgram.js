import React from "react";
import { useHistory } from "react-router-dom";

import classes from "../assets/css/layout.module.css";

//Images
import Image1 from "../assets/Images/VE_img/Group 268.webp";
import Image2 from "../assets/Images/VE_img/Mask Group 21.webp";
import Image3 from "../assets/Images/VE_img/avatar-circle-human-male-4-512 .webp";

//Components
const Navbar = React.lazy(() => import("../components/Navbar"));
const Footer = React.lazy(() => import("../components/Footer"));

const VEProgram = () => {
  const history = useHistory();
  return (
    <>
      <div className={classes.vp_Sec1}>
        <Navbar />
        <div className={classes.header}>
          <div className={classes.header_sec1}>
            <h1>
              Virtual <span id={classes.emp}> Employee </span> Program
            </h1>
            <h2>Are You a New Startup?</h2>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              nesciunt ex reiciendis quos doloremque, beatae excepturi omnis
              eveniet quasi corrupti id! Labore quisquam porro possimus.
            </li>

            <button
              id={classes.button}
              onClick={() => {
                console.log("CLICKED!");
                history.push("/auth");
              }}
            >
              Register
            </button>
          </div>
          <div className={classes.header_sec2}>
            <img src={Image1} width="100%" alt="Image1" />
          </div>
        </div>
      </div>

      <div className={classes.vp_Sec2}>
        <div className={classes.vp_sec2p1}>
          <img src={Image2} alt="Image2" />
        </div>
        <div className={classes.vp_sec2p2}>
          <h2>Hire Virtual Employee</h2>
          <p>
            Hire our employees to get your work done. Our task experts will work
            as virtual employee for you to drive your business towards success.
          </p>

          <h2>List The Micro Tasks</h2>
          <p>
            List your work when you want us to do for you. we take the
            responsibility for all your micro tasks.
          </p>

          <h2>Assign The Tasks</h2>
          <p>
            Pick the best virtual employee to assign the particular task to
            them.
          </p>

          <h2>Get Your Tasks Done</h2>
          <p>Track your task progress and get your work done efficiently.</p>

          <h2>Pay Per Micro Tasks</h2>
          <p>
            Paying full salary but having limited work? Pay our employees just
            for the task they've completed for.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default VEProgram;
