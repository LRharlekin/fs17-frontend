import React, { useState } from "react";

import {
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../hooks";

import {
  selectCurrentUserEmail,
  selectCurrentUserRole,
} from "../../redux/slices/authSlice";

import USER_MENU_OPTIONS from "../../misc/constants/USER_MENU_OPTIONS";
import type { UserMenuOptionType } from "../../misc/constants/USER_MENU_OPTIONS";
import logout from "../../redux/slices/authSlice";

type UserMenuProps = {
  anchorEl: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleUserMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
};

// const dynamicMenuItems = USER_MENU_OPTIONS.filter((option) => {
//   if (option.requiresAuth) {
//     return true;
//   }
//   if (option.requiresRole) {
//     return true;
//   }
//   return false;
// });

let menuOptions: UserMenuOptionType[] = [];
// if (USER_MENU_OPTIONS.length > 1) {
//   menuOptions = USER_MENU_OPTIONS.filter((option) => {
//     if (option.requiresAuth) {
//       return true;
//     }
//     if (option.requiresRole) {
//       return true;
//     }
//     return false;
//   });
// }
menuOptions = USER_MENU_OPTIONS.slice(1);

const UserMenu = ({
  anchorEl,
  handleCloseUserMenu,
  handleUserMenuClick,
}: UserMenuProps) => {
  const isLoggedIn = Boolean(useAppSelector(selectCurrentUserEmail));
  const userRole = useAppSelector(selectCurrentUserRole);

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
