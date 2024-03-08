import { Toolbar } from "@mui/material";

import UserIconButton from "./UserIconButton";
// import SearchIconButton from "./SearchIconButton";
import CartIconButton from "./CartIconButton";
import ThemeToggleButton from "./ThemeToggleButton";

const NavToolBar = () => {
  return (
    <Toolbar component="nav" sx={{ flexGrow: 0 }}>
      <ThemeToggleButton />
      <UserIconButton />
      {/* <SearchIconButton /> */}
      <CartIconButton />
    </Toolbar>
  );
};

export default NavToolBar;
