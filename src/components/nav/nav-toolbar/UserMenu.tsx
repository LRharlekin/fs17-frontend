import React /* , { useState } */ from "react";

// import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useAppSelector } from "../../../hooks";

import {
  selectCurrentUserEmail,
  selectCurrentUserRole,
} from "../../auth/authSelectors";

import USER_MENU_OPTIONS from "../../../misc/constants/USER_MENU_OPTIONS";
import type { UserMenuOptionType } from "../../../misc/constants/USER_MENU_OPTIONS";
// import logout from "../auth/authSlice";

type UserMenuProps = {
  anchorEl: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleUserMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
};

let menuOptions: UserMenuOptionType[] = [];
menuOptions = USER_MENU_OPTIONS;

const UserMenu = ({
  anchorEl,
  handleCloseUserMenu,
  handleUserMenuClick,
}: UserMenuProps) => {
  return (
    <Menu
      sx={{ mt: "45px", display: { xs: "none", md: "block" } }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={handleCloseUserMenu}
    >
      <MenuList>
        {menuOptions.map(({ id, path, name, icon: IconComponent }) => (
          <MenuItem
            key={`user-menu-option-${id}`}
            onClick={handleUserMenuClick}
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
  );
};

export default UserMenu;
