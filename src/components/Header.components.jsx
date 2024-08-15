import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useHeaderBtnStore from "../store/useHeaderBtnStore";

const HeaderComponents = () => {
  const nav = useNavigate();
  const { carts } = useCartStore();
  const { setBtnInfo } = useHeaderBtnStore();
  const btnRef = useRef();
  useEffect(() => {
    // console.log(btnRef.current.getBoundingClientRect());
    setBtnInfo(btnRef.current.getBoundingClientRect());
  }, []);
  const handleBtn = () => {
    nav("/my-cart");
  };
  return (
    <header className=" mx-auto bg-slate-50 fixed w-full z-50 h-20 shadow">
      <nav className="px-3 xl:px-0 max-w-7xl mx-auto flex justify-between items-center h-full">
        <Link to={"/"}>
          <h1 className="font-headings font-bold text-3xl text-slate-500">
            Online Shop
          </h1>
        </Link>

        <button
          
          onClick={handleBtn}
          className="relative h-10 text-nowrap px-3 py-1 rounded-lg  duration-200 hover:scale-95   active:scale-90 active:bg-slate-400 active:text-white hover:bg-slate-100 border-slate-400 border text-slate-500 bg-transparent"
        >
          Cart{" "}
          <span ref={btnRef} className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-yellow-400 text-white flex p-1 justify-center items-center border border-slate-300 text-xs">
            {carts.length}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default HeaderComponents;
