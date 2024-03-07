import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks";

import { selectCurrentUserEmail } from "../auth/authSelectors";
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

import {
  Menu as MenuIcon,
  AccountCircle as UserIcon,
} from "@mui/icons-material";

import CATEGORIES from "../../misc/constants/CATEGORIES";
import USER_MENU_OPTIONS from "../../misc/constants/USER_MENU_OPTIONS";

const HamburgerMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const isLoggedIn = Boolean(useAppSelector(selectCurrentUserEmail));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pages = CATEGORIES.map(({ id, name: categoryName }) => {
    return { id, name: categoryName[0].toUpperCase() + categoryName.slice(1) };
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    action?: () => any
  ) => {
    if (event.currentTarget.getAttribute("data-path")) {
      navigate(event.currentTarget.getAttribute("data-path") as string);
    }
    if (action) {
      dispatch(action());
    }
    handleCloseNavMenu();
  };

  const userMenuContent = isLoggedIn ? (
    USER_MENU_OPTIONS.map(({ id, path, name, icon: IconComponent, action }) => (
      <MenuItem
        key={`user-menu-option-${id}`}
        onClick={(e) => handleMenuItemClick(e, action)}
        data-path={path}
      >
        <ListItemIcon>
          <IconComponent />
        </ListItemIcon>
        <ListItemText>{name}</ListItemText>
      </MenuItem>
    ))
  ) : (
    <MenuItem
      key={`user-menu-option-1`}
      onClick={handleMenuItemClick}
      data-path={`/login`}
    >
      <ListItemIcon>
        <UserIcon />
      </ListItemIcon>
      <ListItemText>Login</ListItemText>
    </MenuItem>
  );

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
        <MenuList dense>{userMenuContent}</MenuList>
      </Menu>
    </Box>
  );
};

export default HamburgerMenu;
