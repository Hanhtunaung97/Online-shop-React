import React from "react";

const FooterComponents = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-black py-3 flex justify-between items-center px-5">
      <p className="text-white text-center">
        Copyright &copy; {date}{" "}
        <a
          className="text-red-400 hover:text-red-300 duration-200 underline hover:underline-offset-4"
          href="https://github.com/Hanhtunaung97/Hanhtunaung97"
        >
          Han{" "}
        </a>{" "}
        all right reserved.
      </p>
      <a href="#categories">
        <p className=" border p-1 rounded-full cursor-pointer select-none active:scale-95 duration-150 group hover:border-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className=" h-5 w-5 stroke-2 stroke-white group-hover:stroke-red-500 duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </p>
      </a>
    </footer>
  );
};

export default FooterComponents;
