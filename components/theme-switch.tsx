"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 bg-white 
      w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] 
     border-solid borderBlack shadow-xl  overflow-hidden rounded-full flex 
    items-center justify-center hover:scale-[1.15] 
active:scale-105 
   transition-all  
      dark:bg-gray-950 
      dark:text-gray-50"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}