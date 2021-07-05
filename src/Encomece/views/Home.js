import React from "react";

import Carousel from "react-bootstrap/Carousel";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselMain from "../components/CarouselMain";

//css
import classes from "../assets/css/index_layout.module.css";
import "../assets/css/index_layout.module.css";

//Images
import Image2 from "../assets/Images/Index_img/person-using-tablet-min.webp";
import Image1 from "../assets/Images/Index_img/business-video-call-laptop (1).webp";

//icons
import SupervisorAccountTwoToneIcon from "@material-ui/icons/SupervisorAccountTwoTone";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={classes.layer1}>
        <div className={classes.layer1Text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione
          fuga sequi. Ipsam, voluptate atque.
        </div>
        <div className={classes.explore}>
          <button className={classes.exploreBtn}>Explore Now</button>
        </div>
      </div>

      <div className={classes.mainsec_aboutus}>
        <div className={classes.col2_left}>
          <div className={classes.col2_left1}>
            <div className={classes.logo}>
              <SupervisorAccountTwoToneIcon
                style={{ fontSize: "100px", color: "orange" }}
              />
              <div className={classes.col2_heading2} style={{ color: "white" }}>
                Dedicated Teams
              </div>
              <br />
              <div className={classes.col2_details} style={{ color: "white" }}>
                We at Encomece ensure the quality of work and confidentiality of
                information.
              </div>
            </div>
          </div>
          <div className={classes.col2_left2}>
            <div className={classes.logo}>
              <QuestionAnswerIcon
                style={{ fontSize: "100px", color: "blue" }}
              />
              <div className={classes.col2_heading2} style={{ color: "white" }}>
                Best Consulation
              </div>
              <br />
              <div className={classes.col2_details} style={{ color: "white" }}>
                We provide the best consultation and suggest you the best
                possible thing to start with.
              </div>
            </div>
          </div>
        </div>

        {/* middleComponent */}
        <div className={classes.col2_middle}>
          <div className={classes.col2_heading}>About Us</div>
          <div className={classes.col2_content}>
            <div className={classes.col2_heading2}>
              Best resources for the best idea
            </div>
            <div className={classes.col2_para}>
              We welcome young and bright minds brimming with innovative ideas
              and help them make it real. Our goal is to walk alongside startups
              and provide them with guidance at every step to success. We
              believe every idea is the best idea and, best ideas need the best
              resources. If you are a new startup or having an idea that holds
              potential, we are here to help you.
            </div>
          </div>
        </div>
        <div className={classes.col2_right}>
          <div className={classes.col2_right1}>
            <div className={classes.logo}>
              <HowToRegIcon style={{ fontSize: "100px", color: "red" }} />
              <div className={classes.col2_heading2} style={{ color: "white" }}>
                Trained Experts
              </div>
              <br />
              <div className={classes.col2_details} style={{ color: "white" }}>
                Our trained professionals will support you in every task to
                accelerate your startup growth.
              </div>
            </div>
          </div>
          <div className={classes.col2_right2}>
            <div className={classes.logo}>
              <VerifiedUserIcon style={{ fontSize: "100px", color: "green" }} />
              <div className={classes.col2_heading2} style={{ color: "white" }}>
                Assurance
              </div>
              <br />
              <div className={classes.col2_details} style={{ color: "white" }}>
                We guarantee the utmost confidentiality and quality of your work
                with the best results possible.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="programs">
        <div className={classes.Programs}>
          <div className={classes.featuredPrograms}>Featured Programme</div>
          <div className={classes.featuredProgramsContainer}>
            <Card
              imagePath={Image1}
              headerName="VIRTUAL EMPLOYEE PROGRAM"
              headercontent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  illum, quisquam, tempora earum saepe cum aperiam amet,
                  pariatur nisi non repudiandae molestiae eligendi porro
                  obcaecati."
              route="/ve_program"
            />
            <Card
              imagePath={Image2}
              headerName="STARTUP PROGRAM"
              headercontent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                  illum, quisquam, tempora earum saepe cum aperiam amet,
                  pariatur nisi non repudiandae molestiae eligendi porro
                  obcaecati."
              route="/startup_program"
            />
          </div>
        </div>
      </div>

      <div className={classes.sec4}>
        <div className={classes.sec41}>
          <div className={classes.col2_heading} style={{ color: "white" }}>
            Didn't get what you are looking for?
          </div>

          <div className={classes.col2_para} style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            incidunt amet libero ratione, qui debitis ea officiis alias ex fuga
            esse vitae dicta dolore consectetur nam illum autem unde.
            Cupiditate?
          </div>
          <br />
          <button className={classes.buttonGreen}>Join Us Now</button>
          <div id="services"></div>
        </div>
        <div className={classes.sec42}></div>
      </div>
      <div className={classes.toolsandR}>
        <div className={classes.toolsAndResources}>Tools And Resources</div>

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
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.....
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
          <div className={classes.blogHeading}>Blog</div>
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
            <div className={classes.newsLetterHeading}>
              Subscribe to Our Newsletter
            </div>
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
