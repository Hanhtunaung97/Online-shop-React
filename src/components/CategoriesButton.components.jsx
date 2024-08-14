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
        category?.isActive ? "bg-slate-800 " : "bg-slate-400"
      } text-nowrap px-3 py-1 rounded-lg hover:bg-transparent hover:border hover:border-slate-400 duration-200 hover:text-slate-400 active:scale-90 active:bg-slate-400 active:text-white text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default CategoriesButtonComponents;
