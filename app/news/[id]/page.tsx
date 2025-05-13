import { fetchNews } from "@/lib/newsFetcher";
import Link from "next/link";

export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {
  const articles = await fetchNews();
  const article = articles.find((a) => a.id === decodeURIComponent(params.id));

  if (!article) {
    return (
      <main className="p-6 text-center text-red-600">
        Berita tidak ditemukan.
        <div className="mt-4">
          <Link href="/news" className="text-blue-600 underline">
            ← Kembali ke daftar berita
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto bg-white dark:bg-zinc-900 shadow rounded-lg mt-6">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex flex-col sm:flex-row sm:justify-between">
        <span>
          Dari: <strong>{article.source}</strong>
        </span>
        <span>
          Dipublikasikan: {new Date(article.publishedAt).toLocaleString()}
        </span>
      </div>

      {article.summary && (
        <p className="text-base text-gray-700 dark:text-gray-300 mb-6 italic border-l-4 pl-4 border-blue-500">
          {article.summary}
        </p>
      )}

      <article className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
        {article.content ||
          "Konten lengkap tidak tersedia. Silakan baca sumber aslinya di bawah ini."}
      </article>

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Baca Selengkapnya di {article.source}
        </a>
      )}

      <div className="mt-8 text-right">
        <Link
          href="/news"
          className="inline-block text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          ← Kembali ke Daftar Berita
        </Link>
      </div>
    </main>
  );
}
