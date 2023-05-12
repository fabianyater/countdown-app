"use client";

import { useContext } from "react";
import { FormContext } from "../context/form-provider";

export const CustomButton = () => {
  const { isHidden, setIsHidden } = useContext(FormContext);

  const handleIsHidden = () => {
    setIsHidden(!isHidden)
  }
  
  return (
    <button
      type="button"
      onClick={handleIsHidden}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:outline-none"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#d4d2d2] dark:bg-[#1C1C1C] rounded-full group-hover:bg-opacity-0">
        Crear nuevo contador
      </span>
    </button>
  );
};
