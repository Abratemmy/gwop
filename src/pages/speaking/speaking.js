import React, { useState} from 'react';
// import Pagesheader from '../../components/pagesheader/pagesheader';
import "./speaking.css";
import data from '../../pages/speaking/country';
import video from "../../images/video.mp4";
import {Link} from "react-scroll";
import {BsArrowDown} from "react-icons/bs"
function Speaking(){

    const[form, setForm]= useState({
        firstname:"",
        email:"",
        country:"Canada",
    })

    const onChange =(e)=>{
        const {value, name} = e.target;
        setForm((state)=>({
            ...state,
            [name]:value
        }));
    }
    return (
        <div className="speakingpage">
            {/* <Pagesheader title="Speaking Request"/> */}

            <div className="speaking-picture">
                <div className="container">
                    <div className="speaking-pictext">
                        <h1 className=" speaking-header">Your audience deserve to be fascinated with the act of storytelling </h1>
                        <p>Your event deserves a speaker who seeks to invest in you and your attendees more than you invest in them.</p>
                        
                        <div className="button ">
                            <Link to='main' className="navlinks-btn schedule-btn text-left"style={{cursor:"pointer"}}>Invite me to speak
                                <span><BsArrowDown className="speaking-arrow" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="speakingBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="speaking-banner-title">
                                <h1>I INVEST IN THE SUCCESS OF YOUR EVENT</h1>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="speaking-banner">
                                <p>I partner with you to help promote your event by sharing your event details with my audience on social media platforms. I have experience 
                                    planning conferences and discovered promotion is a pivotal part of a successful event.
                                </p>
                                <p>Whether it’s a pre-interview before the event or creating a welcome video, I want to do whatever I can to give your attendees
                                     a preview of the value they will receive at your event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="speaking-video">                
                <video src={video} width="100%" controls="controls" loop autoPlay muted="true" className="video"/>
                
            </div>
            
           
            <div className="form-style" id="main" >
                <div className="text-center speakingcontent " >
                    <div className="title">Invite Joy as a <span>guest Speaker</span></div>
                    <p>I am honored for your interest in booking me to speak at your events. Simply complete the form below and someone from my team will attend to you promptly</p>
                </div>

                <div className="container">
                    <div className="speaking-container" >
                        <div className="sendform">Send a Form</div>
                        <form>
                            <div className="speaking-text">Fields marked with an <span>*</span> are required</div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Last Name <span>*</span></label>
                                        <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Last Name <span>*</span></label>
                                        <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Email <span>*</span></label>
                                        <input type="email" rules="required|max:255" name="email"placeholder="Email"  className="inputfield"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Phone number <span>*</span></label>
                                        <input type="text" rules="required|max:255" name="Phone number"placeholder="Phone number"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Organisation Name <span>*</span></label>
                                        <input type="text" rules="required|max:255" name="organisation"placeholder="Organisation name"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Organisation Website </label>
                                        <input type="url" rules="required|max:255" placeholder="organisation url"  className="inputfield"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Country <span>*</span></label>
                                        <select type="text" rules="required|max:255" name="email"placeholder="country"  className="inputfield"
                                            
                                        >
                                                {data.map(item =>{
                                                    return(
                                                        <option value="Canada" key={item.id}>{item.country}</option>
                                                    )
                                                })}

                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event theme <span>*</span></label>
                                        <input type="text" rules="required|max:255" placeholder="event theme"  className="inputfield"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event date <span>*</span></label>
                                        <input type="date" rules="required|max:255" placeholder="Date"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Number of speaking times <span>*</span></label>
                                        <input type="text" rules="required|max:255" placeholder="Example: 2 times"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Speaking hour<span>*</span></label>
                                        <input type="text" rules="required|max:255" placeholder="example: 30 minutes"  className="inputfield"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event Description <span>*</span></label>
                                        <textarea type="text" rules="required|max:255" placeholder="event theme"  className="textareafield" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event Location <span>*</span></label>
                                        <textarea type="text" rules="required|max:255" placeholder="Location"  className="textareafield" rows="4"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="submitButton"value="Submit" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Speaking
