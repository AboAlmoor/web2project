import React from 'react';
import CardRes from './Card_restaurants.js';
import './Card_group.css'

function DataCard({restaurantData}) {
  return (
    <>
      <div className="Name_of_citiy" >
        <h1 id="ramallah" >Ramallah</h1>
      </div>

      <div className="card_rees">

      {
      restaurantData.map((Restaurant) => (
        <CardRes key={Restaurant.id} Restaurant={Restaurant} />
      ))
      }

      </div>
    </>
  );
}

export default DataCard;
