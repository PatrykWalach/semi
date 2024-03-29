import { ARTICLES, ArticleData } from "@/components/Article";
import ArticlePage from "./ArticlePage";

function getArticle(id: number) {
  return new Promise<ArticleData>((resolve, reject) =>
    setTimeout(() => {
      const article = ARTICLES.find((article) => id === article.id);
      if (!article) {
        return reject();
      }

      return resolve(article);
    }, Math.random() * 1000)
  );
}

export default async function Page({
  params,
}: {
  params: Record<string, string>;
}) {
  const article = await getArticle(Number(params.id));

  return <ArticlePage article={article}></ArticlePage>;
}
