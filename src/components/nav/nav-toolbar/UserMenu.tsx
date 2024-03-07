import React from "react";

import {
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import USER_MENU_OPTIONS from "../../../misc/constants/USER_MENU_OPTIONS";

type UserMenuProps = {
  anchorEl: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleUserMenuClick: (
    event: React.MouseEvent<HTMLElement>,
    action?: () => any
  ) => void;
};

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
        {USER_MENU_OPTIONS.map(
          ({ id, path, name, icon: IconComponent, action }) => (
            <MenuItem
              key={`user-menu-option-${id}`}
              onClick={(e) => handleUserMenuClick(e, action)}
              data-path={path}
            >
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
