import React from "react";

import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import { DiamondTwoTone as DiamondIcon } from "@mui/icons-material";

const NavLogo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        flexGrow: { xs: 1, md: 0 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="text"
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          alignSelf: "center",
        }}
        onClick={handleLogoClick}
        disableFocusRipple
        disableElevation
        disableRipple
        size="large"
        startIcon={<DiamondIcon />}
      >
        <Typography
          variant="h6"
          noWrap
          component="h1"
          sx={{
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
      </Button>
    </Box>
  );
};

export default NavLogo;
