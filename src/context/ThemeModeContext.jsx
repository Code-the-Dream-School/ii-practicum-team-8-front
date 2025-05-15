import { createContext, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useStorageState from "../hooks/useStorageState";

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useStorageState("isDarkTheme", false);
  const toggleColorMode = () => setDarkMode((prev) => !prev);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },

    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", // label text color
          }),
        },
      },
    },
  });

  return (
    <ThemeModeContext.Provider value={{ darkMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
