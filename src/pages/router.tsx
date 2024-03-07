import { createBrowserRouter } from "react-router-dom";

import {
  publicRoutes,
  protectedRoutes,
  protectedAdminRoutes,
} from "./pagesData";

import Layout from "./Layout";
import ErrorPage from "./Error/ErrorPage";
import RequireAuth from "../components/auth/RequireAuth";

type Roles = "customer" | "admin";

const ROLES: {
  customer: Roles;
  admin: Roles;
} = {
  customer: "customer",
  admin: "admin",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      ...publicRoutes,

      {
        element: <RequireAuth allowedRoles={[ROLES.customer, ROLES.admin]} />,
        children: [...protectedRoutes],
      },
      {
        element: <RequireAuth allowedRoles={[ROLES.admin]} />,
        children: [...protectedAdminRoutes],
      },
    ],
  },
]);

export default router;
