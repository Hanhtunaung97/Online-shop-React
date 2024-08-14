import React, { useState } from "react";
import CartComponents from "./Cart.components";
import CategoriesButtonComponents from "./CategoriesButton.components";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import EmptyCart from "../assets/Empty.svg";
import SweetAlert2 from "react-sweetalert2";
import toast from "react-hot-toast";
const CartSectionComponents = () => {
  const [swalProps, setSwalProps] = useState({});
  const { carts } = useCartStore();
  const { products } = useProductStore();
  const total = carts.reduce((pv, cv) => {
    const cvPrice = products.find(({ id }) => id === cv.productId)?.price;
    const cvCost = cv.quantity * cvPrice;

    return pv + cvCost;
  }, 0);
  const Tax = total * 0.05;
  const NetTotal = total + Tax;
  const handleOrderBtn = () => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "You can't be able to cancel after ordered!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#1e293b",
      cancelButtonColor: "#d33",
      confirmButtonText: "Order now!",
      onConfirm: () => {
        window.print();
        toast.success("Items successfully ordered!", {
          position: "bottom-left",
        });
      },
      onResolve: () => {
        setSwalProps({ show: false });
      },
    });
  };
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-col gap-y-5 min-h-screen">
        {carts.length === 0 ? (
          <img src={EmptyCart} className="w-2/4 mx-auto" alt="empty" />
        ) : (
          <>
            {carts.map((cart) => (
              <CartComponents key={cart.id} cart={cart} />
            ))}
          </>
        )}
      </div>
      {/* order section */}
      <div className=" mt-auto mb-5 flex flex-col gap-y-3">
        <div className="border-t-2 border-slate-400 flex justify-end gap-x-10 pt-3">
          <div className="text-end">
            <h5 className="text-slate-500 font-semibold">Total $</h5>
            <p className="text-slate-800 font-bold text-lg">
              {total.toFixed(2)}
            </p>
          </div>
          <div>
            <div className="text-end">
              <h5 className="text-slate-500 font-semibold">Tax (5%)</h5>
              <p className="text-slate-800 font-bold text-lg">
                {Tax.toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <div className="text-end">
              <h5 className="text-slate-500 font-semibold">Net Total $</h5>
              <p className="text-slate-800 font-bold text-2xl">
                {NetTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <CategoriesButtonComponents
            onClick={handleOrderBtn}
            className={"!w-auto"}
          >
            Order Now
          </CategoriesButtonComponents>
        </div>
      </div>
      <SweetAlert2 {...swalProps} />
    </div>
  );
};

export default CartSectionComponents;
