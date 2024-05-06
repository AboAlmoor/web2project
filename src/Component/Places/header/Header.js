import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <header id="header_places">
                    <div className="overlay">
                        <h1 className="titel_h1">Simply The Best</h1>
                        <h3 className="titel_h3">Reasons for Choosing US</h3>
                        <p className="parg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                        <br />
                        <button className="Bt_2">READ MORE</button>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
