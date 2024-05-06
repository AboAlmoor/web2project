import React from 'react';
import CardRes from './Card_restaurants.js';
import './Card_group.css'

function DataCard() {
  return (
    <>
      <div className="Name_of_citiy" >
        <h1 id="ramallah" >Ramallah</h1>
      </div>

      <div className="card_rees">
        <CardRes />
        <CardRes />
        <CardRes />
        <CardRes />
        <CardRes />
        <CardRes />
        <CardRes />
        <CardRes />
      </div>
    </>
  );
}

export default DataCard;
