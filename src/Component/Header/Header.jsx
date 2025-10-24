import React from 'react';
import './Header.css'
import playstore from '../../pic/playstore.png'
import appstore from '../../pic/appstore.png'

const Header = () => {
    return (
        <section className="hero-section">
            <h1 className="hero-title">
                We Build <br /> <span className="gradient-text">Productive</span> Apps
            </h1>

            <p className="hero-subtitle">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler,smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className="store-buttons">
                <button className="store-btn">
                    <img src={playstore}  alt="Google Play" />
                    Google Play
                </button>
                <button className="store-btn">
                    <img src={appstore}  alt="App Store" />
                    App Store
                </button>
            </div>
        </section>
    );
};

export default Header;