import { Article } from "./Article";
import { BigArticle } from "./BigArticle";
import type { Article as ArticleT } from "./page";


export function Articles({ articles }: { articles: readonly ArticleT[]; }) {
  return (
    <div
      className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
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
