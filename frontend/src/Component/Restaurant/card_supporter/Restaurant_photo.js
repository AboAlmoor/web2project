import React from 'react';
import './Restaurant_photo.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MideCard({Restaurant}) {
  return (
<>
    <div className="center">
    <div className="article-card " id="midCard_s">
        <div className="content">
        <p className="date">Jan 1, 2022</p>
        <p className="title">{Restaurant.title}</p>
        </div>
        <img src={Restaurant.imageUrl} alt="article-cover" />
    </div>
    </div>
</>
  );
}

export default MideCard;



