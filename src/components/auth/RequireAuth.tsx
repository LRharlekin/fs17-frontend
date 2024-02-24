import React, { Fragment as _F } from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

import { selectCurrentToken } from "../../redux/slices/authSlice";

const RequireAuth = () => {
  const token = useAppSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
