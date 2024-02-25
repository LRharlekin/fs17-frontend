import { createBrowserRouter } from "react-router-dom";

import { publicRoutes, protectedRoutes } from "./pagesData";

import Layout from "./Layout";
import ErrorPage from "./Error";
import RequireAuth from "../components/auth/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    /* loader() {
      // always provide user data, if logged in
      // return { user: fakeAuthProvider.username};
    }, */
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      ...publicRoutes,

      {
        element: <RequireAuth />,
        children: [...protectedRoutes],
      },
    ],
  },
]);

export default router;
