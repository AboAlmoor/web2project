import React from 'react';
import './Card_restaurants.css'


function CardRes({ Restaurant }) {
  return (
    <div className="card_res_menu">
      <img src={Restaurant.imageUrl} alt=" / "/>
      <div className="card__content">
        <p className="card__title">{Restaurant.title}</p>
        <p className="card__description">{Restaurant.suptitle}</p>
        <button className="card__button">Click Me</button>
      </div>
    </div>
  );
}

export default CardRes;
