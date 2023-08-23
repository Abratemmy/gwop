import React, { useState } from 'react';
import "./gwop.css";
import Pagesheader from '../pagesheader/pagesheader';
import { FaLightbulb } from "react-icons/fa";
import gwop from "../../file/gwop.pptx"
import Book from '../Book/Book';

function Gwop({ data, loading }) {
    const [openBook, setOpenBook] = useState(false);
    const openBookHandler = () => {
        setOpenBook(true)
    }
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

                            <div className='general-btn'>
                                <div className="bg-button" style={{ paddingTop: "40px" }}>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJtlzsaF-Any6BAKpQe2XsOJ5k1DGz7eRp8eDb_pA8wVPGRQ/viewform" target="_blank" rel="noreferrer" className="bg-navlinkbtn">
                                        <span>Join the Program</span>
                                    </a>
                                </div>

                                <div className="bg-button bg-button-eBook" style={{ paddingTop: "40px" }}>

                                    <span className="bg-navlinkbtn" onClick={openBookHandler}>
                                        <span>GWOP Resources</span>
                                    </span>
                                </div>
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
                                <div className="gwop-text wow fadeInUp " data-wow-duration="2s" data-wow-delay=".1s">
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

                                            <div className="bg-button bg-button-eBook" style={{ textAlign: "center" }}>
                                                <span href={gwop} className="bg-navlinkbtn" onClick={openBookHandler}>
                                                    <span>Download GWOP E-book</span>
                                                </span>
                                            </div>
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
                                            <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">Understand purpose</li>
                                            <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".5s">Discover and fulfill destiny in Christ</li>
                                            <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".7s">Turn purpose into actionable steps</li>
                                            <li className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".9s">Recognise who they are, Why they are and where they are going</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        </div>
                    </div>

                </div>

                {openBook && (
                    <div className='popupContainer'>
                        <div className='formpopupBody' onClick={(e) => e.stopPropagation()}>
                            <Book data={data} loading={loading} closeBtn={() => setOpenBook(false)} />
                        </div>
                    </div>
                )}



            </div>
        </div>
    )
}

export default Gwop
