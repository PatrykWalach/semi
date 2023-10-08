import { ArticleData } from "@/components/Article";
import { BigArticle } from "@/components/BigArticle";

export default function ArticlePage({ article }: { article: ArticleData }) {
  return (
    <main className="bg-surface text-on-surface">
      <div className="container mx-auto py-4 grid gap-8">
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
