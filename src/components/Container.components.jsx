import React from "react";

const ContainerComponents = ({ children }) => {
  return <div className="px-3 lg:px-0 max-w-7xl mx-auto  h-screen flex flex-col gap-y-5">{children}</div>;
};

export default ContainerComponents;
