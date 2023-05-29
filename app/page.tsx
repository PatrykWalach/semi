import { ARTICLES, ArticleData } from "./Article";
import { Articles } from "./Articles";

export default async function Home() {
  const articles = await new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, ARTICLES)
  );

  return (
    <main className="pt-12 pb-14 bg-surface">
      <div className="divide-y container mx-auto">
        <Articles articles={articles.slice(0, 4)}></Articles>
        <Articles articles={articles.slice(4)}></Articles>
      </div>
    </main>
  );
}
