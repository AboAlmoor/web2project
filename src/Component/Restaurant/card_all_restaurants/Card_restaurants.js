import React from 'react';
import './Card_restaurants.css'


function CardRes() {
  return (
    <>
      <div className="card_res_menu">
          <img src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt=" " />
          <div className="card__content">
              <p className="card__title">Card Title</p>
              <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <button className="card__button">Click Me</button>
          </div>
      </div>
    </>
  );
}

export default CardRes;
