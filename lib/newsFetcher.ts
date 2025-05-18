import axios from "axios";

type Article = {
  id: string;
  title: string;
  image: string;
  publishedAt: string;
  summary: string;
  content: string;
  source: string;
  url: string;
};

const SOURCES = [
  { id: "cnn", name: "CNN" },
  { id: "bbc-news", name: "BBC" },
  { id: "techcrunch", name: "TechCrunch" },
];

export async function fetchNews(): Promise<Article[]> {
  const API_KEY = process.env.NEWS_API_KEY;
  if (!API_KEY) {
    throw new Error("NEWS_API_KEY belum diset di environment variables");
  }

  const allNews: Article[] = [];

  for (const source of SOURCES) {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=${source.id}&pageSize=5&apiKey=${API_KEY}`
      );

      if (!res.data || !Array.isArray(res.data.articles)) {
        console.warn(`Format response dari ${source.name} tidak sesuai`);
        continue;
      }

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
      if (error instanceof Error) {
        console.error(`❌ Gagal ambil dari ${source.name}:`, error.message);
      } else {
        console.error(`❌ Gagal ambil dari ${source.name}:`, error);
      }
    }
  }

  return allNews;
}
