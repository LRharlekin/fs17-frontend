import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

import {
  selectCurrentToken,
  selectCurrentUserEmail,
  selectCurrentUserName,
} from "../../redux/slices/authSlice";

const RequireAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  console.log("RequireAuth token", token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
