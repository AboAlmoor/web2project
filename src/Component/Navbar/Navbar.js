import React from 'react';
import './Navbar.css';
import image_logo from "./logo.webp";
import image_profile from "./Profile.jpeg";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logoImage-Navbar" src={image_logo} alt="" />
            </div>
            <div className="links">

                {/* <Link to='/places'>places</Link>
            <Link to='/Home Page'>Home Page</Link>
            <Link to='/Guide'>Guide</Link> */}

                <a href="/#" className="Navbar-link">HomePage</a>
                <a href="/#" className="Navbar-link">Places</a>
                
                <Link className='Navbar-link' to='/Guidesearch'>Guide</Link>
                <Link className='Navbar-link' to='/KnowTheUnknown'>KnowTheUnknown</Link>
            </div>
            <div className="profile">
                <img className="profileImage-Navbar" src={image_profile} alt="" />
            </div>
        </nav>
    );
}
export default Navbar;
