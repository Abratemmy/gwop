import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri'

export class Footer extends Component {
    render() {
        return (
            <div className="footerpage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-logo">
                                    <NavLink to="/jaweb/" className="footer-logo-nav"><img src="" alt="JoyLogo" /></NavLink>
                                </div>
                                <div className="footer-about">
                                    <p>Joy Agunbiade have a strong passion for people discovering their purpose and walking in it fully . . .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-title">Quick Links</div>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to="/jaweb/blogs" className="footer-link">Blog</NavLink></li>
                                        <li><NavLink to="/jaweb/podcast" className="footer-link">Podcast</NavLink></li>
                                        <li><NavLink to="/jaweb/events" className="footer-link">Events</NavLink></li>
                                        <li><NavLink to="/jaweb/speaking" className="footer-link">Speaking</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-title">Contact-info</div>
                                <div className="footer-text">
                                    <span>Email:</span> joyagunbiade.com
                                </div>
                                <div className="footer-text">
                                    <ul className="footer-social">
                                        {/* <li><a href="/jaweb/blogs" className="footer-link"><FaFacebookF className="footer-navlink" /></NavLink></li> */}
                                        <li><a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" target="_blank"  rel="noopener noreferrer" className="footer-link"><RiLinkedinFill className="footer-navlink" /></a></li>
                                        <li><a href="https://www.instagram.com/joy_ajay/" className="footer-link" target="_blank"  rel="noopener noreferrer"><FaInstagram className="footer-navlink" /></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className="footer-copyright text-center">
                        Copyright © JoyAgunbiade.com  <span> |
                            <a href="https://abratemmy.github.io/myportfolio/" target="_blank"  rel="noopener noreferrer" className="footer-webmaster">Webmaster</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
