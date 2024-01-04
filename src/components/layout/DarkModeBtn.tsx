"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="absolute top-0 right-0">
      {currentTheme === "dark" ? (
        <MdOutlineLightMode
          className="h-6 w-6 cursor-pointer text-yellow-400"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdOutlineDarkMode
          className="h-6 w-6 cursor-pointer text-slate-700"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};
export default DarkModeBtn;
