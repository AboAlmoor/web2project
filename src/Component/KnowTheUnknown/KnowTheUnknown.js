import React from 'react';
import './KnowTheUnknown.css';
import BackGround_image from './Jericho-Palestine.jpg';

import Navbar from "../Navbar/Navbar";
// import { Link } from 'react-router-dom';


const carouselItems = [
    {
        imageUrl: "https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Descriptive Title 1",
        subtitle: "Date and Duration 1"
    },
    {
        imageUrl: "https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Descriptive Title 2",
        subtitle: "Date and Duration 2"
    },
    {
        imageUrl: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Descriptive Title 3",
        subtitle: "Date and Duration 3"
    },
    {
        imageUrl: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Descriptive Title 4",
        subtitle: "Date and Duration 4"
    },
    {
        imageUrl: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Descriptive Title 5",
        subtitle: "Date and Duration 5"
    },
    {
        imageUrl: "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Descriptive Title 6",
        subtitle: "Date and Duration 6"
    },
    {
        imageUrl: "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        title: "Descriptive Title 7",
        subtitle: "Date and Duration 7"
    },
];

function ImageCarousel() {
    return (
        <div>
            <Navbar />
            <div className="MainContainerKnow">
                <div className="containerKnowTheUnKnown">
                    <h1 className="KnowTheUnKnownHeader1">Known The Unknown</h1>
                    <img className="largeImageKnowTheUnKnown" src={BackGround_image} alt="" />

                    <section className="CarouselKnowTheUnKnown">
                        <h2 className="categories__title">Our Secret Places</h2>
                        <div className="carouselContainerKnowTheUnKnown">
                            {carouselItems.map((item, index) => (
                                <div className="carousel-item" key={index}>
                                    <img className="carousel-item__img" src={item.imageUrl} alt="people" />
                                    <div className="carousel-item__details">
                                        <div className="controls">
                                            <span className="fas fa-play-circle"></span>
                                            <span className="fas fa-plus-circle"></span>
                                        </div>
                                        <h5 className="carousel-item__details--title">{item.title}</h5>
                                        <h6 className="carousel-item__details--subtitle">{item.subtitle}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}
export default ImageCarousel;