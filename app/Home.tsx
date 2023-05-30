import { ArticleData } from "./Article";
import { Articles } from "./Articles";

export default function Home({
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
