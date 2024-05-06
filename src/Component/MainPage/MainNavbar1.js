import React from 'react';
import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css';
import Alaqsa from './Alaqsa.png'
import logo from './logo.png'
import { BsPersonCircle } from "react-icons/bs";

function MainNavbar1() {
  return (
   <div className='' 
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Alaqsa})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "500px",
    }}>
        <Col>
            <Row>
                <div className='navbar'>
                    <Navbar bg="light" expand="lg" className="shadow" >
                        <Container>
                            <Navbar.Brand href="#home">
                          
                            <Navbar.Brand href="#home">
                              <img src={logo} alt="Logo" className="logo" />
                            </Navbar.Brand>

                            
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#products"><div className='nav_pages'> Products</div></Nav.Link>
                                    <Nav.Link href="#marketplace"><div className='nav_pages'>Marketplace</div></Nav.Link>
                                    <Nav.Link href="#partners"><div className='nav_pages'>Partners</div></Nav.Link>
                                    <Nav.Link href="#pricing"><div className='nav_pages'>Pricing</div></Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#signin"> <div className='sign_in'>Sign in</div></Nav.Link>
                                    <Button variant="outline-primary" href="#signup">Sign up</Button>
                                    <Nav.Item className="ml-auto profile-nav-item">
                                        <button className="profile-button" onClick={() => {/* handle click event */}}>
                                            <BsPersonCircle className='profile-logo' style={{ color: 'white' }} />
                                        </button>
                                    </Nav.Item> 
                                </Nav>
                            </Navbar.Collapse>

                            

                        </Container>
                    </Navbar>
                </div>
            </Row>
            <Row>

                <div className='mainpage-header'>
                     <h2>Secrets of Cities-Palestine</h2>
                </div>
            
            </Row>
            <Row>
                <div className='search mt-20'>
                    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                    <div className="search-container">
                        <input type="text" name="search" placeholder="Search for a name of a city..." className="search-input" />
                        <a href="#" className="search-btn">
                        <i className="fas fa-search" />      
                        </a>
                    </div>
                </div>
            </Row>

        </Col>
     </div>
  );
}

export default MainNavbar1;
