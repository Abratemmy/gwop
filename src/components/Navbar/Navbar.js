import React, { useState } from 'react';
import {Link } from 'react-scroll';
import './Navbar.css';
import {FiAlignRight, FiXCircle} from "react-icons/fi";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () =>setClick(!click);

    const changeBackground= ()=>{
        // the 200 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=200){
            setScrolled(true);
        }else{
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <div className="pages">
            <div className="homepage-wrapper">
                <div className="nav">
                    <div className={scrolled ?'Navbar scrolled': 'Navbar'}>
                        <Link to='home' className="logo">
                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1640535321/Joyagunbiade.com/logo_jw4dse.png" alt="Joy AgunbiadeLogo" /> 
                        </Link>

                        <ul  className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="active"><Link to ='home' activeClass="active"offset={-100} duration={1000} spy="true" className=" navbar-link" onClick={handleClick}>Home</Link></li>
                            <li><Link to ='story'activeClass="active" spy="true" offset={-100} duration={1000} className=" navbar-link" onClick={handleClick}>Success Story</Link></li>
                            <li><Link to='faq'activeClass="active" spy="true" offset={-100} duration={1000}  className=" navbar-link" onClick={handleClick}>FAQs</Link></li>
                            <li><a href= 'https://joyagunbiade.com'activeClass="active" spy="true"  className=" navbar-link" onClick={handleClick}>Joy Agunbiade</a></li>
                           
                            
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            {/* {this.state.click ? "yes" : "no"} */}
                            {click === true ? <div><span className="" onClick={handleClick}><FiXCircle /></span></div>:
                            <div><span className="" onClick={handleClick}><FiAlignRight /></span></div>}
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
