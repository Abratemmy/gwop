import React from 'react';
import "./quote.css";
import { RiArrowLeftSLine,  RiArrowRightSLine} from "react-icons/ri";
import quote2 from "../../images/quote2.JPG";
import quote3 from "../../images/quote3.JPG";
import quote4 from "../../images/quote4.JPG";
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im"
function Quote() {
    return (
        <div className="" style={{marginBottom:"40px"}}>
            <div id="carouselExampleIndicators" className="carousel slide bootstrapcarousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={quote3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption carousel-caption-left d-none d-md-block">
                            <div className="carousel-line">
                                <div className="quote-icon"><ImQuotesLeft className="quote" /> </div>
                                <p className="section1 " style={{animationDelay:".4s"}}>
                                   Jesus Christ the same yesterday, today and forever
                                </p> 
                                <div className="quote-icon"><ImQuotesRight className="quote quote-right" /> </div>  
                            </div>                     
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={quote4} className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carousel-caption-right">
                                <div className="carousel-lineright">
                                    <div className="quote-icon"><ImQuotesLeft className="quote" /> </div>
                                    <p className="section1 " style={{animationDelay:".4s"}}>
                                       Jesus is the true vine and we are the branches
                                    </p> 
                                    <div className="quote-icon"><ImQuotesRight className="quote quote-right" /> </div>                     
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="carousel-item ">
                        <img src={quote2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption carousel-caption-left d-none d-md-block">
                            <div className="carousel-line">
                                <div className="quote-icon"><ImQuotesLeft className="quote" /> </div>
                                <p className="section1 " style={{animationDelay:".4s"}}>
                                    Come unto me all ye that labour
                                </p> 
                                <div className="quote-icon"><ImQuotesRight className="quote quote-right" /> </div> 
                            </div>                    
                        </div>                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                   
                    <span>< RiArrowLeftSLine aria-hidden="true" className="slider-arrow"/></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                   
                    <span><RiArrowRightSLine aria-hidden="true" className="slider-arrow" /></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}

export default Quote
