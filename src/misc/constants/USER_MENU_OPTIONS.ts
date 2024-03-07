import React from "react";

import { logoutAndSave } from "../../components/auth/authActions";

import {
  AccountCircle as UserIcon,
  Logout as LogoutIcon,
  Storefront as StorefrontIcon,
} from "@mui/icons-material";

export type UserMenuOptionType = {
  id: number;
  name: string;
  icon: React.ComponentType;
  path?: string;
  action?: typeof logoutAndSave;
  requiresRole?: string;
  requiresAuth: boolean;
};

const USER_MENU_OPTIONS: UserMenuOptionType[] = [
  {
    id: 1,
    name: "My Profile",
    icon: UserIcon,
    path: "/profile",
    requiresAuth: true,
  },
  {
    id: 2,
    name: "Manage Products",
    icon: StorefrontIcon,
    path: "/manage-products",
    requiresAuth: true,
    requiresRole: "admin",
  },
  {
    id: 3,
    name: "Logout",
    icon: LogoutIcon,
    requiresAuth: true,
    action: logoutAndSave,
  },
];

export default USER_MENU_OPTIONS;
