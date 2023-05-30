import { ArticleData } from "./Article";
import { Articles } from "./Articles";

export default function Home({
  articles,
}: {
  articles: readonly ArticleData[];
}) {
  return (
    <main className="pt-12 pb-14 bg-surface text-on-surface">
      <div className="divide-y container mx-auto">
        <Articles articles={articles.slice(0, 4)}></Articles>
        <Articles articles={articles.slice(4)}></Articles>
      </div>
    </main>
  );
}
