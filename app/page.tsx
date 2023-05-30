import { ARTICLES, ArticleData } from "./Article";
import Home from "./Home";

function getArticles() {
  return new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, ARTICLES)
  );
}

export default async function Route() {
  const articles = await getArticles();

  return <Home articles={articles}></Home>;
}
