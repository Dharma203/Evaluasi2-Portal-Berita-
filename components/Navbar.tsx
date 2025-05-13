"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <Link
        href="/news"
        className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition"
      >
        Portal Berita
      </Link>
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition"
      >
        Logout
      </button>
    </nav>
  );
}
