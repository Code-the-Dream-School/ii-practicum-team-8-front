import React, { useState, useEffect } from 'react';
import Video from '../assets/videos1.mp4';
import Destination from '../components/Destination';
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/signup');
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const loc = useLocation();
  const data = loc.state;

  useEffect(() => {
    //Set the logged in status
    if (data) {
      setIsLoggedIn(data.isLoggedIn);
      setToken(data.token);
      setName(data.name);
    } else {
      setIsLoggedIn(false);
    }
  }, [data]);

  return (
    <>
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
          <p className="hero-tagline">
            YOUR GATEWAY TO UNFORGETTABLE JOURNEYS.
          </p>
          <h1 className="hero-title">GOOD WAY</h1>
          {!isLoggedIn && (
            <button onClick={handleGetStarted} className="get-started">
              Get Started
            </button>
          )}
        </div>
      </div>
      <Destination />
    </>
  );
};

export default Home;
