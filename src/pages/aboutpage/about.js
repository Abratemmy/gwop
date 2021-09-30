import React, { Component } from 'react';
import './about.css';
import aboutimg from '../../images/img5.jpg'
import Quote from '../../components/quote/quote';
import instagrampic from "../../images/aboutinstagram.jpeg";
import linkedinpic from "../../images/aboutinstagram.png";
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri'

export class About extends Component {
    render() {
        return (
            <div className="newaboutpage">
                <div className="about-banner">
                    <div className="container">
                        <div className="speaking-pictext">
                            <h1 className=" speaking-header" style={{paddingTop:"10px"}}>Building Values <br /><span>With Passion</span></h1>
                            <p style={{paddingTop:"25px"}}>Your event deserves a speaker who seeks to invest in you and your attendees more than you invest in them.</p>
                           
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-container"> 
                                <div className="newabout-img">
                                    <img src={aboutimg} alt="loading"  />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-container">
                                <div className="newaboutgroup-text">
                                    <div className="newabout-title">Passionate for God</div>
                                    <div className="newabout-text">
                                        My name is Joy Agunbiade and I am first a child of God, before anything else. Wait a minute, hold that thought before any conclusions are made, I am here to serve you. A people lover both in my specific purpose 
                                        and my career path. A Human Resources professional by trade with a background in psychology from Unilag. 
                                    </div>

                                    <div className="newabout-text">
                                        I have a strong passion for people discovering their purpose and walking in it fully. I believe life is much sweeter when you know what you’re called by God to be and you simply being that. I am the steward /co-founder of GWOP which is God’s Women of Purpose. 
                                        A place where women are equipped with the tools, resources and environment needed to discover and fulfil purpose.
                                    </div>

                                    <div className="newabout-text">
                                        When I’m not working I’ll be on some adventure solo trips, or supporting charity projects, hosting talk shows, podcasts and 
                                        evangelistic events. I am on a mission to transmit God’s message from His heart to yours by any means possible. 
                                    </div>

                                    <div className="newabout-text newabout-continue" >
                                        <em style={{fontWeight:"500"}}>A</em><span>nd the Journey Continues . . .</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Quote />

                <div className="about-session container">
                    <div className="about-social ">Check me <span>Out On</span></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12"></div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="about-social-container">
                                    <a href="https://www.instagram.com/joy_ajay/" className="about-link" target="_blank"  rel="noopener noreferrer">
                                        <img src={instagrampic} alt="loading" />
                                        <div className="about-social-text">
                                            We cannot become what we need by remaining what we are.
                                        </div>
                                        <div className="about-social-icon">
                                            <FaInstagram className="about-icon" />
                                        </div>
                                    </a>
                                
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="about-social-container ">
                                    <a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" target="_blank"  rel="noopener noreferrer" className="about-link">
                                        <img src={linkedinpic} alt="loading" />
                                        <div className="about-social-text about-social-text-linkedin">
                                            How you love yourself is how you teach others to love you
                                        </div>
                                        <div className="about-social-icon">
                                            <RiLinkedinFill className="about-icon" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default About
