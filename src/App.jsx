
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material";
import Handshake from "@mui/icons-material/Handshake";

import { getAllData } from "./util/index";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./routers/ProtectedRoutes";

import Home from "./Pages/Home";
import About from "./pages/About";
import Search from "./components/Search";
import BookNow from "./Pages/BookNow";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUp from "./components/authentication/Signup"; // Check if this is different from the other Signup
import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import NotFound from "./pages/NotFound";

import "./App.css";

const URL = "http://localhost:8000/api/v1/";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
    })();

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                
              
                  <Home />
                
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-alt" element={<SignUp />} /> {/* if needed */}
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/hotels/:hotelId" element={<HotelDetailsPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/book now" element={<BookNow />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

