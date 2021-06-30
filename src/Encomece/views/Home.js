import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom"
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";

//css
import classes from "../assets/css/index_layout.module.css";
import "../assets/css/index_layout.module.css";

//Images
import Image2 from "../assets/Images/Index_img/flat-illustration-blog-content-blogging-commercial-blog-posting-internet-blogging-service_126608-84-removebg-preview.webp";
import Image1 from "../assets/Images/Index_img/digital-marketing-illustration_1893-2527-removebg-preview.webp";

//icons
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import {Link as ScrollLink } from "react-scroll";
const Home = () => {
  return (
    <>
      <div className={classes.bgImg}>
        <div className={classes.cnt}>
          <Navbar />
        </div>
        <div className={classes.text}>
          <div className={classes.tsec1}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              ratione fuga sequi. Ipsam, voluptate atque.
            </h1>
          </div>
          <div className={classes.tsec2}>
            <ScrollLink
              to="services"
              active="nav__activelink"
              spy={true}
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer", color: "white" }}
            >
              <button>Explore Now</button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "60px" }} id="aboutus">
        {" "}
        <div className={classes.aboutus}>
          <div className={classes.mainsec}>
            <div className={classes.col1}>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <SupervisorAccountTwoToneIcon
                    style={{ fontSize: "100px", color: "orange" }}
                  />
                  <h4>You get a dedicated working team</h4>
                  <br />
                  <p>
                    One needs a great team of employees so as to expect quality
                    work from them. This is exactly what one gets after they
                    hire pro virtual employees to help them with their business
                    activities.
                  </p>
                </div>
              </div>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <QuestionAnswerIcon
                    style={{ fontSize: "100px", color: "blue" }}
                  />
                  <h4>You get the best consultation</h4>
                  <br />
                  <p>
                    When starting a business, one may have an idea that they
                    want to have implemented but how one frames that idea, so as
                    to make it work, is the main challenge. This is where these
                    trained virtual employees come in and save your day.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={classes.col2}
              style={{ padding: "0% 1.5% 2% 1.5%" }}
            >
              <br />
              <br />
              <h1>About Us</h1>
              <br />
              <h3>Best resources for the best idea</h3>
              <p>
                Encomece blends a myriad of services that suit the current
                market trends. Besides helping startups identify and hire the
                right talent, we provide professional advice to help
                entrepreneurs realize their business objectives. However, we
                have set up a highly-skilled team of professionals dedicated to
                supporting large, medium, and small-sized enterprises to
                actualize their business plans. Our State of Art Virtual
                Assistant Technology, coupled with experienced experts, makes us
                stand out in the game. Based in Banglore, Karnataka, India,
                Encomece has highly equipped staff committed to providing
                cutting-edge consultation and technological support to
                entrepreneurs Worldwide.
              </p>
            </div>
            <div className={classes.col1}>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <HowToRegIcon style={{ fontSize: "100px", color: "red" }} />
                  <h4>Your management stress is relieved</h4>
                  <br />
                  <p>
                    Having to deal with issues regarding employees, salaries,
                    and resources can be a tiring job. Getting one to handle
                    some of your duties while you attend to others will play as
                    a stress-reliever for you.
                  </p>
                </div>
              </div>
              <div className={classes.collayout}>
                <div className={classes.logo}>
                  <VerifiedUserIcon
                    style={{ fontSize: "100px", color: "green" }}
                  />
                  <h4>Assurance of quality work</h4>
                  <br />
                  <p>
                    Being professional, means being good at what you do. May it
                    be meeting deadlines, writing perfect articles or even
                    skiing, if one is a pro at what they do, then that’s an
                    assurance of quality performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="programs" style={{ paddingTop: "70px" }}>
        {" "}
        <div className={classes.Programs}>
          <h1>Featured Programs</h1>
          <div>
            <div className={classes.vep}>
              <div className={classes.image}>
                <img src={Image1} width="75%" alt="" />
              </div>
              <div className={classes.content}>
                <center>
                  <h1 style={{ marginTop: "19px", fontFamily: "fangsong" }}>
                    VIRTUAL EMPLOYEE PROGRAM
                  </h1>
                </center>
                <p>
                  Encomece matches clients Worldwide with suitable Virtual
                  Assistants. As demand for remote staff grows, we continue to
                  scale up operations to provide more efficient VA services to
                  our clients. Our rigorous recruitment drive ensures VAs hired
                  meet our stipulated quality standards. As such, customer
                  satisfaction remains our top priority. Our specialized
                  approach to different fields makes it easier for us to deliver
                  quality services that exceed client expectations. Ranging from
                  bookkeeping, admin support, digital communication, or any
                  other skillset that clients lack in an organization, our team
                  of consultants is always ready to help. Regardless of the
                  timeframe, we work round the clock to deliver excellent VA
                  support to every client around the World.
                </p>
                <center>
                  <NavLink to="/ve_program" className={classes.link}>
                    <button className={classes.button}>
                      Learn More &nbsp;
                    </button>
                  </NavLink>
                </center>
              </div>
            </div>
            <div className={classes.sp}>
              <div className={classes.image}>
                <img src={Image2} width="87%" alt="" />
              </div>
              <div className={classes.content}>
                <center>
                  <h1 style={{ marginTop: "19px", fontFamily: "fangsong" }}>
                    STARTUP PROGRAM
                  </h1>
                </center>
                <p>
                  Encomece fully understands the challenges startups go through.
                  In that regard, we have established a robust startup program
                  that helps startups realize their potential. The main
                  objective of the start program is to convert every idea into
                  reality. We make it simple to plan and execute any business
                  idea that a client may be struggling to implement. Besides
                  follow-up, consultation, and advice, our team of experts
                  ensures your concept is actualized.
                  <br /> <br /> <br /> <br /> <br /> <br />
                </p>
                <center>
                  <NavLink to="/startup_program" className={classes.link}>
                    <button className={classes.button}>
                      Learn More &nbsp;
                    </button>
                  </NavLink>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.sec4}>
        <div className={classes.sec41}>
          <h1>Why work with us?</h1>

          <p>
            Encomece has highly skilled experts in various fields committed to
            helping every customer achieve what they want. We not only guarantee
            quality services but also deliver services that meet our client's
            expectations. A blend of current technological trends with highly
            experienced experts is what makes us stand out among others.
          </p>

          <Link to="/auth">
            <button className={classes.join_now}>Join Us Now</button>
          </Link>
          <div id="services"></div>
        </div>
        <div className={classes.sec42}></div>
      </div>
      <div className={classes.toolsandR}>
        <h1>What we offer?</h1>

        <div>
          <Carousel fade indicators={false}>
            <Carousel.Item interval={10000}>
              <div className={classes.t_rcards}>
                <div className={classes.dev}>
                  <div className={classes.dimg}>
                    <h3>Development</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.des}>
                  <div className={classes.deimg}>
                    <h3>Designing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Brand visibility plays a crucial role in a competitive
                    World. As such, we help with various aspects of design work
                    that are essential in brand visibility. Our experienced
                    experts help out with the entire branding process to give a
                    new company an outlook that helps the target audience
                    identify it, among others......
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.man}>
                  <div className={classes.mimg}>
                    <h3>Management</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <div className={classes.t_rcards}>
                <div className={classes.dev}>
                  <div className={classes.dimg}>
                    <h3>Marketing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.des}>
                  <div className={classes.deimg}>
                    <h3>Content Writing</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Content is king in every communication and marketing
                    strategy. In this case, we have a highly experienced team of
                    content producers that help clients with their content
                    needs. Whether you need web copy, sales copy, SEO content,
                    newsletter, or any other content you may need for your
                    company, we have your back......
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                </div>
                <div className={classes.man}>
                  <div className={classes.mimg}>
                    <h3>Advertising</h3>
                  </div>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
                    <a className={classes.link} href="">
                      Read More
                    </a>
                  </p>
                  <br />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Caraousal Part */}
      <CarouselMain />
      <div className={classes.blog}>
        <div className={classes.b_heading}>
          <h1>Blog</h1>
        </div>
        <div className={classes.blog_s1}>
          <div className={classes.Mg26}></div>
          <div className={classes.b_content}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <span className={classes.time}>
              <label>Jan 26, 2021</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>5 mins</label>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga debitis sapiente odit suscipit? Doloremque laborum
              similique......
              <a className={classes.link} href="">
                Read More
              </a>
            </p>
          </div>
        </div>
        <div className={classes.blog_s2}>
          <div className={classes.Mg27}></div>
          <div className={classes.b_content}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
            <span className={classes.time}>
              <label>Jan 26, 2021</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label>5 mins</label>
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis fuga debitis sapiente odit suscipit? Doloremque laborum
              similique......
              <a className={classes.link} href="">
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.news_letter}>
        <div className={classes.main_sec_blog}>
          <div className={classes.heading_sec}>
            <h1 style={{ fontWeight: "500" }}>Subscribe to Our Newsletter</h1>
          </div>
          <div className={classes.input_sec}>
            <input type="email" placeholder="Enter Your Email" name="" id="" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
