import React, { createContext, useEffect, useState, ReactNode } from "react";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import ThemeContext from "./ThemeContext";

import type { ThemeModes } from "./ThemeContext";

type MuiThemeProviderProps = {
  children?: ReactNode | ReactNode[];
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const muiTheme = {
  light: lightTheme,
  dark: darkTheme,
};

const checkLocalStorageForThemePreference = () => {
  const localTheme = window.localStorage.getItem("theme");
  return localTheme ? (localTheme as ThemeModes) : null;
};

const ThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeModes>("light");

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <MuiThemeProvider theme={muiTheme[theme]}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
