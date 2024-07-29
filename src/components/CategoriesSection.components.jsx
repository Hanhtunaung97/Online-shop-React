import React from "react";
import CategoriesButtonComponents from "./CategoriesButton.components";
const title = "CategoriesSection";
const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const CategoriesSectionComponents = () => {
  return (
    <section className="flex justify-between flex-col gap-y-5 mb-5">
      <div className=" h-20" id="categories"></div>
      <h1 className="text-lg font-headings text-slate-500">{title}</h1>
      <div className=" flex gap-3 items-center overflow-x-scroll md:overflow-x-hidden category-buttons-group ">
        <CategoriesButtonComponents current={true}>All</CategoriesButtonComponents>
        {categories.map((category) => (
          <CategoriesButtonComponents key={category} current={false}>
            {category}
          </CategoriesButtonComponents>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSectionComponents;
