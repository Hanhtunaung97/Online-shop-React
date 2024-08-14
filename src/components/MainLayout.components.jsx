import React from "react";
import ContainerComponents from "./Container.components";
import HeaderComponents from "./Header.components";
import { Outlet } from "react-router-dom";
import FooterComponents from "./Footer.components";
import { Toaster } from "react-hot-toast";

const MainLayoutComponents = () => {
  return (
    <>
      <HeaderComponents />
      <ContainerComponents>
        <Outlet />
      </ContainerComponents>
      <FooterComponents />
      <Toaster/>
    </>
  );
};

export default MainLayoutComponents;
