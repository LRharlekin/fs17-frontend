import React, { useState } from "react";

import { Menu, MenuItem, Typography } from "@mui/material";

type UserMenuProps = {
  anchorEl: HTMLElement | null;

  userMenuOptions: string[];
};

const UserMenu = ({ anchorEl, userMenuOptions }: UserMenuProps) => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    // open user menu
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    // close user menu
    // setAnchorElUser(null);
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
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
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {userMenuOptions.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default UserMenu;
