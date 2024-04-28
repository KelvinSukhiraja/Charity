import React from "react";
import { loader } from "../assets";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 h-screen backdrop-blur-sm flex items-center justify-center flex-col">
      <Image src={loader} alt="loader" className="w-52 object-contain" />
      <p className="mt-10 text-2xl text-indigo-500 text-center">
        Please wait...
      </p>
    </div>
  );
};

export default Loader;
