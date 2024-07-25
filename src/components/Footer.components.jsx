import React from "react";

const FooterComponents = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-black py-3">
      <p className="text-white text-center">Copyright &copy; {date} <a className="text-red-400 hover:text-red-300 duration-200 underline hover:underline-offset-4" href="https://github.com/Hanhtunaung97/Hanhtunaung97">Han </a> all right reserved.</p>
    </footer>
  );
};

export default FooterComponents;
