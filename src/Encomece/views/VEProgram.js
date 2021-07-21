import React from 'react'
import { useHistory } from 'react-router-dom';
import "../assets/css/style-2.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FooterContainer } from '../containers/footer';
import Image1 from '../assets/Images/VE_img/Image 5.webp'

const VEProgram = () => {
    const history = useHistory();
    return (
        <>
        <Navbar/>


        <header class="header mb-5">
        <div class="head pt-sm-5">
            <div class="container-fluid pb-5">
                <div class="container"><div class="row ">
                    <div class="col-lg-6 col-sm-6 col-12 head-bg"></div>
                    <div class="col-lg-6 col-sm-6 col-12 head-1 pt-lg-5">
                        <h2 class="pt-sm-4 pl-lg-5 pl-sm-1 mt-3 ml-lg-4 mr-lg-4">Virtual <span class="primary">Employee</span> <br/>Program</h2>
                        <h4 class="pl-lg-5 pl-sm-1 ml-lg-4 mr-lg-4">Are You a New StartUp ?</h4>
                        <p class="pl-lg-5 pl-sm-1 ml-lg-4 mr-lg-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam, quos ut eum facilis quasiadipisicing elit. Debitis veniam, quos ut eum facilis quasi quisquam asperiores omnis obcaecati deserunt illum necessitatibus quia, libero neque quae ducimus voluptates. Omnis, eos.</p>
                        <div class="pl-lg-5 pl-sm-1 pt-4 ml-lg-4 mr-lg-4">
                            <input type="button" class="btn " value="Register"/>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    </header>

    <div class="container-fluid mt-5 mb-5 bg-layer">
        <div class="row">
            <div class="col-12 col-lg-6 mx-auto bg-layer-2 text-center">
                <h4 >Hire Virtual Employee</h4>
                <p>Hire our employees to get your work done. Our task experts will work as virtual employee for you to drive your business towards success</p>
                
                <h4>List The Micro Tasks</h4>
                <p>List your work when you want us to do for you. we take the responsibility for all your micro tasks.</p>

                <h4>Assign The Tasks</h4>
                <p>Pick the best virtual employee to assign the particular task to them.</p>

                <h4>Get Your Tasks Done</h4>
                <p>Track your task progress and get your work done efficiently.</p>

                <h4>Pay Per Micro Tasks</h4>
                <p>Paying full salary but having limited work? Pay our employees just for the task they've completed for</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row over-view">
            <div class="col-6">
                <h4>Over View</h4>
            </div>
            <div class="col-6 d-flex justify-content-end">
                <h5 class="">virtual <span>Employee</span></h5>
            </div>
        </div>
        <div class="row mt-4">   
           <div class="col-12">
            <div class="row border" >
                <div class="col-12 col-lg-6 section_1">
                    <div class="media p-2">
                        <img src={Image1} class="mr-2 mt-2 rounded-circle" style={{width:'90px'}} height="90px"/>
                        <div class="media-body ">
                          <p class="mt-1">Founder & CEO</p>    
                          <h4 >Liam Noah</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 section_2">
                    <div class="media  p-2">
                        <div class="media-body mt-3">   
                          <h4 class="h4 pl-3">CEO Approval Rating <br/> -- / 100</h4>
                          <span class="pt-1  pl-3">Weight in</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row border mt-4" >
                <div class="col-12 col-lg-6 section_1">
                    <div class="media p-2">
                        <img src={Image1} class="mr-2 mt-2 rounded-circle" style={{width:'90px'}} height="90px"/>
                        <div class="media-body ">
                          <p class="mt-1">Founder & CEO</p>    
                          <h4 >Liam Noah</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 section_2">
                    <div class="media  p-2">
                        <div class="media-body mt-3">   
                          <h4 class="h4 pl-3">CEO Approval Rating <br/> -- / 100</h4>
                          <span class="pt-1  pl-3">Weight in</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row border mt-4" >
                <div class="col-12 col-lg-6 section_1">
                    <div class="media p-2">
                        <img src={Image1} class="mr-2 mt-2 rounded-circle" style= {{width:'90px'}} height="90px"/>
                        <div class="media-body ">
                          <p class="mt-1">Founder & CEO</p>    
                          <h4 >Liam Noah</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 section_2">
                    <div class="media  p-2">
                        <div class="media-body mt-3">   
                          <h4 class="h4 pl-3">CEO Approval Rating <br/> -- / 100</h4>
                          <span class="pt-1  pl-3">Weight in</span>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    

<FooterContainer/>
        {/* <Footer/> */}

        </>
    )
}

export default VEProgram;
