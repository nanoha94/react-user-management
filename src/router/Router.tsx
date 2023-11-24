import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import UserManagement from "../pages/UserManagement";
import Setting from "../pages/Setting";
import Page404 from "../pages/Page404";
import HeaderLayout from "../templates/HeaderLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/user_management",
        element: <UserManagement />,
      },
      {
        path: "home/setting",
        element: <Setting />,
      },
    ],
  },
]);
