import { lazy, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme, CssBaseline, Switch } from "@mui/material";
import ProtectedRoutes from "./routers/ProtectedRoutes";

import MainLayout from "./layouts/MainLayout";

import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Forgot from "./components/Authentication/ForgotPassword";
import ResetPassword from "./components/Authentication/ResetPassword";

import Home from "./pages/Home";
import About from "./pages/About";
import HotelsPage from "./pages/HotelsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import NotFound from "./pages/NotFound";
import { blue } from "@mui/material/colors";

const BookNow = lazy(() => import("./pages/BookNow"));
const BookingCalendarPage = lazy(() => import("./pages/BookingCalendarPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "forgotpassword", element: <Forgot /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "hotels", element: <HotelsPage /> },
      { path: "hotels/:hotelId", element: <HotelDetailsPage /> },
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "book-now", element: <BookNow /> },
          { path: "calendar", element: <BookingCalendarPage /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [mode, setMode] = useState("false");
  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
    components: {
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            backgroundColor: "fff",
          },
        },
      },
    },
  });
  const toggleColorMode = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Box sx={{ width: "100%:", backgroundColor: " #1378b7cb" }}>
          <Switch
            checked={mode}
            onChange={toggleColorMode}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
