import React from 'react';
import './Footnotes.css';

function CardFootnotes(props) {
  return (
    <div className={`card_footnotes ${props.className}`}>
      {props.children}
    </div>
  );
}

function CardContentFootnotes(props) {
  return (
    <div className={`card__content ${props.className}`}>
      {props.children}
    </div>
  );
}

function CardImageFootnotes(props) {
  return (
    <div className={`card__image ${props.className}`}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

function Footnotes(Restaurant) {
  return (
    <div className="main-container">
      <div className="grid-container">
        <CardFootnotes className="card--vertical">
          <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
          
          <CardContentFootnotes className="padding-medium">
            <h1> {Restaurant.title} </h1>
          </CardContentFootnotes>
        </CardFootnotes>
        <CardFootnotes className="card--horizontal">
          <div className="card__side-by-side">
            <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
          </div>
        </CardFootnotes>
        <CardFootnotes className="card--vertical">
          <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
        </CardFootnotes>
        <CardFootnotes>
            <p><em>{Restaurant.subtitle}</em></p>
            <p>— Hilaire Belloc</p>
        </CardFootnotes>
        <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
        <CardFootnotes>
          <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
        </CardFootnotes>
        <CardFootnotes>
          <CardImageFootnotes src={Restaurant.imageUrl} alt="" />
        </CardFootnotes>
        
      </div>
    </div>
  );
}

export default Footnotes;
