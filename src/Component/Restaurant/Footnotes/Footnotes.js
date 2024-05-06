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

function Footnotes() {
  return (
    <div className="main-container">
      <div className="grid-container">
        <CardFootnotes className="card--vertical">
          <CardImageFootnotes src="https://images.pexels.com/photos/920968/pexels-photo-920968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
          
          <CardContentFootnotes className="padding-medium">
            <h1> Clock Tower </h1>
          </CardContentFootnotes>
        </CardFootnotes>
        <CardFootnotes className="card--horizontal">
          <div className="card__side-by-side">
            <CardImageFootnotes src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
            <CardContentFootnotes>
              <h3>Lorem ipsum</h3>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
            </CardContentFootnotes>
          </div>
        </CardFootnotes>
        <CardFootnotes className="card--vertical">
          <CardImageFootnotes src="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </CardFootnotes>
        <CardFootnotes>
          <CardContentFootnotes>
            <p><em>We wander for distraction, but we travel for fulfilment.</em></p>
            <p>— Hilaire Belloc</p>
          </CardContentFootnotes>
        </CardFootnotes>
        <CardImageFootnotes src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        <CardFootnotes>
          <CardImageFootnotes src="https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </CardFootnotes>
        <CardFootnotes>
          <CardImageFootnotes src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </CardFootnotes>
        
      </div>
    </div>
  );
}

export default Footnotes;
