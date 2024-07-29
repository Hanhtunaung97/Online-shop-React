import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbComponents = ({ breadCrumbTitle }) => {
  return (
    <div className="h-20 w-full flex items-center gap-x-5 py-5">
      <Link to={"/"}>
        <p className=" text-slate-400">Home</p>
      </Link>
      <span> / </span>
      <p className="text-slate-600 font-semibold">{breadCrumbTitle}</p>
    </div>
  );
};

export default BreadCrumbComponents;
