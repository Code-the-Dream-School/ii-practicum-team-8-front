import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const loc = useLocation();
  const data = loc.state;
  const navigate = useNavigate();

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    data.isLoggedIn = null;
    data.token = null;
    navigate("/", { state: [] });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FlightTakeoffIcon fontSize="medium" />
        {!token && (
          <NavLink to="/" className="logo">
            TripOn
          </NavLink>
        )}
        {token && (
          <NavLink to="/" className="logo">
            Welcome {name} to TripOn
          </NavLink>
        )}
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger" aria-label="Menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </label>
      {!token && (
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels" className="nav-link">
              Search Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/travelplan" className="nav-link">
              Travel Plan
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" className="nav-link login-btn">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="nav-link signup-btn">
              Signup
            </NavLink>
          </li>
        </ul>
      )}
      {token && (
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels" className="nav-link">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" className="nav-link">
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/book-now" className="nav-link">
              Book Now!
            </NavLink>
          </li>
          <li>
            <NavLink to="/travel-plans" className="nav-link">
              Travel Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="nav-link login-btn"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
