import { useCallback, useContext, ReactElement } from "react";

import { IconButton } from "@mui/material";
import type { ThemeModes } from "../../../theme/ThemeContext";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import ThemeContext from "../../../theme/ThemeContext";
import NavToolTip from "./NavToolTip";

const ThemeToggleButton = (): ReactElement => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  const { theme, setTheme } = themeContext;

  const themeButtonConfigs = {
    light: {
      icon: LightModeIcon,
      title: "Switch to Dark Mode",
      hoverColor: "yellow",
    },
    dark: {
      icon: DarkModeOutlinedIcon,
      title: "Switch to Light Mode",
      hoverColor: "blue",
    },
  };

  const otherTheme = (theme === "light" ? "dark" : "light") as ThemeModes;

  const ThemeIcon = themeButtonConfigs[theme].icon;

  const handleClick = useCallback(
    () => setTheme(otherTheme),
    [setTheme, otherTheme]
  );

  return (
    <NavToolTip title={themeButtonConfigs[theme].title}>
      <IconButton
        aria-label={themeButtonConfigs[theme].title}
        sx={{ mr: 3, color: "inherit" }}
        onClick={handleClick}
      >
        <ThemeIcon />
      </IconButton>
    </NavToolTip>
  );
};

export default ThemeToggleButton;
