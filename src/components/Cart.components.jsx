import React from "react";
import { GoPlus, GoDash } from "react-icons/go";
const CartComponents = ({ cart }) => {
  return (
    <div>
      <div className="border border-slate-300 rounded-lg p-5 grid grid-cols-1 sm:grid-cols-6 ">
        <div className="col-span-full sm:col-span-1 mb-5 sm:mb-0">
          <img src={cart.product.image} alt="cart-image" className=" h-20" />
        </div>
        <div className="col-span-full sm:col-span-3 mb-5 sm:mb-0">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <p className="font-semibold text-slate-600 text-lg">
              {cart.product.title}
            </p>
            <p className="text-slate-400">Price: ${cart.product.price}</p>
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 mb-5 sm:mb-0">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <p className="text-slate-600 font-semibold">Quantity</p>
            <div className="flex items-center gap-x-3">
              <button className="bg-white border border-slate-500 p-1 rounded-full hover:scale-90 active:scale-90 duration-200 active:bg-white active:text-slate-800 hover:bg-slate-800 hover:text-white">
                <GoDash className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <p className="font-semibold">{cart.quantity}</p>
              <button className="bg-white border border-slate-500 p-1 rounded-full hover:scale-90 active:scale-90 duration-200 active:bg-white active:text-slate-800 hover:bg-slate-800 hover:text-white">
                <GoPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 ">
            <div className=" flex justify-start sm:justify-end items-center h-full">
            <p className="text-slate-700 font-semibold text-lg">{cart.cost}</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartComponents;
