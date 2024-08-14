import React from "react";
import ProductComponents from "./Product.components";
import useProductStore from "../store/useProductStore";

const ProductSectionComponents = () => {
  const {products}=useProductStore()
  return (
    <section className="mb-5">
      <h1 className="text-lg font-headings text-slate-500 mb-16">
        Available Products
      </h1>
      <div className=" grid gap-y-14 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductComponents key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSectionComponents;
