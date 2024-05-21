import './KnowTheUnknown.css';
import BackGround_image from './Jericho-Palestine.jpg';
import Navbar from "../Navbar/Navbar"
import { useState, useEffect } from "react";
import axios from 'axios';

function KnownTheUnknown() {
    const [unknownData, setUnknownData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:5000/getUnknown");
                setUnknownData(result.data);
            } catch (error) {
                console.error("Can't fetch the data:", error);
            }
        };

        fetchData();
    }, []);

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
                            {unknownData.map((unknownPlace, index) => (
                                <div className="carousel-item" key={index}>
                                    <img className="carousel-item__img" src={unknownPlace.imageUrl} alt="places" />
                                    <div className="carousel-item__details">
                                        <div className="controls">
                                            <span className="fas fa-play-circle"></span>
                                            <span className="fas fa-plus-circle"></span>
                                        </div>
                                        <h5 className="carousel-item__details--title">{unknownPlace.title}</h5>
                                        <h6 className="carousel-item__details--subtitle">{unknownPlace.subtitle}</h6>
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
export default KnownTheUnknown;
