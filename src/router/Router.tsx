import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import UserManagement from "../components/pages/UserManagement";
import Setting from "../components/Setting";
import Page404 from "../components/pages/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Page404 />,
  },
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
]);