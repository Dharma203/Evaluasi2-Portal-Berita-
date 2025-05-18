"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsDetailClient({ article }: { article: any }) {
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <main className="p-6 text-center text-red-600 min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">Berita tidak ditemukan.</h2>
        <Link
          href="/news"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          ← Kembali ke daftar berita
        </Link>
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      `, ${date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })} WIB`
    );
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <main className="p-6 max-w-4xl mx-auto bg-white dark:bg-zinc-900 shadow-lg rounded-lg mt-6">
      <div className="overflow-hidden rounded-lg mb-6 shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>

      <h1 className="text-4xl font-extrabold mb-3 leading-tight dark:text-white">
        {article.title}
      </h1>

      <div className="flex flex-wrap justify-between items-center mb-5 text-sm text-gray-500 dark:text-gray-400 font-medium">
        <div>
          Dari:{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {article.source}
          </span>
        </div>
        <div>{formatDate(article.publishedAt)}</div>
      </div>

      {article.category && (
        <div className="mb-5">
          <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>
      )}

      {article.summary && (
        <blockquote className="border-l-4 border-blue-500 pl-5 italic text-gray-700 dark:text-gray-300 mb-6">
          {article.summary}
        </blockquote>
      )}

      <article
        className="prose prose-lg max-w-none dark:prose-invert text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-justify"
        style={{ whiteSpace: "pre-line" }}
      >
        {article.content ||
          "Konten lengkap tidak tersedia. Silakan baca sumber aslinya di bawah ini."}
      </article>

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-3 rounded shadow font-semibold transition"
        >
          Baca Selengkapnya di {article.source}
        </a>
      )}

      <div className="mt-6 flex flex-wrap justify-between items-center">
        <button
          onClick={copyToClipboard}
          className={`inline-block px-4 py-2 rounded shadow font-medium transition ${
            copied
              ? "bg-green-500 text-white cursor-default"
              : "bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-zinc-600"
          }`}
          aria-label="Salin link berita ke clipboard"
        >
          {copied ? "Tersalin!" : "Salin Link Berita"}
        </button>

        <Link
          href="/news"
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow transition whitespace-nowrap mt-3 sm:mt-0"
        >
          ← Kembali ke Daftar Berita
        </Link>
      </div>
    </main>
  );
}
