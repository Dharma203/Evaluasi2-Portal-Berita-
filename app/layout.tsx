import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Portal Berita",
  description: "Berita real-time dari berbagai sumber.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent`}
      >
        <SessionWrapper>
          {/* Navbar fixed dengan shadow dan background blur */}
          <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 border-b border-gray-200 dark:border-zinc-800 shadow-sm">
            <Navbar />
          </header>

          {/* Main konten dengan padding responsif dan margin atas agar tidak tertutup Navbar */}
          <main className="pt-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
            <ScrollToTopButton />
          </main>

          {/* Footer dengan padding dan shadow atas */}
          <footer className="mt-12 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 shadow-inner py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <Footer />
          </footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
