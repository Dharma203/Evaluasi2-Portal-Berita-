"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-3 py-2 rounded-full shadow-md hover:scale-105 transition"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      {children}
    </>
  );
}
