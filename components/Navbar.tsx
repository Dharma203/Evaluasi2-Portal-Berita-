"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const userName = session?.user?.name || "User";
  const userImage = session?.user?.image;

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 p-4 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/news"
          className="text-xl font-extrabold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition"
          aria-label="Navigasi ke halaman Portal Berita"
        >
          Portal Berita
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center gap-3">
            {userImage && (
              <img
                src={userImage}
                alt={`${userName} profile`}
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Halo, {userName}
            </span>
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label={
              isDarkMode ? "Matikan mode gelap" : "Nyalakan mode gelap"
            }
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
          >
            {isDarkMode ? (
              // Sun icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={12} cy={12} r={5} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v2m0 18v2m11-11h-2M3 12H1m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 4.636"
                />
              </svg>
            ) : (
              // Moon icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            title="Logout"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded shadow transition"
          >
            {/* Logout icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
              />
            </svg>
            Logout
          </button>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            aria-label={
              isDarkMode ? "Matikan mode gelap" : "Nyalakan mode gelap"
            }
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-700 transition mr-2"
          >
            {isDarkMode ? (
              // Sun icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={12} cy={12} r={5} />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1v2m0 18v2m11-11h-2M3 12H1m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 4.636"
                />
              </svg>
            ) : (
              // Moon icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
          >
            {menuOpen ? (
              // X icon (close)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 mt-2 shadow-md rounded-b">
          <div className="flex flex-col p-4 space-y-3">
            <div className="flex items-center gap-3">
              {userImage && (
                <img
                  src={userImage}
                  alt={`${userName} profile`}
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Halo, {userName}
              </span>
            </div>

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              title="Logout"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded shadow transition justify-center"
            >
              {/* Logout icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
