import { useCallback, useContext, ReactElement } from "react";

import ThemeContext, { ThemeModes } from "../../../theme/ThemeContext";

import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import NavToolTip from "./NavToolTip";

const ThemeToggleButton = (): ReactElement => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggleButton must be used within a ThemeProvider");
  }

  const { mode, setMode } = themeContext;

  const themeButtonConfigs = {
    light: {
      icon: LightModeIcon,
      title: "Switch to Dark Mode",
      hoverColor: "blue",
    },
    dark: {
      icon: DarkModeOutlinedIcon,
      title: "Switch to Light Mode",
      hoverColor: "yellow",
    },
  };

  const otherTheme = (mode === "light" ? "dark" : "light") as ThemeModes;

  const ThemeIcon = themeButtonConfigs[mode].icon;
  const OtherThemeIcon = themeButtonConfigs[otherTheme].icon;

  const handleClick = useCallback(
    () => setMode(otherTheme),
    [setMode, otherTheme]
  );

  return (
    <NavToolTip title={themeButtonConfigs[mode].title}>
      <IconButton
        aria-label={themeButtonConfigs[mode].title}
        sx={{
          mr: 3,
          color: "inherit",
          "&:hover": {
            color: themeButtonConfigs[mode].hoverColor,

            "& .theme-icon": {
              display: "none",
            },
            "& .other-theme-icon": {
              display: "block",
            },
          },
        }}
        onClick={handleClick}
      >
        <ThemeIcon className="theme-icon" sx={{ display: "block" }} />
        <OtherThemeIcon className="other-theme-icon" sx={{ display: "none" }} />
      </IconButton>
    </NavToolTip>
  );
};

export default ThemeToggleButton;
