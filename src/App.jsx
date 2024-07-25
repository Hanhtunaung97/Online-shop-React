import React from "react";
import {
  CategoriesSectionComponents,
  ContainerComponents,
  FooterComponents,
  HeaderComponents,
} from "./components";

const App = () => {
  return (
    <>
      <HeaderComponents />
      <ContainerComponents>
        <CategoriesSectionComponents />
        <FooterComponents />
      </ContainerComponents>
    </>
  );
};

export default App;
