import React from "react";
import useCategoriesStore from "../store/useCategoriesStore";

const CategoriesButtonComponents = ({
  category,
  children,
  className,
  ...rest
}) => {
  const { categoryActive } = useCategoriesStore();
  const handleClick = () => {
    categoryActive(category?.id);
  };
  return (
    <button
      onClick={handleClick}
      {...rest}
      className={`${
        category?.isActive
          ? "bg-slate-800 text-white"
          : "hover:bg-slate-100 border-slate-400 border text-slate-500 bg-transparent"
      } text-nowrap px-3 py-1 rounded-lg  duration-200 hover:scale-95   active:scale-90 active:bg-slate-400 active:text-white  ${className}`}
    >
      {children}
    </button>
  );
};

export default CategoriesButtonComponents;
