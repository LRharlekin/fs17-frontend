import React, { ReactElement } from "react";

import { useNavigate } from "react-router-dom";

import { IconButton, Tooltip } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchIconButton = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Tooltip title="Search">
      <IconButton color="inherit" onClick={() => navigate("/search")}>
        <SearchIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SearchIconButton;
