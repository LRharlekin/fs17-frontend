import type { RouteObject } from "react-router-dom";

import HomePage from "./Home";
import ManageProductsPage from "./ManageProducts";
import ProductPage from "./Product";
import CartPage from "./Cart";
import CollectionPage from "./Collection";
import SearchPage from "./Search";
import ProfilePage from "./Profile";
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
  {
    path: "/collections/:category",
    element: <CollectionPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
];

export const protectedRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/manage-products",
    element: <ManageProductsPage />,
  },
];
