import React from 'react';
import './Navbar.css';
import image_logo from "./logo.webp";
import image_profile from "./Profile.jpeg";
import { Link ,useNavigate} from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const handleshowprofile = () => {
        navigate("/ProfileComponents");
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logoImage-Navbar" src={image_logo} alt="" />
            </div>
            <div className="links">
                <Link className='Navbar-link' to='/'>HomePage</Link>
                <Link className='Navbar-link' to='/places'>places</Link>
                <Link className='Navbar-link' to='/Guidesearch'>Guide</Link>
                <Link className='Navbar-link' to='/KnowTheUnknown'>KnowTheUnknown</Link>
            </div>
            <div >
                <button className="profile" onClick={handleshowprofile}>
                    <img className="profileImage-Navbar" src={image_profile} onClick={handleshowprofile} />
                </button>
            </div>

        </nav>
    );
}
export default Navbar;
