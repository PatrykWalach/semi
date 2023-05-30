import { Article, ArticleData } from "./Article";
import { BigArticle } from "./BigArticle";

export function Articles({ articles }: { articles: readonly ArticleData[] }) {
  return (
    <div
      className="w-full pt-4 pb-6 px-5 grid mr-auto ml-auto gap-y-5 sm:py-8 md:py-12 sm:gap-y-8 md:gap-y-16
max-w-7xl"
    >
      <BigArticle article={articles[0]}></BigArticle>

      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
        {articles.slice(1).map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
}
