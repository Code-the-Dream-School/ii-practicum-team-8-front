import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Authentication/Login';
import Signup from './components/Authentication/SignUp';
import Forgot from './components/Authentication/ForgotPassword';
import Navbar from './components/main/Navbar';
import Footer from './components/main/Footer';

import ProtectedRoutes from './routers/ProtectedRoutes';

import Home from './pages/Home';
import About from './pages/About';
import BookNow from './pages/BookNow';
import HotelsPage from './pages/HotelsPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import NotFound from './pages/NotFound';
import BookingCalendarPage from './pages/BookingCalendarPage';

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />} />
            <Route path="about" element={<About />} />
            <Route path="book-now" element={<BookNow />} />
            <Route path="signup" element={<Signup />} />
            <Route path="calendar" element={<BookingCalendarPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="hotels/:hotelId" element={<HotelDetailsPage />} />
            <Route path="login" element={<Login />} />
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
