import React, {useState} from 'react';
import './Faqs.css';
import {FaLightbulb} from "react-icons/fa";


function Faqs(index) {
    const [faqs,setfaqs] = useState([

        {
            question:'Who is the program for?',
            answer:"The program is for everyone that wants to work according to God's purpose for their lifes.",
            open:false
        },
        {
            question:'What do I stand to gain if I join the program? ',
            answer:'A lot of profitable things to gain',
            answer1:'You will gain alot',
            open:false
        },

        {
            question:"When does the program commence ",
            answer:"Every month  ",
            answer1:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            answer2:"",
            open:false
        },
        
        {
            question:"I have more questions?",
            answer:"No worries, Send an email to us at joyagunbiadeweb@gmail.com. We will be glad to receive your questions and get back in touch with you. ",
            answer1:'You can contact us directly',
            link:'Here',
            answer2:'',
            open:false
        }    

    ]);

    const toggleFAQ = (index) => {
        setfaqs (faqs.map((faq, i)=>{
            if (i === index){
                faq.open = !faq.open
            }
            else{
                faq.open =false;
            }

            return faq;
        }))
    }
  return(
    <div >
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
                                        <p>Your purpose in life is to find your purpose and give your whole heart and soul to it.
                                        </p>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div>
        <div className="container" id="faq">
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="gwop-faqs">
                            <h1 className="title text-center">
                                Frequently Asked Questions
                            </h1>

                            <div className="faq-container">
                                <div className="container">
                                
                                    <div className="faqs" >
                                        {faqs.map((faq, i) =>(
                                            <div className="faq">
                                                <div className={faq.open ? 'open' :'' } key={index} onClick = {() => toggleFAQ(i)}>
                                                    <div className="faq-question" >
                                                        {faq.question}
                                                    </div>

                                                    <div className="faq-answer">
                                                        {faq.answer}
                                                        <div className="remaining-answer" >

                                                            <div style={{marginTop:'20px'}}>{faq.answer1}<span> <a href="https://joyagunbiade.com/contact">{faq.link}</a></span></div>
                                                            <div style={{marginTop:'20px'}}>{faq.answer2}</div>
                                                           
                                                        </div>
                                                    </div>

                                                </div>
                                            
                                            </div>
                                        ))}

                                    </div>
                                    
                                </div>
                                
                            </div>
        
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
        </div>
    </div>
  )
}

export default Faqs;
