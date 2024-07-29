import React from "react";
import ContainerComponents from "./Container.components";
import HeaderComponents from "./Header.components";
import { Outlet } from "react-router-dom";
import FooterComponents from "./Footer.components";

const MainLayoutComponents = () => {
  return (
    <>
      <HeaderComponents />
      <ContainerComponents>
        <Outlet />
        <FooterComponents />
      </ContainerComponents>
    </>
  );
};

export default MainLayoutComponents;
