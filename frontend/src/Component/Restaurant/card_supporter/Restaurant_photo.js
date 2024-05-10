import React from 'react';
import './Restaurant_photo.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MideCard() {
  return (
<>
    <div className="center">
    <div className="article-card " id="midCard_s">
        <div className="content">
        <p className="date">Jan 1, 2022</p>
        <p className="title">Article Title Goes Here</p>
        </div>
        <img src="https://images.unsplash.com/photo-1482877346909-048fb6477632?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt="article-cover" />
    </div>
    </div>
</>
  );
}

export default MideCard;



