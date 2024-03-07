import { Box, Button } from "@mui/material";

import { NavLink as RouterNavLink } from "react-router-dom";

import CATEGORIES from "../../misc/constants/CATEGORIES";

const NavMenu = () => {
  const pages = CATEGORIES.map(({ id, name: categoryName }) => {
    return { id, name: categoryName.toUpperCase() };
  });
  return (
    <Box
      component="menu"
      className="main-navigation"
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      {pages.map(({ id, name: categoryName }) => (
        <Button
          disableRipple
          key={`category-page-${id}`}
          sx={{
            color: "white",
            display: "block",
          }}
        >
          <RouterNavLink
            to={`/collections/${categoryName.toLowerCase()}`}
            end
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: "white",
                textDecoration: "none",
              };
            }}
          >
            {categoryName}
          </RouterNavLink>
        </Button>
      ))}
    </Box>
  );
};

export default NavMenu;

// compound component child
const NavLink = () => {};
