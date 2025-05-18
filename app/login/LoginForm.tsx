"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      // Memanggil signIn google
      const result = await signIn("google", { redirect: false });
      if (result?.error) {
        setError("Gagal login, silakan coba lagi.");
      }
    } catch {
      setError("Terjadi kesalahan saat login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
          Portal Berita Login
        </h1>
        <p className="mb-8 text-gray-600">
          Masuk menggunakan akun Google Anda untuk melanjutkan
        </p>

        {error && (
          <div className="mb-4 text-red-600 font-semibold">{error}</div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mx-auto max-w-xs w-full"
          aria-label="Login dengan Google"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          ) : (
            <>
              <svg
                className="w-6 h-6"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-18.3-1.5-36-4.8-53.3H272v100.8h146.9c-6.4 34.8-25.9 64.3-55.2 84v69.7h89.2c52.2-48.1 82.6-118.9 82.6-201.2z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c74.4 0 136.9-24.7 182.5-67.3l-89.2-69.7c-25 17-57 27-93.3 27-71.7 0-132.6-48.3-154.3-113.3H28.3v70.8c45.5 89 139.1 152.5 243.7 152.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M117.7 321.7c-10.7-32-10.7-66.7 0-98.7v-70.8H28.3c-39.4 76.1-39.4 167.2 0 243.3l89.4-73.8z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c39.8 0 75.7 13.7 103.8 40.5l77.9-77.9C403.7 24.7 341.3 0 272 0 167.4 0 73.8 63.5 28.3 152.5l89.4 70.8c21.7-65 82.6-113.3 154.3-113.3z"
                />
              </svg>
              <span>{loading ? "Memproses..." : "Login dengan Google"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
