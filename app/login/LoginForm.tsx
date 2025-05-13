"use client";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Portal Berita</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Login dengan Google
      </button>
    </div>
  );
}
