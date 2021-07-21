import React from 'react'
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FooterContainer } from '../containers/footer';
import "../assets/css/style.css";


import Image6 from "../assets/Images/SP_img/Group 276.webp";

import Image9 from "../assets/Images/SP_img/document.webp";
import Image10 from "../assets/Images/SP_img/cogwheels.webp";
import Image11 from "../assets/Images/SP_img/website.webp"; 



const StartupProgram = () => {
    const history = useHistory();
    return (
        <>
        <Navbar/>

        <header className="header ">
        <div className="head pt-sm-5">
            <div className="container-fluid pb-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 col-11 mx-auto head-1 mt-5 text-center">
                            <h2 className="pt-sm-4 pl-lg-5 pl-sm-1 ">Startup Program</h2>
                            <h4 className="pl-lg-5 pl-sm-1">Having a startup idea?</h4>
                            <p className="pl-lg-5 pl-sm-1">So many startup ideas die becouse of no proper guidance and help. Ideas need to be nutured. You
                                provide us with the idea and we provide you with the plan and stategy. We help you reach a consensus regarding a decison. Our role isn't just that an advisor but that of a partner,a friend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    
    <div className="container-fluid mt-4 mb-4 startup-1">
       <div className="container ">
        <div className="row  pt-5 pb-5 mt-5 mb-5">
            <div className="col-12">
                <h1 className="text-center pt-5">Startup Consultasion</h1>
                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum atque, corrupti quisquam tenetur, non officia error alias iste repellendus dignissimos labore laborum sit. Dolore, alias aperiam? Libero iusto nam unde.</p>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="text-bg">
                            <h4 className="text-center">Reserch 7 <br/> Analysis</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="text-bg">
                            <h4 className="text-center">Stategy & <br/> Planing</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="text-bg">
                            <h4 className="text-center">Structure & <br/> Prototyping</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mt-3">
                        <div className="text-bg">
                            <h4 className="text-center">Budget & <br/> Requirements</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>   


    <div className="container-fluid startup-2 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-12 mx-auto startup-2-img text-center">
                    <img src={Image6} className="img img-fluid" alt=""/>
                </div>
                <div className="col-lg-9 col-12 mx-auto startup-2-txt text-center">
                    <h2 className="pt-lg-3 pl-lg-5">Startup Solutions</h2>
                    <p className="pt-lg-2 pl-lg-5">Encomece undersatnds the need of business today. WE do not just stop by playing an advisory role but we provide all the startup solutions for you to have a great start to your dream venture. We walk along with you in executing these startergies,to ensure your sucess</p>
                </div>
            </div>
        </div>
    </div>
{/* 
    <!-- carousel section --> */}

    <div className="container carousel-section mb-5">
        <div className="row">
            <div className="col-lg-8 col-12 mx-auto ">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card card-1">
                            <div className="card-head c1">
                                <h5 className="pt-5 pb-5 text-center">Marketing Solutions</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis deleniti cum incidunt nihil quam magnam nesciunt eveniet at aliquam dolores quidem eius eaque id, non enim consequuntur dignissimos repellat!</p>
                            </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card card-2">
                            <div className="card-head c2">
                                <h5 className="pt-5 pb-5 text-center">Marketing Solutions</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis deleniti cum incidunt nihil quam magnam nesciunt eveniet at aliquam dolores quidem eius eaque id, non enim consequuntur dignissimos repellat!</p>
                            </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card card-3">
                            <div className="card-head c3">
                                <h5 className="pt-5 pb-5 text-center">Marketing Solutions</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis deleniti cum incidunt nihil quam magnam nesciunt eveniet at aliquam dolores quidem eius eaque id, non enim consequuntur dignissimos repellat!</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>


    <div className="container-fluid startup-3 pb-5">
        <div className="container"><div className="row">
            <div className="col-12">
                <div className="startup-3-txt col-lg-5 col-sm-8 col-10 mx-auto pt-5">
                    <p className="text-center pt-lg-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti facere exercitationem </p>
               </div>
               <div className="col-lg-8 col-sm-8 col-12  mx-auto  pt-3">
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Comments"/>
                        <div className="btn-border">
                            <input className="btn " type="button" value="SEND"/>
                        </div>
                </div>
               </div>
            </div>
        </div></div>
    </div>

    <div className="container-fluid startup-4 mt-5 mb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-12 mx-auto startup-4-txt pt-5 pb-sm-1 text-center">
                    <h3>Project Management <br/> Support</h3>
                    <p>Starting a business can be really confusing thar we should start from. We will help you with end-to-end project management Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum harum consequuntur molestiae eaque inventore ab recusandae voluptatem beatae aut dolor, iusto dignissimos minima dolores amet molestias blanditiis nihil! Ipsam.</p>
                </div>
                <div className="col-12">
                    <div className="row pb-5 pt-2">
                        <div className="col-sm-6 col-12 d-flex justify-content-center">
                            <div className="card text-center mt-5">
                               <div className="card-body">
                                <h4 >Documentation</h4>
                                <img src={Image9} className="img img-fluid text-center" alt=""/>
                                <p className="pl-lg-3 pr-lg-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis iste sunt consequuntur quia illum cum, commodi minus officiis rerum officia facilis nulla tenetur animi.</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-sm-6  col-12 d-flex justify-content-center">
                            <div className="card text-center mt-5">
                               <div className="card-body ">
                                <h4 >Operations</h4>
                                <img src={Image10} className="img img-fluid text-center" alt=""/>
                                <p className="pl-lg-3 pr-lg-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis iste sunt consequuntur quia illum cum, commodi minus officiis rerum officia facilis nulla tenetur animi.</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mx-auto col-12 d-flex justify-content-center">
                            <div className="card text-center mt-5">
                               <div className="card-body">
                                <h4 >Resourses</h4>
                                <img src={Image11} className="img img-fluid text-center" alt=""/>
                                <p className="pl-lg-3 pr-lg-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quis iste sunt consequuntur quia illum cum, commodi minus officiis rerum officia facilis nulla tenetur animi.</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterContainer/>
        {/* <Footer/> */}

        </>
    )
}

export default StartupProgram;
