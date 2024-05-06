import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainFeatures1.css';
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { PiPathFill } from "react-icons/pi";



function MainFeatures1() {
  return (
    <div>
        
        <h1 className='feature-header'>Features:</h1>
      <div className="content">
        <div className="card">
          <div className="icon"><RiTeamLine size={36} /></div>
          <p className="title">Team</p>
          <p className="text">About Team.</p>
        </div>
        <div className="card">
          <div className="icon"><MdOutlineLocalOffer size={36} /></div>
          <p className="title">Offers</p>
          <p className="text">About Offers.</p>
        </div>
        <div className="card">
          <div className="icon"><AiOutlineLike size={36} /></div>
          <p className="title">Most like place to visit</p>
          <p className="text">About most like places to visit.</p>
        </div>
        <div className="card">
          <div className="icon"><GiPayMoney size={36} /></div>
          <p className="title">Booking</p>
          <p className="text">About Booking.</p>
        </div>
        <div className="card">
          <div className="icon"><PiPathFill size={36} /></div>
          <p className="title">Paths</p>
          <p className="text">About pahts.</p>
        </div>
      </div>
    </div>
  );
}

export default MainFeatures1;
