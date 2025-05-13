import { fetchNews } from "@/lib/newsFetcher";
import NewsCard from "@/components/NewsCard";

export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <main className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {news.map((item) => (
        <NewsCard key={item.id} article={item} />
      ))}
    </main>
  );
}
