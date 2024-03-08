import { Toolbar } from "@mui/material";

import UserIconButton from "./UserIconButton";
// import SearchIconButton from "./SearchIconButton";
import CartIconButton from "./CartIconButton";
import ColorThemeToggleButton from "./ColorThemeToggleButton";

const NavToolBar = () => {
  return (
    <Toolbar component="nav" sx={{ flexGrow: 0 }}>
      <ColorThemeToggleButton />
      <UserIconButton />
      {/* <SearchIconButton /> */}
      <CartIconButton />
    </Toolbar>
  );
};

export default NavToolBar;
