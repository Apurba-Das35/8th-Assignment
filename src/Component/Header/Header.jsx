import React from 'react';
import './Header.css'
import playstore from '../../pic/playstore.png'
import appstore from '../../pic/appstore.png'
import heroImg from '../../pic/hero.png'

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
                    <img src={playstore} alt="Google Play" />
                    Google Play
                </button>
                <button className="store-btn">
                    <img src={appstore} alt="App Store" />
                    App Store
                </button>
            </div>

            <div>
                <img className='heroImg' src={heroImg} alt="hero.png" />
            </div>


            {/* review section stared */}
            <div className='reviewBg'>
                <h1 className='reviewTitle pt-10'>Trusted by Millions, Built for You</h1>

                <div className='review pt-4'>
                    <div>
                        <p className='reviewTextP'>Total Downloads</p>
                        <h1 className='reviewText'>29.6M</h1>
                        <p className='reviewTextP'>21% more than last month</p>
                    </div>

                    <div>
                        <p className='reviewTextP'>Total Reviews</p>
                        <h1 className='reviewText'>906K</h1>
                        <p className='reviewTextP'>46% more than last month</p>
                    </div>

                    <div>
                        <p className='reviewTextP'>Active Apps</p>
                        <h1 className='reviewText'>132+</h1>
                        <p className='reviewTextP'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Header;