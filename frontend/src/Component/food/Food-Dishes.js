import React from 'react';
import './Food-Dishes.css';
import Navbar from "../Navbar/Navbar";

function FoodDishes() {
    return (
        <div>
            <Navbar />
            <div className="container-food">
                <main className="main-content-food">
                    <section className="section-resturant">
                        <div className="resturant-image-container">
                            <img src= "" alt="City View" className="resturant-image" />
                            <div className="resturant-name-location-Evaluation">
                                <div className="resturant-info">
                                    <div className="resturant-card">
                                        <h2 className='header2-food'>Name Restaurant</h2>
                                    </div>
                                    <div className="resturant-card">
                                        <h2 className='header2-food'>Evaluation</h2>
                                    </div>
                                    <div className="resturant-card">
                                        <h2 className='header2-food'>Location</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="food-section">
                        <div className="food-resturant-item">
                            <img src="" alt="Food 1" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 2" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 3" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 4" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 5" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 6" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 7" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                        <div className="food-resturant-item">
                            <img src="" alt="Food 8" className="image-food-name" />
                            <h3 className="header3-food">food name</h3>
                            <p className="paragraph-food">Yantero shounak eniat ode w.</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
export default FoodDishes;