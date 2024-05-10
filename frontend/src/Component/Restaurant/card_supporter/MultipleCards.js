import React from 'react';
import CardHover from './Cardfood.js';
import MideCard from './Restaurant_photo.js';
import './MultipleCards.css';

function MultipleCards() {
  return (
    <div className="best_res">

      <div className="Name_of_citiy" >
        <h1 id="ramallah" >Ramallah</h1>
      </div>

      <div className="card_rees11">
        
        <CardHover/>
        <CardHover/>

        <MideCard/>
        
        <CardHover/>
        <CardHover/>


      </div>
    </div>
  );
}

export default MultipleCards;

