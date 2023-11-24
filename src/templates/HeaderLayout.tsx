import React, { ReactNode, memo } from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";

const HeaderLayout = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});

export default HeaderLayout;
