import React from "react";

const ContainerComponents = ({ children }) => {
  return (
    <div className="px-3 xl:px-0  xl:max-w-7xl mx-auto  min-h-screen flex flex-col gap-y-5">
      {children}
    </div>
  );
};

export default ContainerComponents;
