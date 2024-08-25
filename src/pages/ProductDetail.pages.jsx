import React from "react";
import { useParams } from "react-router-dom";
import { BreadCrumbComponents, RatingComponents } from "../components";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetailPages = () => {
  const { slug} = useParams();
  const { products } = useProductStore();
  const { carts, addCart } = useCartStore();
  const currentProduct = products.find((product) => product.slug == slug);
  const handleAddCartBtn = () => {
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };
  const handleAddedCartBtn = (e) => {
    e.stopPropagation();
    toast.error("Item already added to Cart!", {
      position: "bottom-left",
    });
  };
  return (
    <div>
      <div className=" h-20 " id="categories"></div>
      <BreadCrumbComponents breadCrumbTitle={currentProduct.title} />
      <div className=" border border-slate-300 rounded-lg grid gap-y-10 md:gap-y-0 grid-cols-1 md:grid-cols-2 p-10 ">
        <div className="col-span-full md:col-span-1 ">
          <div className="flex justify-center items-center w-full">
            <img src={currentProduct?.image} className="w-2/4 " alt="" />
          </div>
        </div>
        <div className="col-span-full md:col-span-1">
          <div className=" flex flex-col gap-y-5 items-start min-h-full">
            <h3 className=" font-headings font-bold text-xl sm:text-3xl text-slate-600">
              {currentProduct?.title}
            </h3>
            <p className="bg-slate-100 font-semibold text-slate-500 px-3 py-1 inline-block rounded-lg text-sm sm:text-base">
              {currentProduct?.category}
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              {currentProduct?.description}
            </p>

            <RatingComponents
              rating={currentProduct?.rating}
              className={" w-full text-sm sm:text-base "}
            />

            <div className=" flex justify-between items-end w-full">
              <p className=" text-slate-500 font-semibold  text-sm sm:text-base md:text-lg">
                Price $ <span>{currentProduct?.price}</span>
              </p>
              {carts.find((cart) => cart.productId == currentProduct?.id) ? (
                <button
                  onClick={handleAddedCartBtn}
                  className="bg-slate-400 border border-slate-400 text-white px-3 py-1 rounded-lg text-xs active:scale-105 duration-150 active:bg-slate-500 active:text-white"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddCartBtn}
                  className="bg-white border border-slate-400 px-3 py-1 rounded-lg text-xs active:scale-105 duration-150 active:bg-white active:text-slate-400 hover:bg-slate-400 hover:text-white"
                >
                  Add Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPages;
