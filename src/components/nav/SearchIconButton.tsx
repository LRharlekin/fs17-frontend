import React, { ReactElement } from "react";

import { useNavigate } from "react-router-dom";

import { IconButton, Tooltip } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NavToolTip from "./nav-toolbar/NavToolTip";

const SearchIconButton = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <NavToolTip title="Search">
      <IconButton color="inherit" onClick={() => navigate("/search")}>
        <SearchIcon />
      </IconButton>
    </NavToolTip>
  );
};

export default SearchIconButton;
