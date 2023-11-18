import { Article, ArticleData } from "./Article";
import { BigArticle } from "./BigArticle";

export function Articles({ articles }: { articles: readonly ArticleData[] }) {
  return (
    <div
      className="articles"
    >
      {articles[0] && <BigArticle article={articles[0]}></BigArticle>}
      <p className="articles__empty">No articles</p>

      <div className="grid grid-cols-12 gap-x-8 gap-y-16">
        {articles.slice(1).map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
}
