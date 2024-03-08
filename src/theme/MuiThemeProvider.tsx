import React, { useEffect, useState, ReactNode } from "react";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import ThemeContext from "./ThemeContext";
import { useCheckForThemePreference } from "../hooks";

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

const ThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const { themePreference: userThemePreference, isLoading } =
    useCheckForThemePreference();

  const [theme, setTheme] = useState<ThemeModes>("light");

  useEffect(() => {
    if (!isLoading) {
      setTheme(userThemePreference || "light");
    }
  }, [userThemePreference, isLoading]);

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
