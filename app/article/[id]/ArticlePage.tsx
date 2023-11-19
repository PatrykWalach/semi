import { ArticleData } from "@/components/Article";
import { BigArticle } from "@/components/BigArticle";

import './ArticlePage.css';

export default function ArticlePage({ article }: { article: ArticleData }) {
  return (
    <main className="article-page">
      <div className="article-page__container">
        <header>
          <BigArticle article={article}></BigArticle>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
          className="prose article-page__prose lg:prose-2xl dark:prose-invert"
        ></section>{" "}
      </div>
    </main>
  );
}
