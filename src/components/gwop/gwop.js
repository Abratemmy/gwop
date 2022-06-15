import React from 'react';
import "./gwop.css";
import Pagesheader from '../pagesheader/pagesheader';
import {FaLightbulb} from "react-icons/fa";


function Gwop() {
    return (
        <div id="home">
        <div className="GWOP">
            <Pagesheader title="God's Women of Purpose" />
            <div className="gwopbackground-pic">
                <div className="gwopbg">
                    <div className="container">
                        <div className="bg-text">
                            Ready to discover and <span>grow in your purpose?</span>
                        </div>

                        <div className="bg-button" style={{paddingTop:"40px"}}>
                            <a href="https://us20.list-manage.com/contact-form?u=2080aebe8d57f05901717ffc6&form_id=d98a92d344db8f30b7ca3f5ddcf79bd4" target="_blank" rel="noreferrer"className="bg-navlinkbtn">
                                <span>Join the Program</span>
                            </a>
                        </div>
                        
                        <div className="gwopvertical">
                            The lord will withhold no good things from them that do right
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-gwop">
                <div className="container">
                    <h1 className="title wow fadeInDown">What is GWOP</h1>

                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwop-text wow fadeInUp "data-wow-duration="2s" data-wow-delay=".1s">
                                God’s women of purpose is an intentional arena, coaching women for healing, growth and repositioning, to discover and fulfil destiny in Christ. We are made to serve you 
                                by creating an atmosphere for purpose discovery and equipping you with the tools, resources and environment to walk in purpose. 
                            </div>

                            <div className="gwop-text wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
                                We are walking towards the mandate of knowing Jesus and making Jesus known in our spheres of influence as women of purpose. We are the salt of the earth in
                                every home, office, marketplace and society at large. We are bounded by Love that is, God.
                            </div>

                            <div className="gwop-text">
                                
                            </div>
                            

                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div>

            <div className="gwop-quote">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwop-quote-text">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-sm-1">
                                        <FaLightbulb className="quote-icon" />
                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-11">
                                        <p>Knowing your life purpose is the first step towards living a truly fulfilled life. A life 
                                            purpose provides us with a clear goal, a set finish line that you truly want to reach
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div>


            <div className="gwop-success">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwopsuccess-container">
                                <h1 className="title wow fadeInDown">
                                    Who is the program for?
                                </h1>
                                <div className="gwopsuccesslist">
                                    <div className="sub-title">This GWOP program is for women who want to:</div>
                                    <ul>
                                        <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">Understand the right approach to life</li>
                                        <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">Understand your purpose</li>
                                        <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">Discover and fulfill destiny in Christ</li>
                                        <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".7s">Turn your purpose into actionable steps</li>
                                        <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".9s">Recognise who you are, Why you are and where you are going</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
                
            </div>

            {/* <div className="gwop-quote">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwop-quote-text">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-sm-1">
                                        <FaLightbulb className="quote-icon" />
                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-11">
                                        <p>Your purpose in life is to find your purpose and give your whole heart and soul to it.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div> */}

           
            {/* <div className="event-schedule">
                <div className="container">
                    <div className="bg-button gwopbutton" style={{textAlign:"center", position:"relative", top:"-20px"}}>
                        <a href='https://us20.list-manage.com/contact-form?u=2080aebe8d57f05901717ffc6&form_id=d98a92d344db8f30b7ca3f5ddcf79bd4' target="_blank"rel="noreferrer" className="bg-navlinkbtn" >
                            <span>Join us to embark on that journey together to discover purpose and live it out loud! </span>
                        </a>
                    </div>
                </div>
            </div> */}
          
            

        </div>
        </div>
    )
}

export default Gwop
