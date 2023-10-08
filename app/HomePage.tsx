import { ArticleData } from "@/components/Article";
import { Articles } from "@/components/Articles";

export default function HomePage({
  articles,
}: {
  articles: readonly ArticleData[];
}) {
  return (
    <main className="divide-y">
      <Articles articles={articles.slice(0, 4)}></Articles>
      <Articles articles={articles.slice(4)}></Articles>
    </main>
  );
}
