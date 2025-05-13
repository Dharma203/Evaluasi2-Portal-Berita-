import Link from "next/link";

export default function NewsCard({ article }: { article: any }) {
  return (
    <Link href={`/news/${encodeURIComponent(article.id)}`}>
      <div className="bg-white dark:bg-zinc-900 rounded-md overflow-hidden shadow hover:shadow-lg transition border">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg truncate">{article.title}</h2>
          <p className="text-sm text-gray-500 mb-1">
            {new Date(article.publishedAt).toLocaleString()}
          </p>
          <p className="text-xs text-blue-600 font-medium">{article.source}</p>
        </div>
      </div>
    </Link>
  );
}
