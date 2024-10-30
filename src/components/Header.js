import React from 'react';
import BannerImage from '../asset/header.webp';
function Header({ userData }) {
  return (
    <header className="header">
      <div className="hero-section">
        <img src={BannerImage} alt="Header Banner" className="header-image" />
        <h1>The Grand Divisions of Life ehehehe</h1>
        <p>Explore The Four Key Phases That Influence Your Life’s Journey</p>
      </div>
      <div className='second-hero'>
       <div className="text-section">
        <p className='strong bold'>
          Welcome back {userData.name}!
        </p>
        <p>
          In our previous conversation, we explored your Marga Dharma Number.</p><p className='bold'>
          Now, let’s delve deeper into the chakra energies that influence you most throughout your life:
        </p>
      </div>
      <div className="video-section">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/0Nk-p2GeHu4"
          title="Video title"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='video'
        ></iframe>
      </div>
    
      </div>
       </header>
  );
}

export default Header;
