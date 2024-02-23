import { RouteType } from "../misc/types";

import HomePage from "./Home";
import ManageProductsPage from "./ManageProducts";
import ProductPage from "./Product";
import CartPage from "./Cart";
import UserPage from "./User";
import LoginPage from "./Login";

const pagesData: RouteType[] = [
  {
    path: "/",
    element: <HomePage />,
    title: "homepage",
  },
  {
    path: "manage-products",
    element: <ManageProductsPage />,
    title: "manage-products",
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
    title: "product",
  },
  {
    path: "/cart",
    element: <CartPage />,
    title: "cart",
  },
  {
    path: "/profile",
    element: <UserPage />,
    title: "profile",
  },
  {
    path: "/login",
    element: <LoginPage />,
    title: "login",
  },
];

export default pagesData;
