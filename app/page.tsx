import { ARTICLES, ArticleData } from "@/components/Article";
import HomePage from "./HomePage";
import { json, useLoaderData } from "@remix-run/react";

export async function loader() {
  return json(await new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, ARTICLES)
  ));
}



export default  function Route() {
 
  const articles = useLoaderData<typeof loader>();

  return <HomePage articles={articles}></HomePage>;
}
