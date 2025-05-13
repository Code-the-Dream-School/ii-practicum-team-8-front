import React from 'react';
import { NavLink } from 'react-router-dom';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
          <FlightTakeoffIcon fontSize="medium" />
        <NavLink to="/" className="logo">TripOn</NavLink>
      </div>
      
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger" aria-label='Menu'>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
        <span className='hamburger-line'></span>
      </label>

      <ul className="nav-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li><NavLink to="/hotels" className="nav-link">Search Hotels</NavLink></li>
        <li><NavLink to="/travelplan" className="nav-link">Travel Plan</NavLink></li>
        <li><NavLink to="/calendar" className="nav-link">Calendar</NavLink></li>
        <li><NavLink to="/book-now" className="nav-link">Book Now </NavLink></li>
        <li><NavLink to="/login" className="nav-link login-btn">Login</NavLink></li>
      <li><NavLink to="/signup" className="nav-link signup-btn">Signup</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
