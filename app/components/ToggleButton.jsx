"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./ThemeIcons";

export const ToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    mounted && (
      /*  <button
        className={`absolute right-5 top-12 ${isDarkMode ? "dark" : "light"}`}
        onClick={handleClick}
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />} Mode
      </button> */
      <button
        aria-label="Dark mode"
        className="absolute right-5 top-14 transition ease-in-out duration-400 hover:text-blue dark:hover:text-white"
        onClick={handleClick}
      >
        {!isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    )
  );
};
