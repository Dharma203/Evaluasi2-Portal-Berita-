import Link from "next/link";

type Article = {
  id: string;
  title: string;
  image: string;
  publishedAt: string;
  source: string;
  category?: string;
};

export default function NewsCard({ article }: { article: Article }) {
  // Format tanggal lokal bahasa Indonesia dengan waktu jam dan menit
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }) +
      ", " +
      date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) +
      " WIB"
    );
  };

  return (
    <Link
      href={`/news/${encodeURIComponent(article.id)}`}
      className="block group"
      aria-label={`Baca berita: ${article.title}`}
    >
      <article className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md border border-transparent hover:border-blue-500 hover:shadow-xl transform transition duration-300 group-hover:scale-[1.03]">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {article.category && (
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold uppercase px-2 py-0.5 rounded">
              {article.category}
            </span>
          )}
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
            {article.title}
          </h2>

          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {formatDate(article.publishedAt)}
          </p>

          <p className="mt-1 text-xs text-blue-600 font-semibold">
            {article.source}
          </p>
        </div>
      </article>
    </Link>
  );
}
