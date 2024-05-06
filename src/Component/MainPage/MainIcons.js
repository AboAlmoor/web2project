import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './MainIcons.css';
import unknown from './nonUnknown1.png'
import visit from './place to visit2.png'
import guide from './guide2.png'
import { Link } from 'react-router-dom';



function MainIcons() {
  return (

    <div className='bgi shadow'>
      <Row>

        <Col>
          <Link to='/KnowTheUnknown' className="icon-link">
            <img src={unknown} alt="Non-unknown" className="rounded-circle image-style" />
            <div className="text-under-image">Non-known</div>
          </Link>
        </Col>
        <Col>
          <Link to="/Places" className="icon-link">
            <img src={visit} alt="Place to Visit" className="rounded-circle image-style" />
            <div className="text-under-image">Place to Visit</div>
          </Link>
        </Col>
        <Col>
          <Link to="/Guidesearch" className="icon-link">
            <img src={guide} alt="Guide" className="rounded-circle image-style" />
            <div className="text-under-image">Guide</div>
          </Link>
        </Col>
      </Row>

    </div>

  )
}

export default MainIcons