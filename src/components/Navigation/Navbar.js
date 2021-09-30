import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import {AiOutlineArrowDown} from "react-icons/ai"

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    const [navbar, setNavbar] = useState(false);

    
    const changeBackground= ()=>{
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=130){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    // this code for the dropdown
    const[dropdown, setDropdown] = useState(false);
    const handleDropdown = () =>setDropdown(!dropdown)


    return (
        <div className={navbar ? "navbar active":"navbar"}>
            <div className="container">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <img src="" width="100%" alt="JoyLogo" />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/jaweb"exact activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <span>
                                <NavLink to="/jaweb/about"activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
                                {/* <span className="dropdown-span"><AiOutlineArrowDown className="droparrow" onClick={handleDropdown} /></span> */}
                            </span>
                            {/* code for hoverdropdown */}
                            {/* <ul className="hoverdropdown">
                                <li><NavLink to="/jaweb/officialbio" exact activeClassName="active" className="sub-item-hoverlinks">Official Bio</NavLink> </li>
                                <li><NavLink to="/jaweb/testimony" exact activeClassName="active" className="sub-item-hoverlinks">Success stories</NavLink> </li>
                            </ul> */}
                            {/* code for hover dropdown eneds here */}
                            {/* <div className={dropdown ? "sub-item active" : "sub-item"}>
                                <ul>
                                    <li><NavLink to="/jaweb/officialbio" exact activeClassName="active" className="sub-item-navlinks" onClick={handleDropdown , handleClick}>Official Bio</NavLink> </li>
                                    <li><NavLink to="/jaweb/testimony" exact activeClassName="active" className="sub-item-navlinks"onClick={handleDropdown , handleClick}>Success stories</NavLink> </li>
                                </ul>
                            </div> */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/blogs" activeClassName="active" className="nav-links" onClick={handleClick}>Read|Listen|Watch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/event" activeClassName="active" className="nav-links" onClick={handleClick}>Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/speaking_request" activeClassName="active" className="nav-links" onClick={handleClick}>Speaking</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/podcast" activeClassName="active" className="nav-links" onClick={handleClick}>Podcast</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop"activeClassName="active" className="nav-links" onClick={handleClick}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/contact"activeClassName="active" className="nav-links" onClick={handleClick}>Contact</NavLink>
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                         {click === true ? <div> 
                           <span className=""  onClick={handleClick} > <FiXCircle />   </span>
                            </div> : <div> 
                                <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
