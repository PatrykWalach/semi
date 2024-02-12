import { ARTICLES, ArticleData } from "@/components/Article";
import { ClientLoaderFunctionArgs, useLoaderData, } from "@remix-run/react";
import ArticlePage from "./ArticlePage";

export function loader({params}:ClientLoaderFunctionArgs) {
  return new Promise<ArticleData>((resolve, reject) =>
    setTimeout(() => {
      const article = ARTICLES.find((article) => params.id === article.id);
      if (!article) {
        return reject();
      }

      return resolve(article);
    }, Math.random() * 1000)
  );
}

export default  function Page() {
  const article = useLoaderData<typeof loader>()

  return <ArticlePage article={article}></ArticlePage>;
}
