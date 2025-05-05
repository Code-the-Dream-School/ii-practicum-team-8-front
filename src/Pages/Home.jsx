import React from 'react';
import Video from '../Assets/videos1.mp4';
import Destination from '../components/main/Destination';

const Home = () => {
  const handleGetStarted = () => {
    alert("Welcome! Let's get started signup!");
  };
  return (
    <div className="home-container">
      <div className="video-container">
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        />
      </div>

      <div className="hero">
        <p className="hero-tagline">YOUR GATEWAY TO UNFORGETTABLE JOURNEYS.</p>
        <h1 className="hero-title">GOOD WAY</h1>
        <button onClick={handleGetStarted} className="get-started">
          Get Started
        </button>
      </div>

      <Destination />
    </div>
  );
};

export default Home;
