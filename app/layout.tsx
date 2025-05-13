import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal Berita",
  description: "Berita real-time dari berbagai sumber.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <SessionWrapper>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
              {children}
              <ScrollToTopButton />
            </main>
            <Footer />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
