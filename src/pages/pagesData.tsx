import type { RouteObject } from "react-router-dom";

import HomePage from "./Home/HomePage";
import ManageProductsPage from "./ManageProducts/ManageProductsPage";
import ProductPage from "./Product/ProductPage";
import CollectionPage from "./Collection/CollectionPage";
import SearchPage from "./Search/SearchPage";
import ProfilePage from "./Profile/ProfilePage";
import LoginPage from "./Login/LoginPage";

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
];

export const protectedAdminRoutes: RouteObject[] = [
  {
    path: "/manage-products",
    element: <ManageProductsPage />,
  },
];
