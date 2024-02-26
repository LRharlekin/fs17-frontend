import React from "react";

import {
  AccountCircle as UserIcon,
  Logout as LogoutIcon,
  Storefront as StorefrontIcon,
} from "@mui/icons-material";

type UserMenuOptionType = {
  id: number;
  name: string;
  icon: React.ComponentType;
  path?: string;
};

const USER_MENU_OPTIONS: UserMenuOptionType[] = [
  {
    id: 1,
    name: "Login",
    icon: UserIcon,
    path: "/login",
  },
  {
    id: 2,
    name: "My Profile",
    icon: UserIcon,
    path: "/profile",
  },
  {
    id: 3,
    name: "Manage Products",
    icon: StorefrontIcon,
    path: "/manage-products",
  },
  {
    id: 4,
    name: "Logout",
    icon: LogoutIcon,
    path: "/logout",
  },
];

export default USER_MENU_OPTIONS;
