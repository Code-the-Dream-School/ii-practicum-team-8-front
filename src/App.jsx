import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/authentication/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoutes from "./routers/ProtectedRoutes";
import Home from "./Pages/Home";
import About from "./pages/About";
import Search from "./components/Search";
import BookNow from "./Pages/BookNow";

import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<ProtectedRoutes />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<Search />} />
            <Route path="booknow" element={<BookNow />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
