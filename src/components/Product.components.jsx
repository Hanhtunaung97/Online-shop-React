import React, { useEffect, useRef, useState } from "react";
import RatingComponents from "./Rating.components";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
import AnimationImageComponents from "./AnimationImage.components";

const ProductComponents = ({
  product: {
    id,
    title,
    price,
    image,
    description,
    rating: { rate, count },
    slug
  },
}) => {
  const { carts, addCart } = useCartStore();
  const nav = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [info, setInfo] = useState({});
  const imgRef = useRef();
  const handleDetailBtn = () => {
    nav(`/product-detail/${slug}`);
  };
  const handleAddCartBtn = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
    setAnimate(true);
  };
  const handleAddedCartBtn = (e) => {
    e.stopPropagation();
    toast.error("Item already added to Cart!", {
      position: "bottom-left",
    });
  };
  useEffect(() => {
    // console.log(imgRef.current.getBoundingClientRect());
    setInfo(imgRef.current.getBoundingClientRect());
  }, []);
  return (
    <div
      onClick={handleDetailBtn}
      className="border border-slate-400 rounded-lg  hover:scale-105 hover:shadow group duration-200 active:scale-100"
    >
      <div className="p-3 flex gap-y-4 flex-col min-h-full">
        <div className="mb-1 ">
          <img
            src={image}
            alt=""
            ref={imgRef}
            className="h-24 ms-4 -mt-12 group-hover:-rotate-6 duration-200"
          />
          {animate && (
            <AnimationImageComponents
              src={image}
              info={info}
              setAnimate={setAnimate}
            />
          )}
        </div>
        <div className=" flex flex-col gap-y-2">
          <h1 className="font-headings text-lg line-clamp-2 text-slate-600 font-semibold">
            {title}
          </h1>
          <p className="text-slate-500 line-clamp-3 ">{description}</p>
        </div>
        <RatingComponents rating={{ rate, count }} />
        <div className="flex justify-between items-center mb-3">
          <p className="text-slate-600 font-semibold">
            Price <span>${price}</span>
          </p>
          {carts.find((cart) => cart.productId == id) ? (
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
  );
};

export default ProductComponents;
