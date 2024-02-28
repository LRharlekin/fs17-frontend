import React, { useState } from "react";

import { Avatar, IconButton } from "@mui/material";
import { AccountCircle as UserIcon } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import {
  selectCurrentUserAvatar,
  selectCurrentUserEmail,
} from "../../redux/slices/authSlice";
import { useAppSelector } from "../../hooks";

import NavToolTip from "./NavToolTip";
import UserMenu from "./UserMenu";
import StyledBadge from "./StyledBadge";

const UserIconButton = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const isLoggedIn = Boolean(useAppSelector(selectCurrentUserEmail));
  const currentUserAvatar = useAppSelector(selectCurrentUserAvatar);
  const navigate = useNavigate();

  const handleAccountIconClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isLoggedIn) {
      // if logged in, open user menu
      setAnchorElUser(event.currentTarget);
    } else {
      navigate("/login");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    // if currentTarget has data-path, navigate to that path
    if (!event.currentTarget.getAttribute("data-path")) {
      navigate(event.currentTarget.getAttribute("data-path") as string);
    }
    // if currentTarget has data-action, perform that action^
    // if (event.currentTarget.getAttribute("data-action")) {
    //   event.currentTarget.getAttribute("data-action")();
    // }
    handleCloseUserMenu();
  };

  const generateButtonContent = (
    isLoggedIn: boolean,
    currentUserAvatar: string | null | undefined
  ) => {
    if (isLoggedIn && currentUserAvatar) {
      return (
        <Avatar
          src={currentUserAvatar}
          alt="View your user settings"
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            border: "1px solid #fff",
          }}
        />
      );
    } else if (isLoggedIn) {
      return (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <UserIcon />
        </StyledBadge>
      );
    } else {
      return <UserIcon />;
    }
  };

  const tooltipTitle = isLoggedIn ? "User Settings" : "Login";

  const buttonContent = generateButtonContent(isLoggedIn, currentUserAvatar);

  return (
    <>
      <NavToolTip
        title={tooltipTitle}
        sxObj={{ display: { xs: "none", md: "inline-flex" } }}
      >
        <IconButton color="inherit" onClick={handleAccountIconClick}>
          {buttonContent}
        </IconButton>
      </NavToolTip>
      <UserMenu
        anchorEl={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
        handleUserMenuClick={handleUserMenuClick}
      />
    </>
  );
};

export default UserIconButton;
