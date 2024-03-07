import { ReactElement, useState, ChangeEvent } from "react";

import { IconButton } from "@mui/material";
import type { ThemeModes } from "../../../theme/ThemeContextProvider";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import NavToolTip from "./NavToolTip";

const ColorThemeToggleButton = (): ReactElement => {
  const [theme, setTheme] = useState<ThemeModes>("light");

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

  const otherTheme = theme === "light" ? "dark" : "light";

  const ThemeIcon = themeButtonConfigs[theme].icon;

  const handleClick = () => setTheme(otherTheme);
  return (
    <NavToolTip title={themeButtonConfigs[theme].title}>
      <IconButton sx={{ mr: 3, color: "inherit" }} onClick={handleClick}>
        <ThemeIcon />
      </IconButton>
    </NavToolTip>
  );
};

export default ColorThemeToggleButton;
