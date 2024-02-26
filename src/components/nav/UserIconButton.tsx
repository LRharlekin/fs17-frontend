import React, { useState } from "react";

import { IconButton, Tooltip } from "@mui/material";
import { AccountCircle as UserIcon } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import UserMenu from "./UserMenu";

const UserIconButton = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const navigate = useNavigate();

  const handleAccountIconClick = (event: React.MouseEvent<HTMLElement>) => {
    // if not logged in: redirect to login page
    // navigate("/login");
    // if logged in: open user menu
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    navigate(event.currentTarget.getAttribute("data-path") as string);
    handleCloseUserMenu();
  };

  return (
    <>
      <Tooltip
        // title="Login"
        title="User Settings"
        sx={{ display: { xs: "none", md: "inline-flex" } }}
      >
        <IconButton color="inherit" onClick={handleAccountIconClick}>
          <UserIcon />
        </IconButton>
      </Tooltip>
      <UserMenu
        anchorEl={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
        handleUserMenuClick={handleUserMenuClick}
      />
    </>
  );
};

export default UserIconButton;
