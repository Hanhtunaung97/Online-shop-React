import React from "react";
import { CategoriesButtonComponents } from "../components";
import { useNavigate } from "react-router-dom";

const ErrorPages = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/");
  };
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <div className=" flex flex-col gap-y-10 items-center w-1/2">
        <img src="./public/404.svg" className="w-3/4" alt="404 page" />
        <CategoriesButtonComponents onClick={handleClick} className={"w-auto"}>
          Back to Home
        </CategoriesButtonComponents>
      </div>
    </div>
  );
};

export default ErrorPages;
