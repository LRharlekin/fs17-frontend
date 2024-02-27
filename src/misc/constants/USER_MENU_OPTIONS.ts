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
  action?: () => void;
  requiresRole?: string;
  requiresAuth: boolean;
};

const USER_MENU_OPTIONS: UserMenuOptionType[] = [
  {
    id: 1,
    name: "Login",
    icon: UserIcon,
    path: "/login",
    requiresAuth: false,
  },
  {
    id: 2,
    name: "My Profile",
    icon: UserIcon,
    path: "/profile",
    requiresAuth: true,
  },
  {
    id: 3,
    name: "Manage Products",
    icon: StorefrontIcon,
    path: "/manage-products",
    requiresAuth: true,
    requiresRole: "admin",
  },
  {
    id: 4,
    name: "Logout",
    icon: LogoutIcon,
    requiresAuth: true,
    // action: // dispatch(logout())
  },
];

export default USER_MENU_OPTIONS;
