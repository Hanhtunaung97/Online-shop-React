import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetailPages = () => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);
  console.log(currentProduct);

  return (
    <div>
      <div className=" h-20" id="categories"></div>
      <div>hello</div>
    </div>
  );
};

export default ProductDetailPages;
