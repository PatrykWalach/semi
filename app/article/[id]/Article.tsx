import { ArticleData } from "@/app/Article";
import { BigArticle } from "@/app/BigArticle";

export default function Article({ article }: { article: ArticleData }) {
  return (
    <main className="bg-surface text-on-surface">
      <div className="container mx-auto py-4 grid md:gap-8">
        <header>
          <BigArticle article={article}></BigArticle>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
          className="prose py-4 lg:prose-2xl dark:prose-invert"
        ></section>{" "}
      </div>
    </main>
  );
}
