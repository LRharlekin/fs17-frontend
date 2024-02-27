import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";

import CATEGORIES from "../../misc/constants/CATEGORIES";
import USER_MENU_OPTIONS from "../../misc/constants/USER_MENU_OPTIONS";

const HamburgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const pages = CATEGORIES.map(({ id, name: categoryName }) => {
    return { id, name: categoryName[0].toUpperCase() + categoryName.slice(1) };
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("hamburger menu clicked");
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate(event.currentTarget.getAttribute("data-path") as string);
    handleCloseNavMenu();
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuList dense className="main-navigation">
          {pages.map((page) => (
            <MenuItem
              key={`category-page-${page.id}`}
              onClick={handleMenuItemClick}
              data-path={`/collections/${page.name.toLowerCase()}`}
            >
              <Typography textAlign="center">{page.name}</Typography>
            </MenuItem>
          ))}
        </MenuList>
        <Divider />
        <MenuList dense>
          {USER_MENU_OPTIONS.map(({ id, path, name, icon: IconComponent }) => (
            <MenuItem
              key={`user-menu-option-${id}`}
              onClick={handleMenuItemClick}
              data-path={path}
            >
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
