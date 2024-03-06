import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";

import {
  selectCurrentToken,
  // selectCurrentUserRole,
} from "./authSelectors";

const RequireAuth = ({
  allowedRoles,
}: {
  allowedRoles?: Array<"customer" | "admin" | null>;
}) => {
  const token = useAppSelector(selectCurrentToken);
  // const role = useAppSelector(selectCurrentUserRole);
  const location = useLocation();

  console.log("RequireAuth token", token);

  return token /*  && allowedRoles?.includes(role) */ ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
