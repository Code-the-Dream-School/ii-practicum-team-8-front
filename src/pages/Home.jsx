import Video from '../assets/videos1.mp4';
import Destination from '../components/Destination';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/signup');
  };

  const { user } = useAuth();

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
      </div>

      <div className="hero">
        {user ? (
          <>
            <h1 className="hero-title">WELCOME TO TRIPON</h1>
            <h2 className="hero-tagline">
              TripOn is a modern hotel booking application designed to simplify
              travel planning.
            </h2>
          </>
        ) : (
          <>
            <p className="hero-tagline">
              YOUR GATEWAY TO UNFORGETTABLE JOURNEYS.
            </p>
            <h1 className="hero-title">GOOD WAY</h1>
            <button onClick={handleGetStarted} className="get-started">
              Get Started
            </button>
          </>
        )}
      </div>

      <Destination />
    </>
  );
};

export default Home;
