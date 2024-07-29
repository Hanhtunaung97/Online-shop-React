import React from "react";
import carts from "../data/carts";
import CartComponents from "./Cart.components";
import ContainerComponents from "./Container.components";
import CategoriesButtonComponents from "./CategoriesButton.components";

const CartSectionComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full flex flex-col gap-y-5 min-h-screen">
        {carts.map((cart) => (
          <CartComponents key={cart.id} cart={cart} />
        ))}
      </div>
      <div className=" mt-auto mb-5 flex flex-col gap-y-3">
        <div className="border-t-2 border-slate-400 flex justify-end gap-x-10 pt-3">
          <div className="text-end">
            <h5 className="text-slate-500 font-semibold">Total $</h5>
            <p className="text-slate-800 font-bold text-lg">123</p>
          </div>
          <div>
            <div className="text-end">
              <h5 className="text-slate-500 font-semibold">Tax (10%)</h5>
              <p className="text-slate-800 font-bold text-lg">123</p>
            </div>
          </div>
          <div>
            <div className="text-end">
              <h5 className="text-slate-500 font-semibold">Net Total $</h5>
              <p className="text-slate-800 font-bold text-2xl">123</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <CategoriesButtonComponents className={"!w-auto"}>
            Order Now
          </CategoriesButtonComponents>
        </div>
      </div>
    </div>
  );
};

export default CartSectionComponents;
