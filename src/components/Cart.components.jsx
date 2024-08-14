import React, { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import SweetAlert2 from "react-sweetalert2";
import toast from "react-hot-toast";
const CartComponents = ({ cart: { id, productId, quantity } }) => {
  const [swalProps, setSwalProps] = useState({});
  const { products } = useProductStore();
  const { addQuantity, subQuantity, removeCart } = useCartStore();
  const currentProduct = products?.find((product) => product.id === productId);
  const currentCost = currentProduct?.price * quantity;
  const handleSubBtn = () => {
    if (quantity > 1) {
      subQuantity(id);
    } else {
      setSwalProps({
        show: true,
        title: "Are you sure?",
        text: "You won't be able to recover this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1e293b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
        onConfirm: () => {
          removeCart(id);
          toast.success("Item removed from cart!", {
            position: "bottom-left",
            style: {
              background: "#363636",
              color: "#fff",
            },
          });
        },
        onResolve: () => {
          setSwalProps({ show: false });
        },
      });
    }
  };
  const handleAddBtn = () => {
    addQuantity(id);
  };
  return (
    <div>
      <div className="border border-slate-300 rounded-lg p-5 grid grid-cols-1 sm:grid-cols-6 ">
        <div className="col-span-full sm:col-span-1 mb-5 sm:mb-0">
          <img src={currentProduct?.image} alt="cart-image" className=" h-20" />
        </div>
        <div className="col-span-full sm:col-span-3 mb-5 sm:mb-0">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <p className="font-semibold text-slate-600 text-lg">
              {currentProduct?.title}
            </p>
            <p className="text-slate-400">Price: ${currentProduct?.price}</p>
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 mb-5 sm:mb-0">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <p className="text-slate-600 font-semibold">Quantity</p>
            <div className="flex items-center gap-x-3">
              <button
                onClick={handleSubBtn}
                className="bg-white border border-slate-500 p-1 rounded-full hover:scale-90 active:scale-90 duration-200 active:bg-white active:text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                <GoDash className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <p className="font-semibold">{quantity}</p>
              <button
                onClick={handleAddBtn}
                className="bg-white border border-slate-500 p-1 rounded-full hover:scale-90 active:scale-90 duration-200 active:bg-white active:text-slate-800 hover:bg-slate-800 hover:text-white"
              >
                <GoPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 ">
          <div className=" flex justify-start sm:justify-end items-center h-full">
            <p className="text-slate-700 font-semibold text-lg">
              {currentCost.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default CartComponents;
