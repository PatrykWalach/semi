import { ArticleData } from "@/components/Article";
import { Articles } from "@/components/Articles";

import "./HomePage.css";

export default function HomePage({
  articles,
}: {
  articles: readonly ArticleData[];
}) {
  return (
    <main className="home-page">
      {Array.from({ length: Math.ceil(articles.length / 4) }, (_, i) => {
        return (
          <Articles
            key={i}
            articles={articles.slice(i * 4, (i + 1) * 4)}
          ></Articles>
        );
      })}
    </main>
  );
}
