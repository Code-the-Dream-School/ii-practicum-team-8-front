import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import ProtectedRoutes from './routers/ProtectedRoutes';

import MainLayout from './layouts/MainLayout';

import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Forgot from './components/Authentication/ForgotPassword';
import ResetPassword from './components/Authentication/ResetPassword';

import Home from './pages/Home';
import About from './pages/About';
import HotelsPage from './pages/HotelsPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import NotFound from './pages/NotFound';

const BookNow = lazy(() => import('./pages/BookNow'));
const BookingCalendarPage = lazy(() => import('./pages/BookingCalendarPage'));
import Travelplan from './Pages/Travelplan';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'travelplan', element: <Travelplan />},
      { path: 'signup', element: <SignUp /> },
      { path: 'login', element: <Login /> },
      { path: 'forgotpassword', element: <Forgot /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'hotels', element: <HotelsPage /> },
      { path: 'hotels/:hotelId', element: <HotelDetailsPage /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: 'book-now', element: <BookNow /> },
          { path: 'calendar', element: <BookingCalendarPage /> },
        ],
      },
      { path: '*', element: <NotFound /> }
    ]
  }
]);





function App() {
  
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
