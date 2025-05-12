import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../App.css";

const MainLayout = () => {
  return (
    <div className="app">
      {/* <Switch
        checked={mode}
        onChange={toggleColorMode}
        inputProps={{ "aria-label": "controlled" }}
      /> */}
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
