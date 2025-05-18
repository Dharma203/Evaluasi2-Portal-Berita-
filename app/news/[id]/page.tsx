import { fetchNews } from "@/lib/newsFetcher";

import NewsDetailClient from "./NewsDetailClient";

export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {
  const articles = await fetchNews();
  const article = articles.find((a) => a.id === decodeURIComponent(params.id));

  return <NewsDetailClient article={article} />;
}
