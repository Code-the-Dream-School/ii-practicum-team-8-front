import React, { useState, useEffect } from "react";
import { getAllData } from "./util/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Search from "./components/Search";
import BookNow from "./Pages/BookNow";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./routers/ProtectedRoutes";
import NotFound from "./pages/NotFound";
import "./App.css";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getAllData } from "./util/index";
import Handshake from "@mui/icons-material/Handshake";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/authentication/Signup";

import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";

const URL = `${import.meta.env.VITE_APP_API_URL}/api/v1`;

const App = () => {
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
    <>
      <Router>
        <div className="app">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<Search />} />
                <Route path="/booknow" element={<BookNow />} />
              </Route>

              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
