import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Forgot from "./Components/Authentication/ForgotPassword";
import ResetPassword from "./Components/Authentication/ResetPassword";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProtectedRoutes from "./routers/ProtectedRoutes";

import Home from "./Pages/Home";
import About from "./Pages/About";
import BookNow from "./Pages/BookNow";
import HotelsPage from "./Pages/HotelsPage";
import HotelDetailsPage from "./Pages/HotelDetailsPage";
import NotFound from "./Pages/NotFound";
import BookingCalendarPage from "./Pages/BookingCalendarPage";

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
            <Route path="book-now" element={<BookNow />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="calendar" element={<BookingCalendarPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
            <Route path="forgotpassword" element={<Forgot />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
