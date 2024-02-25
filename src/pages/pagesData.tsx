import type { RouteObject } from "react-router-dom";

import HomePage from "./Home";
import ManageProductsPage from "./ManageProducts";
import ProductPage from "./Product";
import CartPage from "./Cart";
import UserPage from "./User";
import LoginPage from "./Login";

export const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
];

export const protectedRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <UserPage />,
  },
  {
    path: "manage-products",
    element: <ManageProductsPage />,
  },
];
