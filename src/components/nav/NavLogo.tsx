import React from "react";

import { Typography } from "@mui/material";
import { DiamondTwoTone as DiamondIcon } from "@mui/icons-material";

const NavLogo = () => {
  return (
    <>
      <DiamondIcon sx={{ alignSelf: "center", display: "flex", mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="h1"
        sx={{
          mr: 2,
          display: "flex",
          flexGrow: { xs: 1, md: 0 },
          alignSelf: "center",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </>
  );
};

export default NavLogo;
