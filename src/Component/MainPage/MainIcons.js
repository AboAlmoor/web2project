import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button,Row, Col } from 'react-bootstrap';
import './MainIcons.css';
import unknown from './nonUnknown1.png'
import visit from './place to visit2.png'
import guide from './guide2.png'



function MainIcons() {
  return (

    <div  className='bgi shadow'>
         <Row>
          
            <Col>
              <a href="#non-unknown" className="icon-link">
                <img src={unknown} alt="Non-unknown" className="rounded-circle image-style" />
                <div className="text-under-image">Non-known</div>
              </a>
            </Col>
            <Col>
              <a href="#place-to-visit" className="icon-link">
                <img src={visit} alt="Place to Visit" className="rounded-circle image-style" />
                <div className="text-under-image">Place to Visit</div>
              </a>
            </Col>
            <Col>
              <a href="#guide" className="icon-link">
                <img src={guide} alt="Guide" className="rounded-circle image-style" />
                <div className="text-under-image">Guide</div>
              </a>
            </Col>
        </Row>
      
    </div>

  )
}

export default MainIcons