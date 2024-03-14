import React, { useEffect, useState, ReactNode, useMemo } from "react";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import ThemeContext from "./ThemeContext";

import type { ThemeModes } from "./ThemeContext";

type MuiThemeProviderProps = {
  children?: ReactNode | ReactNode[];
};

const ThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  const storage = typeof window !== "undefined" ? localStorage.theme : "light";

  const [storageTheme, setStorageTheme] = useState<ThemeModes>(storage);

  const [mode, setMode] = useState<ThemeModes>(storage || "light");

  const muiTheme = useMemo(() => {
    const selectedTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

    return {
      [mode]: selectedTheme,
    };
  }, [mode]);

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
    setStorageTheme(mode);
  }, [muiTheme, storageTheme, mode]);

  return (
    <MuiThemeProvider theme={muiTheme[mode]}>
      <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
