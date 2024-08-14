import React from "react";
import CategoriesButtonComponents from "./CategoriesButton.components";
import useCategoriesStore from "../store/useCategoriesStore";
const title = "CategoriesSection";

const CategoriesSectionComponents = () => {
  const {categories}=useCategoriesStore();
  return (
    <section className="flex justify-between flex-col gap-y-5 mb-5">
      <div className=" h-20" id="categories"></div>
      <h1 className="text-lg font-headings text-slate-500">{title}</h1>
      <div className=" flex gap-3 items-center overflow-x-scroll md:overflow-x-hidden category-buttons-group ">
        {/* <CategoriesButtonComponents current={true}>All</CategoriesButtonComponents> */}
        {categories.map((category) => (
          <CategoriesButtonComponents key={category.id} category={category}>
            {category.name}
          </CategoriesButtonComponents>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSectionComponents;
