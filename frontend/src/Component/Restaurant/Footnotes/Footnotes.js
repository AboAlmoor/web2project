import React from 'react';
import './Footnotes.css';

function CardFootnotes({ children }) {
  return (
    <div className="card_footnotes">
      {children}
    </div>
  );
}

function CardContentFootnotes({ children }) {
  return (
    <div className="card__content">
      {children}
    </div>
  );
}

function CardImageFootnotes({ src, alt }) {
  return (
    <div className="card__image">
      <img src={src} alt={alt} />
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
        <p><em>We wander for distraction, but we travel for fulfilment.</em></p>
            <p>— Hilaire Belloc</p>
        </CardFootnotes>
        <CardImageFootnotes src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        <CardFootnotes>
          <CardImageFootnotes src="https://images.pexels.com/photos/269923/pexels-photo-269923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </CardFootnotes>
        <CardFootnotes>
          <CardImageFootnotes src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
        </CardFootnotes>
        
        <CardImageFootnotes src="https://buffer-media-uploads.s3.amazonaws.com/663f11ad81a7f4066c0e8e02/664ce282318b89d38c0d8ea2/2aba95ac896ae303a1da411c9f0999e7.original.jpg" alt="" />
        <CardImageFootnotes src="https://buffer-media-uploads.s3.amazonaws.com/663f11ad81a7f4066c0e8e02/664ce28232843dfd950dda75/d1d8a3d7a78d9135c59067c01713fc57.original.jpg" alt="" />
        <CardImageFootnotes src="https://buffer-media-uploads.s3.amazonaws.com/663f11ad81a7f4066c0e8e02/664ce282ef971892740a4252/6161d8aa38860d8722a4d73c1b2ff8c7.original.jpg" alt="" />

        
      </div>
    </div>
  );
}

export default Footnotes;