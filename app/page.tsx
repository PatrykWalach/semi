import { ARTICLES, ArticleData } from "@/components/Article";
import HomePage from "./HomePage";

function getArticles() {
  return new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, ARTICLES)
  );
}

export default async function Route() {
 
const articles = await getArticles();

  return <HomePage articles={articles}></HomePage>;
}
