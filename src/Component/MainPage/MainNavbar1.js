import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css';
import Alaqsa from './Alaqsa.png'
import logo from './logo.png'
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';



function MainNavbar1() {

    const navigate = useNavigate();
    const handleshowprofile = () => {
        navigate("/ProfileComponents");
    };
    return (
        <div className=''
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Alaqsa})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: "500px",
            }}>



            <div className=''>
                <div className='navbar'>
                    <Navbar bg="light" expand="lg" className="shadow" >
                        <Container>
                            <Navbar.Brand href="#home" >

                                <div className="main_logo">

                                    <Navbar.Brand href="#home">
                                        <img src={logo} alt="Logo" className='rounded-circle' />
                                    </Navbar.Brand>

                                </div>

                            </Navbar.Brand>
                            <div className='HP-navbar'>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Link to="/LogIn"> <div className='sign-in'>Sign in</div></Link>
                                        <Link to="/CreateAcount">
                                            <Button className="sign_up" variant="outline-primary" >Sign up</Button>
                                        </Link>
                                        <Nav.Item className="ml-auto profile-nav-item">
                                            <button className="profile-button" onClick={handleshowprofile}>
                                                <BsPersonCircle className='profile-logo' style={{ color: 'white' }} />
                                            </button>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>

                            </div>

                        </Container>
                    </Navbar>
                </div>
            </div>



            <div className='mainpage-header1'>
                <h2>Secrets of Cities-Palestine</h2>
            </div>



            <div className='main-page-search mt-20'>

                <div className="search-container">
                    <input type="text" name="search" placeholder="Search for name of a city..." className="search-input" />
                    <a href="#/" alt=" " className="search-btn">
                        <i className="fas fa-search" />
                    </a>
                </div>
            </div>



        </div>
    );
}

export default MainNavbar1;