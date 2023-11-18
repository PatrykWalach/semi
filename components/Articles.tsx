import { Article, ArticleData } from "./Article";
import { BigArticle } from "./BigArticle";

import './Articles.css';

export function Articles({ articles }: { articles: readonly ArticleData[] }) {
  return (
    <div
      className="articles"
    >
      {articles[0] && <BigArticle article={articles[0]}></BigArticle>}
      <p className="articles__empty">No articles</p>

      <div className="articles__list">
        {articles.slice(1).map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
}
