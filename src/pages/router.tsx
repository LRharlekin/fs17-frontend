import { createBrowserRouter } from "react-router-dom";

import type { RouteType } from "../misc/types";

import pagesData from "./pagesData";

import Layout from "./Layout";
import ErrorPage from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: pagesData.map((page: RouteType) => {
      return {
        path: page.path,
        element: page.element,
      };
    }),
  },
]);

export default router;
