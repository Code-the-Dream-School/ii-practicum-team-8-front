import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../App.css';

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/' || pathname === '/home' || pathname === '/calendar';
  return (
    <div className="app">
      <Navbar />
      <main className={clsx('main-content', !isHome && 'm-container')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
