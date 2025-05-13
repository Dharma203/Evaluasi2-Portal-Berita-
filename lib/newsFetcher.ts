import axios from "axios";

const SOURCES = [
  { id: "cnn", name: "CNN" },
  { id: "bbc-news", name: "BBC" },
  { id: "techcrunch", name: "TechCrunch" },
];

export async function fetchNews(): Promise<any[]> {
  const API_KEY = process.env.NEWS_API_KEY;
  const allNews: any[] = [];

  for (const source of SOURCES) {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=${source.id}&pageSize=5&apiKey=${API_KEY}`
      );

      const articles = res.data.articles.map((item: any, index: number) => ({
        id: `${source.id}-${index}`,
        title: item.title?.slice(0, 80) || "Tanpa Judul",
        image: item.urlToImage || "/default.jpg",
        publishedAt: new Date(item.publishedAt).toISOString(),
        summary: item.description || "",
        content: item.content || item.description || "",
        source: source.name,
        url: item.url || "#",
      }));

      allNews.push(...articles);
    } catch (error) {
      console.error(`❌ Gagal ambil dari ${source.name}:`, error.message);
    }
  }

  return allNews;
}
